import express from 'express'
import { test } from './controllers/user.controller.js';

const router = express.Router();

// router.get('/test',(req,res)=>{
//     res.status(200).json({
//         "message":"server odgovara sa json formatom kod je struktuiran modularan "
//     })
// })

router.get('/test', test)


export default router;