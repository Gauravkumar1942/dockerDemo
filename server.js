const express  = require('express');
const app = express();
app.get('/', (req, res) =>{
    res.send({message: "Hellow World of Docker!"});
});

app.listen(9000, () => {
    console.log("Server is running on port 9000");
})