import React, { useState, useEffect } from 'react'
import { 
  Grid,
} from '@material-ui/core'
import { Redirect } from 'react-router-dom' 
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Header from './Header'
import ToolbarMenu from './ToolbarMenu'
import AddNote from './AddNote'
import Note from './Note'

import { getNotes } from '../requests'

const HomePage = ({ history, location, setOpen, setData }) => {  
  const [isLoading, setIsLoading] = useState(false)
  const [notes, setNotes] = useState([])
  const [sortedNotes, setSortedNotes] = useState([])

  useEffect(() => {
    localStorage.getItem('authData') && getNotes(setIsLoading, data => {
      setNotes(data)
      setSortedNotes(data)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header history={history} />
      {localStorage.getItem('authData') ?  
      <div style={{ padding: 30 }}>
        <ToolbarMenu notes={notes} setSortedNotes={setSortedNotes} />
        <Grid container spacing={1} className={isLoading ? 'home-center' : ''}>
          {isLoading ? <Loader type="CradleLoader" color="#64ba69" height={80} width={80} />
          : sortedNotes.map(note => <Note key={note.id} note={note} setOpen={setOpen} setData={setData} setNotes={setNotes} />)
          .concat(<AddNote key={'addnote'} setOpen={setOpen} setData={setData} setNotes={setNotes} />)}
        </Grid>
      </div>
      :
      <Redirect to={{
          pathname: '/login',
          state: {from: location }
        }} 
      />}
    </>
  )
}

export default HomePage
