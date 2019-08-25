package net.themkat.karta.k8s.books.repository

import net.themkat.karta.k8s.books.model.Book
import org.springframework.data.mongodb.repository.MongoRepository

interface BookRepository : MongoRepository<Book, String>