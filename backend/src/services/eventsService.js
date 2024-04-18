const mongoose = require('mongoose');
import { eventsSchema } from '../models/eventsSchema';
import { EventDoesNotExist, EventAlreadyExists } from '../errors/errorHandling';

const Event = mongoose.model('Event', eventsSchema)

export const createEventPost = async (name, date, venue, time) => {

    const eventExists = await Event.findOne({name: name});
    if(eventExists != null) {
        throw new EventAlreadyExists();
    }

    let event = new Event({
        name: name,
        date: date,
        venue: venue,
        time: time
    })
    const newEvent = await event.save();
    return newEvent;

};

export const getAllEvents = async () => {
    return await Event.find();
};

export const deleteEvent = async (name) => {
    const deleteOneEvent = await Job.findOne({name: name});
    if(deleteOneEvent == null) {
        throw new EventDoesNotExist();
    }
    await Event.findOneAndDelete({name: name});
}