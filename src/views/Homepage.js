import React,{Component} from 'react'
import Shelf from '../Shelf'
import {getAll} from '../BooksAPI'

class Homepage extends Component {
	componentDidMount() {
		getAll().then((books)=> {
			console.log(books);
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
						<Shelf heading='Currently Reading'/>
						<Shelf heading='Want to Read'/>
						<Shelf heading='Read'/>
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