import React,{Component} from 'react'
import Shelf from '../Shelf'
import * as BooksAPI  from '../BooksAPI'

class Homepage extends Component {
	state = {
		allBooks : []
	}
	
	componentDidMount() {
		this.getBooks();
	}

	moveBook = (book,shelf) => {
		BooksAPI.update(book, shelf).then(this.getBooks);
	}

	getBooks = () => {
		BooksAPI.getAll().then((books) => {
			this.setState({
				allBooks: books
			});
		}).catch((err) => {
			console.log(err);
		});
	}
	
	createShelf = (a,b) => {
		return (<Shelf key={this.state.allBooks.shelf} shelfId={a} heading={b} allBooks={this.state.allBooks} moveBook = {this.moveBook}/>)
	}
	
	render() {

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{this.createShelf('currentlyReading','Currently Reading')}
						{this.createShelf('wantToRead','Want to Read')}
						{this.createShelf('read','Read')}
					</div>
				</div>
				{/* <div className="open-search">
					<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
				</div> */}
			</div>
		)
	}
}

export default Homepage