import React, { useState } from 'react'
import { 
    Grid,
    FormControl, 
    FormLabel, 
    FormGroup, 
    TextField, 
    Input, 
    InputLabel,  
    Paper,
    Button,
    Divider,
    makeStyles,
} from '@material-ui/core'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Header from './Header'

import { register } from '../requests'

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

const SignUpPage = ({ location, history, setOpen, setData }) => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirm, setPasswordConfirm] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();
  return (
    <>
      <Header history={history} />
      <Grid
        container
        spacing={0}
        direction='column'
        className={'header-center'}
      >
        {isLoading ? 
          <Loader type="CradleLoader" color="#64ba69" height={80} width={80} /> :
          <Grid item>
            <Paper style={{ padding: '30px', width: 300 }} elevation={4}>
              <form onSubmit={e => {
                  e.preventDefault();
                  register({ email, login, password, password_confirm }, setIsLoading, data => { 
                    setOpen(true);                    
                    setData(data);
                    if(!data.error){
                      history.push('/login')
                    }
                  });
                }}>
                <FormControl fullWidth>
                  <FormLabel filled className={`${classes.marginb} ${classes.label}`}>
                    Register
                  </FormLabel>
                  <Divider/>
                  <FormGroup>
                    <TextField 
                      label='Email'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      autoFocus
                    />
                    <TextField 
                      label='Login'
                      value={login}
                      onChange={e => setLogin(e.target.value)}
                    />
                    <FormControl>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input
                        id="password"
                        type={'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </FormControl>
                    <FormControl className={classes.marginb}>
                      <InputLabel htmlFor="password">Confirm password</InputLabel>
                      <Input
                        id="password_confirm"
                        type={'password'}
                        value={password_confirm}
                        onChange={e => setPasswordConfirm(e.target.value)}

                      />
                    </FormControl>
                  </FormGroup>
                  <Button type='submit' variant='contained' size='medium' color='primary'>
                    Sign Up
                  </Button>
                </FormControl>
              </form>
            </Paper>
          </Grid>}
    </Grid>
  </>
  )
}

export default SignUpPage
