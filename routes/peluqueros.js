import express  from "express";
const router = express.Router()
import create from "../controllers/peluqueros/create.js";
import read from "../controllers/peluqueros/read.js";
import deleteById from "../controllers/peluqueros/deleteById.js";
import updateById from "../controllers/peluqueros/updateById.js";
import passport from "passport";
router.get('/all',passport.authenticate('jwt', {session:false}), read)
router.delete('/:id',passport.authenticate('jwt', {session:false}), deleteById)
router.post('/new',passport.authenticate('jwt', {session:false}), create )
router.put('/:id', passport.authenticate('jwt', {session:false}), updateById )

export default router