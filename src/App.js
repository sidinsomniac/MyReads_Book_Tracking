import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import Searchpage from './views/SearchPage';
import Homepage from './views/Homepage';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={Homepage}/>
        <Route path='/search' component={Searchpage}/>
      </div>
    )
  }
}

export default BooksApp
