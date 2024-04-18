import { Box, Grid, Typography } from '@mui/material';

export default () => {
    return (
        <Box 
            className="fixed-bottom"
            sx={{
                bgcolor:'#750606',
                width: 'autopx',
                color: 'aliceblue',
                height: '50px', 
                pt: 2,
            }}
        >
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Typography align="center" variant="body1">
                        © 2024 Cultural Connect Circle
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}