import express from 'express';
import userRouter from './routes/user.routes.js'


const app = express();

app.get('/api/user' , (req,res)=>{
    res.status(200).json({
        "message":"server odgovara sa json formatom"
    })
})

app.use('/api/user', userRouter)


app.listen(3000,()=>{
    console.log('server listening at port 3000');
})