import React, { useState } from 'react'
import {
  Grid, Card, CardContent,/* CardActions, Typography,*/TextField, FormControl, FormGroup, Button, IconButton, Fab, makeStyles
} from '@material-ui/core'
import { Add, Close, KeyboardVoice, Stop } from '@material-ui/icons'
import { ReactMic } from 'react-mic';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import { addNote } from '../requests'


const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: 285,
    flex: 1,
    position: 'relative',
    overflow: 'visible',
  },
  content: {
    position: 'relative',
    flex: 1,
  },
  close: {
    position: 'absolute',
    top: 0,
    right: -30,
    padding: 2,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 8
  }
});

const AddNote = ({ setOpen, setData, setNotes }) => {
  const [add, setAdd] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const [record, setRecord] = useState(false)
  const [audio, setAudio] = useState(null)

  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();

  return (
    <Grid item xs={12} md={3}>
      <Card className={classes.card}>
        {add && (
          <IconButton className={classes.close} onClick={() => setAdd(!add)}>
            <Close />
          </IconButton>
        )}
        <CardContent className={classes.content}>
        {isLoading ? 
        <Loader type="CradleLoader" className={'abs-center'} color="#64ba69" height={80} width={80} /> :
        !add ?
          <IconButton className={'abs-center'} onClick={() => setAdd(true)}>
            <Add style={{ fontSize: 75 }} />
          </IconButton> 
          : 
          <form 
            style={{ width: '100%' }}
            onSubmit={e => {
              e.preventDefault();
              addNote({ title, text, audio: audio ? new File([audio.blob], 'audio') : null }, setIsLoading, data => { 
                setOpen(true);                    
                setData(data);
              }, setNotes);
              setAdd(false)              
              setRecord(false)
              setText('')
              setTitle('')
              setAudio(null)
            }}
          >
          <FormControl fullWidth>
            <FormGroup>
              <TextField 
                variant='outlined'
                label='Title'
                value={title}
                onChange={e => setTitle(e.target.value)}
                margin='dense'
                autoFocus
              /> 
              <TextField 
                fullWidth
                variant='outlined'
                label='Text'
                value={text}
                onChange={e => setText(e.target.value)}
                margin='dense'
                multiline
                rows={4}
              />
            </FormGroup>
            <div className={classes.flex}>
              <Fab
                color={record ? 'default' : 'primary'}
                size='small'
                onClick={() => setRecord(!record)}
              >
                {record ? <Stop />: <KeyboardVoice />}            
              </Fab>
              <ReactMic
                record={record}
                className="sound-wave"
                onStop={data => {
                  console.log('onStop: ', new File([data.blob], 'audio'))
                  setAudio(data)
                }}
                onData={data => console.log('onData: ', data)}
                strokeColor="#000000"
                backgroundColor="#707070" 
            />
            </div>
            <Button 
              type='submit' 
              variant='contained' 
              size='medium' 
              color='primary'               
              startIcon={<Add />}
              style={{ marginTop: 8, fontSize: 12 }}
            >
              Добавить заметку
            </Button>
          </FormControl>
        </form>
        }
        </CardContent>
      </Card>
    </Grid>
  )
}

export default AddNote
