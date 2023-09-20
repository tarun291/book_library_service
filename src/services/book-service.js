import BookRepo from "../repository/book-repo.js";

class BookServise {
    constructor() {
        this.bookRepo = new BookRepo();
    }
    async createBook(data) {
        try {
            const book = await this.bookRepo.create(data);
            return book;
        } catch (error) {
            console.log('Something went wrong in service layer')
            console.log(error);
        }
    }
    async removeBook(id) {
        try {
            const deletedBook = await this.bookRepo.destroy(id);
            return deletedBook;
        } catch (error) {
            console.log('Something went wrong in service layer')
            console.log(error);
        }
    }
    async updateBook(id, data) {
        try {
            const updatedBook = await this.bookRepo.update(id, data);
            return updatedBook;
        } catch (error) {
            console.log('Something went wrong in service layer')
            console.log(error);
        }
    }
    async getALLBooks() {
        try {
            const books = await this.bookRepo.getAll();
            return books;
        } catch (error) {
            console.log('Something went wrong in service layer')
            console.log(error);
        }
    }
    async getSingleBook(id) {
        try {
            const book = await this.bookRepo.getBookById(id);
            return book;
        } catch (error) {
            console.log('Something went wrong in service layer')
            console.log(error);
        }
    }

}

export default BookServise;