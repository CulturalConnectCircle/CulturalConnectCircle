import { useState } from "react";
import Footer from "../components/Footer/Footer";
import JobPost from "../components/Form/JobPost";
import NavigationBar from "../components/NavBar/NavigationBar";
import * as React from 'react';
import axios from "axios";
import { useEffect } from "react";

export default () => {

    const [jobPosts, setJobPosts] = useState([]);

    const getJobPosts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/get/jobs');
            setJobPosts(response.data);
            console.log(jobPosts);
        } catch ( error ) {
            console.log(error);
        }
    }

    useEffect(() => {
        getJobPosts();
    }, []);
      
    return (
        <>
            <NavigationBar name="UPCOMING EVENTS"/>
            <JobPost jobPosts={jobPosts} sx={{
                marginTop: '50px',
            }}/>
            <Footer/>
        </>
    );
}