import React from 'react'
import { 
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core'
import { Menu as MenuIcon, ExitToApp as ExitIcon } from '@material-ui/icons'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  marginRight: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white',
  },
}));

const Header = ({ history }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ height: '50px' }}>
    <Toolbar style={{ minHeight: '100%' }}>
      <IconButton edge="start" className={classes.marginRight} color="inherit">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title} component={Link} to="/">
        Notes
      </Typography>
      {localStorage.getItem('authData') ?
      <>
        <Typography  className={classes.marginRight}>
          {JSON.parse(localStorage.getItem('authData')).user_name}
        </Typography>
        <IconButton onClick={() => {
          if(window.confirm("Выйти из аккаунта?")){
            localStorage.removeItem('authData');
            history.push('/login');
          }
        }}>
          <ExitIcon />
        </IconButton>
      </>
      : 
      <>
        <Button color="inherit" component={Link} to='/login'>Login</Button>
        <Button color="inherit" component={Link} to='/signup'>Register</Button>
      </>
      }
    </Toolbar>
  </AppBar>
  )
}
export default Header
