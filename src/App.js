import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import Searchpage from './views/SearchPage'
import Homepage from './views/Homepage'
import { update, getAll } from './BooksAPI';

class BooksApp extends React.Component {

  state = {
		allBooks : []
	}
	
	componentDidMount() {
		this.getBooks();
	}

	getBooks = () => {
		getAll().then((books) => {
			this.setState({
				allBooks: books
			});
		}).catch((err) => {
			console.log(err);
		});
	}
  
	moveBook = (book,shelf) => {
		update(book, shelf).then(this.getBooks);
	}

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(<Homepage moveBook={this.moveBook} allBooks={this.state.allBooks}/>)}/>
        <Route path='/search' render={()=>(<Searchpage moveBook={this.moveBook} allBooks={this.state.allBooks}/>)}/>
      </div>
    )
  }
}

export default BooksApp
