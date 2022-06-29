import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import './Navbar.css'
import React from 'react';

function Navbar() {
    return (
        <>
            <AppBar position="static" className='back'>
                <Toolbar variant="dense" className='tbar'>
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit" className='textblog'>
                            <LibraryBooksIcon/> BlogPessoal            
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className='textitens'>
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className='textitens'>
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className='textitens'>
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className='textitens'>
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='textitens'>
                                    Logout
                                </Typography>
                            </Box>
                        </Link>                       
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;