import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import { Grid, Typography, Paper } from '@material-ui/core'
import _ from 'lodash'
import Note from './Note'
import Header from './Header'

import { getNote } from '../requests'


const SharePage = ({ history, location }) => {
  const hash = window.location.hash.replace('#/share/', ''); 
  const [isLoading, setIsLoading] = useState(false)
  const [note, setNote] = useState({})
  useEffect(() => {
    localStorage.getItem('authData') && getNote(hash, setIsLoading, setNote)
  }, [hash])
  return (
    <>
      <Header  history={history} />
      <Grid container className={'header-center'}>
        {localStorage.getItem('authData') 
        ? isLoading 
          ? <Loader type="CradleLoader" color="#64ba69" height={80} width={80} /> 
          : !_.isEmpty(note) 
            ? <Note note={note} share /> 
            : <Paper style={{ padding: 20 }}><Typography color='secondary'>Заметку удалил ее создатель. Ее просмотр больше невозможен.</Typography></Paper>
        : <Redirect to={{
            pathname: '/login',
            state: {from: location }
          }} 
      />}
      </Grid>
    </>
  )
}

export default SharePage
