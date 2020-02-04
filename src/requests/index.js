import config from '../config'

export const login = (credentials, setIsLoading, setFetchedData) => {
  setIsLoading(true);
  console.log('Sending Http request to login.');
  fetch(`${config.protocol}://${config.api_url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }, 
      body: JSON.stringify(credentials)
    })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error((await response.json()).message);
      }
      return response.json();
    })
    .then(({ data, message }) => {
      setIsLoading(false);
      localStorage.setItem('authData', JSON.stringify(data))
      console.log(`Login data:`, data)
      setFetchedData({ error: 0, message });
    })
    .catch(({ message }) => {
      console.log(message);
      setFetchedData({ error: 1, message });
      setIsLoading(false);
    });
}

export const register = (credentials, setIsLoading, setFetchedData) => {
  setIsLoading(true);
  console.log('Sending Http request to register.');
  fetch(`${config.protocol}://${config.api_url}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }, 
      body: JSON.stringify(credentials),
    })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error((await response.json()).message);
      }
      return response.json();
    })
    .then(({ data, message }) => {
      setIsLoading(false);
      console.log(`Register data:`, data)
      setFetchedData({ error: 0, message });
    })
    .catch(err => {
      console.log(err);
      setFetchedData({ error: 1, data: err.message });
      setIsLoading(false);
    });
}

export const addNote = (note, setIsLoading, setFetchedData, setNotes) => {
  setIsLoading(true);
  console.log('Sending Http request to add note.');
  fetch(`${config.protocol}://${config.api_url}/notes`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authData')).token}`
      }, 
      body: Object.keys(note).reduce((formData, key) => {
        formData.append(key, note[key]);
        return formData;
    }, new FormData()),
    })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error((await response.json()).message);
      }
      return response.json();
    })
    .then(async ({ data, message }) => {
      setIsLoading(false);
      console.log(`AddNote data:`, data)
      setFetchedData({ error: 0, message });
      getNotes(setIsLoading, setNotes);
    })
    .catch(err => {
      console.log(err);
      setFetchedData({ error: 1, data: err.message });
      setIsLoading(false);
    });
}
export const getNote = (hash, setIsLoading, setNote) => {
  setIsLoading(true);
  console.log('Sending Http request to get note. Hash:', hash);
  fetch(`${config.protocol}://${config.api_url}/notes/share/${hash}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authData')).token}`
      }, 
    })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error((await response.json()).message);
      }
      return response.json();
    })
    .then(({ data }) => {
      setIsLoading(false);
      console.log(`GetNote data:`, data)
      setNote(data);
    })
    .catch(err => {
      console.log(err);
      setIsLoading(false);
    });
}

export const getNotes = (setIsLoading, setNotes) => {
  setIsLoading(true);
  console.log('Sending Http request to get notes.');
  fetch(`${config.protocol}://${config.api_url}/notes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authData')).token}`
      }, 
    })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error((await response.json()).message);
      }
      return response.json();
    })
    .then(({ data }) => {
      setIsLoading(false);
      console.log(`GetNotes data:`, data)
      setNotes(data);
    })
    .catch(err => {
      console.log(err);
      setIsLoading(false);
    });
}

export const editNote = (note, setIsLoading, setData, setNotes) => {
  setIsLoading(true);
  console.log('Sending Http request to edit note.');
  fetch(`${config.protocol}://${config.api_url}/notes/${note.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authData')).token}`
      }, 
      body: JSON.stringify(note),
    })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error((await response.json()).message);
      }
      return response.json();
    })
    .then(data => {
      setIsLoading(false);
      console.log(`EditNote data:`, data)
      setData(data);
      getNotes(setIsLoading, setNotes);
    })
    .catch(err => {
      console.log(err);
      setIsLoading(false);
    });
}

export const deleteNote = (note_id, setIsLoading, setData, setNotes) => {
  setIsLoading(true);
  console.log('Sending Http request to delete note.');
  fetch(`${config.protocol}://${config.api_url}/notes/${note_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authData')).token}`
      }, 
    })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error((await response.json()).message);
      }
      return response.json();
    })
    .then(async (data) => {
      setIsLoading(false);
      console.log(`DeleteNote data:`, data)
      setData(data);
      getNotes(setIsLoading, setNotes);
    })
    .catch(err => {
      console.log(err);
      setIsLoading(false);
    });
}

export const addToFavorite = (note_id, setIsLoading, setData, setNotes) => {
  setIsLoading(true);
  console.log('Sending Http request to add to favorite notes.');
  fetch(`${config.protocol}://${config.api_url}/notes/favorite/${note_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authData')).token}`
      }, 
    })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error((await response.json()).message);
      }
      return response.json();
    })
    .then(data => {
      setIsLoading(false);
      console.log(`AddToFavorite data:`, data)
      setData(data);
      getNotes(() => null, setNotes)
    })
    .catch(err => {
      console.log(err);
      setIsLoading(false);
    });
}