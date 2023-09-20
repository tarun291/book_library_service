import express from 'express'

const router = express.Router();

import v1ApiRoute from './v1/index.js';

router.use('/v1', v1ApiRoute);

export default router;