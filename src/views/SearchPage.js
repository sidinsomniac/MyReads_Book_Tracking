import React,{Component} from 'react'
import { search } from '../BooksAPI'
import {Link} from 'react-router-dom'
import Books from '../Books'
// import escapeRegEx from 'escape-string-regexp'

class Searchpage extends Component {
	state = {
		query: '',
		searchedBooks: []
	}

	updateQuery = (query) => {
		this.setState({
			query: query
		});
		this.getSearchedBooks(query);
	}

	getSearchedBooks = (query) => {
		if (query) {
			search(query).then((books)=> {
				(books.error) ? this.setState({
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

		// if(query) {
		// 	const match = new RegExp(escapeRegEx(query),'i');
		// 	showingContacts = contacts.filter(contact => match.test(contact.name));
		// } else {
		// 	showingContacts = contacts;
		// }

		return (
			<div className="search-books">
				<div className="search-books-bar">
				<Link to='/'>
					<button className="close-search">Close</button>
				</Link>
				<div className="search-books-input-wrapper">
					{/*
					NOTES: The search from BooksAPI is limited to a particular set of search terms.
					You can find these search terms here:
					https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

					However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
					you don't find a specific author or title. Every search is limited by search terms.
					*/}
					<input type="text" placeholder="Search by title or author" value={this.state.query} onChange={event => this.updateQuery(event.target.value)}/>

				</div>
				</div>
				<div className="search-books-results">
				<ol className="books-grid">
					{this.state.searchedBooks.map( book => <Books bookLists={book} key={book.id}/>)}
				</ol>
				</div>
			</div>
		)
	}
}

export default Searchpage