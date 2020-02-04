import React, { useState, useRef } from 'react'
import {
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  TextField, 
  FormControl, 
  FormGroup, 
  IconButton,
  Fab,
  Popover,
  Paper,
  Tooltip,
  Typography,
  makeStyles
} from '@material-ui/core'
import { Star, StarBorder, Delete, Edit, Save, PlayArrow as Play, Stop, Share, Telegram, Email } from '@material-ui/icons'
import VK from '@vkontakte/icons/dist/24/logo_vk';
import {
  TelegramShareButton,
  VKShareButton,
  EmailShareButton,
} from 'react-share';
import moment from 'moment';
import 'moment/locale/ru';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import { editNote, deleteNote, addToFavorite } from '../requests'

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: 285,
  },
  content: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  floatRight: {
    marginLeft: 'auto !important',
  }
});

const Note = ({ note, setOpen, setData, setNotes, share }) => {
  const [edit, setEdit] = useState(false)
  const [title, setTitle] = useState(note.title || '')
  const [text, setText] = useState(note.text || '')

  const [isLoading, setIsLoading] = useState(false);

  const [play, setPlay] = useState(false)
  const audio = useRef();

  const [anchorEl, setAnchorEl] = useState(null);
  const url = `${window.location.href}share/${note.hash}`;

  const classes = useStyles();

  const submit = e => {
    e.preventDefault();
    editNote({ title, text, id: note.id }, setIsLoading, data => { 
      setOpen(true);                    
      setData(data);
    }, setNotes);
    setEdit(false)
  }

  return (
    <Grid item xs={12} md={3}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
        {isLoading ? 
          <Loader type="CradleLoader" color="#64ba69" height={80} width={80} className="abs-center" /> :
          <form 
            style={{ flex: 1 }}
            onSubmit={submit}
          >
          <FormControl fullWidth className='fullHeight'>
            <Grid container justify={share ? 'space-between' : 'flex-end'}>
              {share && <Typography 
                variant="subtitle1" 
                color="textSecondary" 
                paragraph
              >
                {`from ${note.user_name}`}
              </Typography>}
              <Typography 
                variant="subtitle2" 
                color="textSecondary" 
                paragraph
              >
                {moment(note.updated_at).fromNow()}
              </Typography>
            </Grid>
            <FormGroup className='fullHeight'>
              <TextField 
                variant='outlined'
                disabled={!edit}
                label='Title'
                value={title}
                onChange={e => setTitle(e.target.value)}
                onBlur={submit}
                margin='dense'
                autoFocus
              /> 
              <TextField 
                fullWidth
                variant='outlined'
                disabled={!edit}
                label='Text'
                value={text}
                onChange={e => setText(e.target.value)}
                onBlur={submit}
                margin='dense'
                multiline
                rows={4}
              />
            </FormGroup>
          </FormControl>
        </form>
        }
        </CardContent>
        <CardActions>
          {note.audio && (
            <>
              <audio ref={audio} src={note.audio} onEnded={() => setPlay(false)} allow="autoplay" />
              <Fab 
                size='small' 
                onClick={() => {
                  if (play){
                    setPlay(false)
                    audio.current.pause()
                  }
                  else  {
                    setPlay(true)
                    audio.current.play()
                  }
                }}
                color={!play ? 'primary' : 'default'}
              >
                {play ? <Stop /> : <Play />}
              </Fab>
            </>
          )}
          {!share &&
          <>
            <IconButton 
              onClick={() => addToFavorite(note.id, setIsLoading, data => { 
                  setOpen(true);                    
                  setData(data);
                }, setNotes)
              }
            >
              {note.is_favorite ? <Star /> : <StarBorder /> }
            </IconButton>
            <IconButton onClick={e => setAnchorEl(e.currentTarget)} >
              <Share />
            </IconButton>
            <Popover
              open={!!anchorEl}
              anchorEl={anchorEl}
              onClose={() => setAnchorEl(null)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Paper className='share-links'>
                <TelegramShareButton url={url}>              
                  <Tooltip title='Telegram'>
                    <IconButton>
                      <Telegram />
                    </IconButton>              
                  </Tooltip>
                </TelegramShareButton>
                <VKShareButton url={url}>
                  <Tooltip title='VK'>
                    <IconButton>
                      <VK />
                    </IconButton>
                  </Tooltip>
                </VKShareButton>
                <EmailShareButton url={url}>
                  <Tooltip title='Email'>
                    <IconButton>
                      <Email />
                    </IconButton>              
                  </Tooltip>
                </EmailShareButton>
              </Paper>
            </Popover>
            <div className={classes.floatRight}>
              <IconButton
                onClick={e => {
                  setEdit(!edit)
                  edit && submit(e);
                }}
              >
                {edit ? <Save /> : <Edit />}
              </IconButton>
              <IconButton
                color='secondary'
                onClick={() => {
                  deleteNote(note.id, setIsLoading, data => { 
                    setOpen(true);                    
                    setData(data);
                  }, setNotes)
                }}
              >
                <Delete />
              </IconButton>
            </div>
          </>}

        </CardActions>
      </Card>
    </Grid>
  )
}

export default Note
