import firebase from 'firebase'
import {FirebaseConfigType} from './types'

const firebaseConfig: FirebaseConfigType = {
  apiKey: 'AIzaSyAC6aDK6EW0LGbLgaICQXpwIqCzJeWez-k',
  authDomain: 'firstmap-1571998274715.firebaseapp.com',
  databaseURL: 'https://firstmap-1571998274715.firebaseio.com',
  projectId: 'firstmap-1571998274715',
  storageBucket: 'firstmap-1571998274715.appspot.com',
  messagingSenderId: '118443670237',
  appId: '1:118443670237:web:0065004b3d2dae1c9df934',
  measurementId: 'G-18X6NXQH9C'
}

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
