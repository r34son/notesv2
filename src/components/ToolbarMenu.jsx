import React, { useState, useEffect } from 'react'
import { Container, Chip, makeStyles } from '@material-ui/core'
import { ArrowUpward as Up, ArrowDownward as Down, Clear } from '@material-ui/icons'
import _ from 'lodash/fp'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    }
  },
  chip: {
    margin: 10,
  },
}));

const ToolbarMenu = ({ notes, setSortedNotes }) => {
  const defaultFilter = {
    time: 'off',
    favorite: 'off',
  }
  const [filter, setFilter] = useState(defaultFilter)

  const classes = useStyles()
  const sortTimeAsc = data => data.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at))
  const sortTimeDesc = data => data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
  const defaultTimeState = data => data
  
  const applyFavorite = data => data.filter(note => note.is_favorite)
  const defaultFavoriteState = data => data

  const mapStateToFunc = {
    time: {
      off: defaultTimeState,
      asc: sortTimeAsc,
      desc: sortTimeDesc,
    },
    favorite: {
      off: defaultFavoriteState,
      on: applyFavorite,
    },
  }

  const filterFuncs = Object.entries(filter).map(([state, value]) => mapStateToFunc[state][value])
  const filterNotes = _.compose(setSortedNotes, ...filterFuncs)
  
  useEffect(() => {
    if(!_.isEmpty(notes)) {
      filterNotes(notes.slice())
    }
    else {
      setSortedNotes(notes)
    }
  //eslint-disable-next-line
  }, [notes, filter])

  const handleFilterClick = type => () => {
    const states = Object.keys(mapStateToFunc[type])    
    const current = states.indexOf(filter[type])
    const next = (current + 1) % states.length;
    setFilter({ ...filter, [type]: states[next]})
  }

  if(_.isEmpty(notes)) {
    return null;
  } else return (
    <Container maxWidth={false} className={classes.container}>
      <Chip
        className={classes.chip}
        icon={filter.time === 'off' ? null : filter.time === 'asc' ? <Up /> : <Down /> }
        deleteIcon={<Clear />}
        label='По времени'
        onClick={handleFilterClick('time')}
        onDelete={filter.time === 'off' ? null : defaultTimeState}
      />
      <Chip
        className={classes.chip}
        label='Только избранные'
        onClick={handleFilterClick('favorite')}
        color={filter.favorite === 'on' ? 'primary' : 'default'}
      />
    </Container>
  )
}

export default ToolbarMenu
