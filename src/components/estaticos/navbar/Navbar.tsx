import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import './Navbar.css'
import React from 'react';

function Navbar() {
    return (
        <>
            <AppBar position="static" className='back'>
                <Toolbar variant="dense" className='toolbar'>
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" className='blogt'>
                        <LibraryBooksIcon /> BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" className='title'>
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" className='title'>
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" className='title'>
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" className='title'>
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" className='title'>
                                logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;