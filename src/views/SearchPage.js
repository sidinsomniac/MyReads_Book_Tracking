import React,{Component} from 'react'
import { search } from '../BooksAPI'
import {Link} from 'react-router-dom'
import Books from '../Books'

class Searchpage extends Component {
	state = {
		query: '',
		searchedBooks: []
	}

	// updates the query with whatever is typed into the input search field 
	updateQuery = (query) => {
		this.setState({
			query: query
		});
		this.getSearchedBooks(query);
	}

	// gets an array of books matching the query and updates the state
	getSearchedBooks = (query) => {
		if (query) {
			search(query).then((books)=> {
				(books.error) ? this.setState({
					// shows an empty page if there is an error while searching
						searchedBooks: []
					})
				: this.setState({
					searchedBooks: books
				})
			})
		} else {
			this.setState({
				searchedBooks: []
			})
		}
	}

	render() {

		const {query,searchedBooks} = this.state,
			{allBooks,moveBook} = this.props;

		return (
			<div className="search-books">
				<div className="search-books-bar">
				<Link to='/'>
					<button className="close-search">Close</button>
				</Link>
				<div className="search-books-input-wrapper">					
					<input type="text" placeholder="Search by title or author" value={query} onChange={event => this.updateQuery(event.target.value)}/>
				</div>
				</div>
				<div className="search-books-results">
				<ol className="books-grid">
					{searchedBooks.map( book => {
						// determines the shelf state for each book in the search page by comparing with books in homepage
						let currentShelf = 'none';
						allBooks.map(savedBook => 
							(book.id === savedBook.id) ? currentShelf = savedBook.shelf : '' 
						)
						return (<Books bookLists={book} key={book.id} moveBook={moveBook} shelf={currentShelf}/>)
					})}
				</ol>
				</div>
			</div>
		)
	}
}

export default Searchpage