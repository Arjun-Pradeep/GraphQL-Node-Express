import express from 'express';

const app = express();

app.get('/',(req,res) => {
    return res.json({
        msg : "Welcome to GraphQL World !!"
    })
})

app.listen(3000,() => {
    console.log("App is running on port 3000");
})