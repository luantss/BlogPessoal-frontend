import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import './Navbar.css'
import React from 'react';
import useLocalStorage from 'react-use-localstorage';

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();
    
    function goLogout(){
        setToken('')
        alert("Usuário deslogado")
       navigate('/login')
    }

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
                        <Link to='/home' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className='textitens'>
                                Home
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/posts' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className='textitens'>
                                Postagens
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/temas' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className='textitens'>
                                Temas
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/formularioTema' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className='textitens'>
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        </Link>
                        
                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit" className='textitens'>
                                    Logout
                                </Typography>
                            </Box>
                                             
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;