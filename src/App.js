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

	// sets the state to all current books that are in the shelves
	getBooks = () => {
		getAll().then((books) => {
			this.setState({
				allBooks: books
			});
		}).catch((err) => {
			console.log(err);
		});
	}
	
	// moves and updates the books from one shelf to another selected shelf
	moveBook = (book,shelf) => {
		update(book, shelf).then(this.getBooks);
	}

  render() {
		const {allBooks} = this.state;
    return (
      <div className="app">
				{/* the homepage component */}
        <Route exact path='/' render={()=>(<Homepage moveBook={this.moveBook} allBooks={allBooks}/>)}/>
				{/* the searchpage component */}
        <Route path='/search' render={()=>(<Searchpage moveBook={this.moveBook} allBooks={allBooks}/>)}/>
      </div>
    )
  }
}

export default BooksApp
