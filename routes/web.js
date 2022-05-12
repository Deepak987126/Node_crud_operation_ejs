import  express  from 'express'
const router = express.Router();
import StudentController from "../controller/StudentController.js";

router.get('/', StudentController.getAllDoc)

router.post('/', StudentController.createDoc)
router.get('/edit/:id', StudentController.editDoc)
router.post('/update/:id', StudentController.updateDoc)
router.post('/delete/:id', StudentController.deleteDoc)

export default router;