import React,{Component} from 'react'
import Books from './Books';

class Shelf extends Component {
	render() {
		const {heading,allBooks,shelfId,moveBook} = this.props;
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{heading}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{allBooks
							.filter(books => books.shelf === shelfId)
							.map(book => <Books key={book.id} bookLists={book} moveBook={moveBook}/>)}
					</ol>
				</div>
			</div>
		)
	}
}

export default Shelf