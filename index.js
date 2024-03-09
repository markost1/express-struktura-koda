import express from 'express';


const app = express();

app.get('/api/user' , (req,res)=>{
    res.status(200).json({
        "message":"server odgovara sa json formatom"
    })
})


app.listen(3000,()=>{
    console.log('server listening at port 3000');
})