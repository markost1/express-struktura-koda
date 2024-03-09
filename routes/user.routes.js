import express from 'express'

const router = express.Router();

router.get('/test',(req,res)=>{
    res.status(200).json({
        "message":"server odgovara sa json formatom kod je struktuiran modularan "
    })
})


export default router;