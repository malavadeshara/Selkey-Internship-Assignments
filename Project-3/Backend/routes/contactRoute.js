import express from 'express';
import validateContact from '../middleware/validateContact.js';
import saveInfo from '../controllers/contactFormController.js'

const router = express.Router();

router.post('/contact', validateContact, saveInfo);

export default router;