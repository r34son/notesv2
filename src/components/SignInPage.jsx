import React, { useState } from 'react'
import { 
    Grid,
    FormControl, 
    FormLabel, 
    FormGroup, 
    TextField, 
    InputAdornment,
    Input, 
    InputLabel,  
    IconButton, 
    Paper,
    Button,
    Divider,
    makeStyles,
} from '@material-ui/core'
import {
    Visibility,
    VisibilityOff,
} from '@material-ui/icons'
import { Redirect } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Header from './Header'

import { login } from '../requests'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    marginb: {
      marginBottom: theme.spacing(3),
    },
    label: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '18px'
    }
  }));

const SignInPage = ({ history, location, setOpen, setData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();

  return (
    <>
      <Header  history={history} />
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
        style={{ minHeight: 'calc(100vh - 50px)' }}
      >
        {isLoading ?  <Loader type="CradleLoader" color="#64ba69" height={80} width={80} /> :
          localStorage.getItem('authData') ? 
          <Redirect to={{
              pathname: location.state ? location.state.from.pathname : '/',
              state: {from: location }
          }}/>
          :
          <Grid item>
            <Paper style={{ padding: '30px'}} elevation={4}>
              <form onSubmit={e => {
                  e.preventDefault();
                  login({ email, password }, setIsLoading, data => { 
                    setOpen(true);                    
                    setData(data);
                  });
                }}>
                <FormControl>
                  <FormLabel filled className={`${classes.marginb} ${classes.label}`}>
                    Login
                  </FormLabel>
                  <Divider/>
                  <FormGroup>
                    <TextField 
                      label='Email'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      margin='normal'
                      autoFocus
                    />
                    <FormControl className={classes.marginb}>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input
                        id="password"
                        type={showPw ? 'text' : 'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        endAdornment={
                          <InputAdornment position="end">
                          <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPw(!showPw)}
                              onMouseDown={e => e.preventDefault()}
                          >
                              {showPw ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                          </InputAdornment>
                      }
                      />
                    </FormControl>
                  </FormGroup>
                  <Button type='submit' variant='contained' size='medium' color='primary'>
                    Login
                  </Button>
                </FormControl>
              </form>
            </Paper>
          </Grid>
        }
    </Grid>
  </>
  )
}

export default SignInPage
