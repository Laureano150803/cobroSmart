import express from 'express'
const router = express.Router();
import router_usuarios from './users.js'
import router_clientes from './clients.js'
import google_router from './google_calendar.js'
import peluqueros_router from './peluqueros.js'
import servicio_router from './servicios.js'
import servicesTyperRouter from './servicesTypes.js'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', router_usuarios)
router.use('/clients', router_clientes)
router.use('/google', google_router)
router.use('/peluqueros', peluqueros_router)
router.use('/services', servicio_router)
router.use('/types', servicesTyperRouter)
export default router
