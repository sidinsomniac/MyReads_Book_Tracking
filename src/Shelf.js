import React,{Component} from 'react'
import Books from './Books';

class Shelf extends Component {
	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.heading}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.props.allBooks
							.filter(books => books.shelf === this.props.shelfId)
							.map(book => <Books key={book.id} bookLists={book}/>)}
					</ol>
				</div>
			</div>
		)
	}
}

export default Shelf