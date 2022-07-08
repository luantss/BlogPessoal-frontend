import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import './Navbar.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        alert("Usuário deslogado")
       navigate('/login')
    }

    var navbarComponent;

    if(token !== "") {
        navbarComponent = <AppBar position="static" className='back'>
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
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;