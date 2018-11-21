import React,{Component} from 'react'

class Books extends Component {
	render() {
		const {bookLists,moveBook,shelf} = this.props;
		return (
			<li>
				<div className="book">
					<div className="book-top">
					{/* checks if thumbnail is available, and displays accordingly */}
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookLists.imageLinks && bookLists.imageLinks.thumbnail})` }}></div>
						<div className="book-shelf-changer">
							<select onChange={e => moveBook(bookLists,e.target.value)} value={shelf}>
								<option value="move" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					{/* truncates the book title if it is too long */}
					<div className="book-title">{bookLists.title.length > 60 ? bookLists.title.slice(0,60)+'...' : bookLists.title}</div>
					{/* checks if author is available and displays accordingly */}
					<div className="book-authors">{bookLists.authors && (bookLists.authors.join(', '))}</div>
				</div>
			</li>
		)
	}
}

export default Books