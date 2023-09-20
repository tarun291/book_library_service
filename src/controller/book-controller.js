import BookServise from "../services/book-service.js";
import { statusCodes } from 'http-status-codes'
const bookService = new BookServise;

export const createBook = async (req, res) => {
    try {
        const response = await bookService.createBook(req.body)
        return res.status(statusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new book',
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'something went wrong',
            data: {},
            success: false,
            err: error
        })
    }
}

export const deleteBook = async (req, res) => {
    try {
        const response = await bookService.removeBook(req.params.id);
        return res.status(statusCodes.OK).json({
            success: true,
            message: 'Successfully deleted a book',
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'something went wrong',
            data: {},
            success: false,
            err: error
        })
    }
}

export const updateBook = async (req, res) => {
    try {
        const response = await bookService.updateBook(req.params.id, req.body);
        return res.status(statusCodes.OK).json({
            success: true,
            message: 'Successfully updated a book',
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'something went wrong',
            data: {},
            success: false,
            err: error
        })
    }
}

export const getAllBooks = async (req, res) => {
    try {
        const response = await bookService.getALLBooks();
        return res.status(statusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all books',
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'something went wrong',
            data: {},
            success: false,
            err: error
        })
    }
}

export const getBook = async (req, res) => {
    try {
        const response = await bookService.getBook(req.params.id);
        return res.status(statusCodes.OK).json({
            success: true,
            message: 'Successfully fetched  a book',
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'something went wrong',
            data: {},
            success: false,
            err: error
        })
    }
}