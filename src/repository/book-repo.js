import Book from "../models/book";

class BookRepo {
    async create(data) {
        try {
            const newBook = await Book.create(data);
            return newBook;
        } catch (error) {
            console.log('Something went wrong int repo layer')
            console.log(error)
        }
    }
    async destroy(id) {
        try {
            const book = await Book.findByIdAndRemove(id);
            return book;
        } catch (error) {
            console.log('Something went wrong int repo layer')
            console.log(error)
        }
    }
    async update(id, data) {
        try {
            const book = await Book.findByIdAndUpdate(id, data, { new: true });
            return book;
        } catch (error) {
            console.log('Something went wrong int repo layer')
            console.log(error)
        }
    }
    async getAll() {
        try {
            const books = await Book.find();
            return books;
        } catch (error) {
            console.log('Something went wrong int repo layer')
            console.log(error)
        }
    }
    async getBookById(id) {
        try {
            const book = await Book.findById(id);
            return id;
        } catch (error) {
            console.log('Something went wrong int repo layer')
            console.log(error)
        }
    }
}

export default BookRepo;