const express = require('express');
const app = express();
const PORT= 5000;

app.get('/',(req,res)=>
{
    res.send([
        {
            name:'mohsin',
            age:20
        },
        {
            name:'Uday',
            age:24
        }
    ])
})

app.listen(PORT,()=>
{
    console.log(`server is running on port ${PORT}`);
})