import React,{Component} from 'react'
import Shelf from '../Shelf'
import {getAll} from '../BooksAPI'

class Homepage extends Component {
	state = {
		allBooks : []
	}
	componentDidMount() {
		getAll().then((books)=> {
			this.setState({
				allBooks: books
			});
		}).catch((err)=>{
			console.log(err);
		})
	}	
	render() {
		const {allBooks} = this.state;

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Shelf key={allBooks.shelf} shelfId='currentlyReading' heading='Currently Reading' allBooks={allBooks}/>
						<Shelf key={allBooks.shelf} shelfId='wantToRead' heading='Want to Read' allBooks={allBooks}/>
						<Shelf key={allBooks.shelf} shelfId='read' heading='Read' allBooks={allBooks}/>
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