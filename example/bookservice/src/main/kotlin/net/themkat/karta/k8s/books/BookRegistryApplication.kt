package net.themkat.karta.k8s.books

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class BookRegistryApplication

fun main(args: Array<String>) {
	runApplication<BookRegistryApplication>(*args)
}
