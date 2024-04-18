import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import TableHead from '@mui/material/TableHead';
import { useState } from 'react';
import axios from 'axios';
import AdminNavigationBar from '../components/NavBar/AdminNavigationBar';
import Footer from '../components/Footer/Footer';
import { Form } from "react-bootstrap";

export default () => {

    const [name, setName] = useState("");
    const [venue, setVenue] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:3000/create/event', {
            name: name, 
            venue: venue,
            date: date,
            time: time
        });
        document.getElementById('addJob').submit();
        console.log(response);
    }

    return (
        <>
            <AdminNavigationBar name="Add Event Posts"/>
            <form onSubmit={handleSubmit} id='addJob'>
                <TableContainer component={Paper} sx={{  flexGrow: 1, maxWidth: 752, backgroundColor:'#fbf4e6' }}>
                    <Table sx={{ minWidth: 300 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ "& td": { border: 0 } }}>
                                <TableCell align="center" colSpan={2}>
                                    Create New Event Post
                                </TableCell>
                            </TableRow>
                        </TableHead>
                            <TableBody>
                                <TableRow sx={{ "& td": { border: 0 } }}><TableCell></TableCell></TableRow>
                                <TableRow sx={{ "& td": { border: 0 } }}>
                                    <TableCell>Enter Event Name:</TableCell>
                                    <TableCell align="right">
                                        <input 
                                            id='name'
                                            placeholder='Enter Event Name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ "& td": { border: 0 } }}>
                                    <TableCell>Enter Venue:</TableCell>
                                    <TableCell align="right">
                                        <input 
                                            id='venue'
                                            placeholder='Enter Venue'
                                            value={venue}
                                            onChange={(e) => setVenue(e.target.value)}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ "& td": { border: 0 } }}>
                                    <TableCell>Enter Date:</TableCell>
                                    <TableCell align="right">
                                        <input 
                                            id='date'
                                            placeholder='Enter a date'
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ "& td": { border: 0 } }}>
                                    <TableCell>Enter time:</TableCell>
                                    <TableCell align="right">
                                        <input 
                                            id='time'
                                            placeholder='Enter time'
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ "& td": { border: 0 }, justifyContent: 'center' }}>
                                    <TableCell align="center" colSpan={2}>
                                        <Button 
                                            variant="outlined" 
                                            style={{ color:'black', borderBlockColor: 'black' }}
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow><TableCell></TableCell></TableRow>
                            </TableBody>
                    </Table>
                </TableContainer>  
                </form>          
            <Footer/>
        </>
    )
} 