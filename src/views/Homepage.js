import React,{Component} from 'react'
import Shelf from '../Shelf'
import {getAll} from '../BooksAPI'

class Homepage extends Component {
	state = {
		allBooks : [],
		currentlyReading: [],
		wantToRead: [],
		read: []
	}
	componentDidMount() {
		getAll().then((books)=> {
			this.setState({
				allBooks: books,
				currentlyReading: books.filter((book)=> book.shelf==='currentlyReading'),
				wantToRead: books.filter((book)=> book.shelf==='wantToRead'),
				read: books.filter((book)=> book.shelf==='read')
			});
		}).catch((err)=>{
			console.log(err);
		})
	}	
	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Shelf heading='Currently Reading' bookCollection={this.state.currentlyReading}/>
						<Shelf heading='Want to Read' bookCollection={this.state.wantToRead}/>
						<Shelf heading='Read' bookCollection={this.state.read}/>
					</div>
				</div>
				<div className="open-search">
					<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
				</div>
			</div>
		)
	}
}

export default Homepage