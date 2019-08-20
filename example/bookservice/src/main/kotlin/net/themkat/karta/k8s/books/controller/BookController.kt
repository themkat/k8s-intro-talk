package net.themkat.karta.k8s.books.controller

import net.themkat.karta.k8s.books.model.Book
import net.themkat.karta.k8s.books.service.BookService
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin
class BookController(val bookService: BookService) {

    @GetMapping("/books")
    fun getAllBooks() = bookService.getAllBooks()

    @PostMapping("/books/add")
    fun addBook(@RequestBody book: Book) {
        bookService.addBook(book)
    }


}