import React from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

export default function BookView(props) {
	return <Table>
		<TableHead>
			<TableCell>Title</TableCell>
			<TableCell>Author</TableCell>
			<TableCell>Amazon link</TableCell>
		</TableHead>
		<TableBody>
			{props.books.map((book) =>
				<TableRow>
					<TableCell>{book.title}</TableCell>
					<TableCell>{book.author}</TableCell>
					<TableCell>{book.amazonLink}</TableCell>
				</TableRow>)}
		</TableBody>
	</Table>
}
