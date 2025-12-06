import express from 'express'
import { authLogin, createNote } from '../controllers/notesController.js'
const router = express.Router()

router.post("/login", authLogin)

router.post("/create-account", createNote)

router.put()

router.delete()

export default router