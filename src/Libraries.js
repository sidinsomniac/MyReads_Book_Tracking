import React,{Component} from 'react'
import Books from './Books';

class Libraries extends Component {
	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">Currently Reading</h2>
				<div className="bookshelf-books">
				<ol className="books-grid">
					<Books/>
				</ol>
				</div>
			</div>
		)
	}
}

export default Libraries