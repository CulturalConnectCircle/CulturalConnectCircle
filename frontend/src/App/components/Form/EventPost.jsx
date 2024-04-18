import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, ListItemAvatar, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { Box } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import axios from 'axios';

export default ({eventPosts}) => {

    const deleteEvent = async (name) => {
        
        console.log("console stuff",name);
        const response = await axios.delete('http://localhost:3000/delete/events', {data :{name: name}})
        console.log(response);
    }

    return (
        <div>
        {console.log(eventPosts)}
            <List sx={{
                marginTop: '50px',
            }}>
                {
                    eventPosts && eventPosts.map((event) => (
                        <Box sx={{  flexGrow: 1, maxWidth: 752, backgroundColor:'#f7e7c8' }}>
                        <ListItem alignItems='flex-start' key={event._id}>
                            <ListItemAvatar>
                                <Avatar>
                                    <WorkIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography variant='h4' gutterBottom>{event.name}</Typography>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography variant='body1' gutterBottom>Venue: {event.venue}</Typography>
                                        <Typography variant='body1' gutterBottom>Date: {event.date}</Typography>
                                        <Typography variant='body1' gutterBottom>Time: {event.time}</Typography>
                                    </React.Fragment>
                                }
                            />
                            <ListItemAvatar onClick={() => deleteEvent(event.name)}>
                                <Avatar>
                                    <DeleteOutlinedIcon />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItem>
                        </Box>
                    ))
                }
            </List>
        </div>
    );
}