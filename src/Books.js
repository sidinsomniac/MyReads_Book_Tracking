import React,{Component} from 'react'

class Books extends Component {
	render() {
		const {bookLists,moveBook} = this.props;
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookLists.imageLinks.thumbnail})` }}></div>
						<div className="book-shelf-changer">
							<select onChange={e => moveBook(bookLists,e.target.value)} value={bookLists.shelf}>
								<option value="move" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{bookLists.title}</div>
					<div className="book-authors">{bookLists.authors.join(', ')}</div>
				</div>
			</li>
		)
	}
}

export default Books