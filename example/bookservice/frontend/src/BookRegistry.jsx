import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import BookView from './BookView';

export default class BookRegistry extends React.Component {
	state = {
		books: [],
		addBook: false
	}

	constructor() {
		super();
		this.fetchBooks = this.fetchBooks.bind(this);
	}

	fetchBooks(e) {
		e.preventDefault();
		
		fetch('/books').then((response) => {
			return response.json();
		}).then((json) => {
			this.setState((state) => ({
				books: json
			}));
		});
	}

	addBook(e) {
		e.preventDefault();
		this.setState(state => ({
			addBook: !state.addBook
		}));
	}
	
	render() {
		// TODO: add something to modal if addBook becomes a thing..
		return <Container maxWidth="70vw">
			<Modal open={this.state.addBook}>
				<p>lmao</p>
			</Modal>
			
			<div align="center">
				<Button color="primary" onClick={this.fetchBooks}>Fetch books</Button>
				<Button color="primary">Add book</Button>
			</div>
			<br />
			<br />

			<BookView books={this.state.books} />
		</Container>
	}
}
