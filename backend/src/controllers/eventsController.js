import { createEventPost, getAllEvents, deleteEvent } from "../services/eventsService";

export const createEvent = async (req, res) => {

    const name = req.body.name;
    const date = req.body.date;
    const venue = req.body.venue;
    const time = req.body.time;

    try{

        const event = await createEventPost(name, date, venue, time);
        res.status(201).send(event);

    } catch ( error ) {

        if(error.name === "ValidatorError") {

            return res.status(400).json({ message: error.message });

        } else if (error.name === "EventAlreadyExists") {

            res.status(409).json({ message: error.message });

        } else {

            return res.status(500).send(error);
        
        }

    }

};

export const getEvents = async (req, res, next) => {
    try {

        const events = await getAllEvents();
        res.status(200).send(events);

    } catch (error) {

        return next(error);

    }
};

export const deleteEvents = async (req, res) => {

    const name = req.body.name;

    try{

        await deleteEvent(name);
        res.status(200).json({ message: "Event has been deleted successfully"});

    } catch ( error ) {

        if( error.name === "EventDoesNotExist") {

            return res.status(404).json({ message: error.message });

        } else {

            res.status(500).json({ message: "Internal server error" });

        }

    }

};