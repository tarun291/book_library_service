import expres from 'express'
import { createBook, deleteBook, updateBook, getAllBooks, getBook } from '../../controller/book-controller.js';
const router = expres.Router();
router.post('/book', createBook);
router.delete('/book/:id', deleteBook);
router.put('/book/:id', updateBook);
router.get('/book', getAllBooks);
router.get('/book', getBook);
export default router;
