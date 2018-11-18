import React,{Component} from 'react'
import Libraries from '../Libraries';

class Homepage extends Component {
	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Libraries heading='Currently Reading'/>
						<Libraries heading='Want to Read'/>
						<Libraries heading='Read'/>
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