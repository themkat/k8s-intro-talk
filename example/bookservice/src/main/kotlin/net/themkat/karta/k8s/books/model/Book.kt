package net.themkat.karta.k8s.books.model

import org.springframework.data.annotation.Id

// reuse both as entity and returned model object
// In a real code base we would probably sepearate them (different responsibilities).
// Here we use this for both for simplicity.
// (Title is probably not a good id. A real bookstore would use an internal id)
data class Book(@Id val title: String,
                val author: String,
                val amazonLink: String)