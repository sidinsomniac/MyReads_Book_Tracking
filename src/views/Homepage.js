import React,{Component} from 'react'
import Shelf from '../Shelf'
import {Link} from 'react-router-dom'

class Homepage extends Component {
	
	
	createShelf = (a,b) => {
		return (<Shelf key={this.props.allBooks.shelf} shelfId={a} heading={b} allBooks={this.props.allBooks} moveBook = {this.props.moveBook}/>)
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
				<Link to='/search'>
					<div className="open-search">
						<button>Add a book</button>
					</div>
				</Link>
			</div>
		)
	}
}

export default Homepage