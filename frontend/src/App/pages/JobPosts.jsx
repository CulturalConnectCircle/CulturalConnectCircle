import { useState } from "react";
import Footer from "../components/Footer/Footer";
import EventPost from "../components/Form/EventPost";
import NavigationBar from "../components/NavBar/NavigationBar";
import * as React from 'react';
import axios from "axios";
import { useEffect } from "react";

export default () => {

    const [eventPosts, setEventPosts] = useState([]);

    const getEventPosts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/get/events');
            setEventPosts(response.data);
            console.log(eventPosts);
        } catch ( error ) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEventPosts();
    }, []);
      
    return (
        <>
            <NavigationBar name="Upcoming Events"/>
            <EventPost eventPosts={eventPosts} sx={{
                marginTop: '50px',
            }}/>
            <Footer/>
        </>
    );
}