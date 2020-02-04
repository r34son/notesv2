import React, { useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { 
  IconButton,
  Snackbar,
  Slide,
  SnackbarContent,
} from '@material-ui/core'
import {
  Close as CloseIcon,
  CheckCircle as CheckIcon,
  Error as ErrorIcon,
} from '@material-ui/icons'
import HomePage from './components/HomePage'
import SignInPage from './components/SignInPage'
import SignUpPage from "./components/SignUpPage"
import SharePage from './components/SharePage'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({ error: null, message: null })
  
  return (
  <ThemeProvider theme={theme}>
    <Router>
      <Route exact path="/" render={props => <HomePage {...props} setOpen={setOpen} setData={setData} />} />
      <Route path="/login" render={props => <SignInPage {...props} setOpen={setOpen} setData={setData} />} />
      <Route path="/signup" render={props => <SignUpPage {...props} setOpen={setOpen} setData={setData} />} />
      <Route path="/share/:hash" render={props => <SharePage {...props} setOpen={setOpen} setData={setData} />} />
    </Router>
    <Snackbar
      style={{ pointerEvents: open ? '' : 'none' }}  
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={props => <Slide {...props} direction="up" />}
      autoHideDuration={4000}
    >
      <SnackbarContent 
        style={{ backgroundColor: data.error ? '#ef5350' : '#66bb6a' }}
        message={
          <div style={{display: 'flex', alignItems: 'center', }}>
            {data.error ? <ErrorIcon className='mr20' /> : <CheckIcon className='mr20' />}
            {data.message}
          </div>
        }
        action={
          <IconButton
            color="inherit"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        }
      />
    </Snackbar>
  </ThemeProvider>
)};

export default App;
