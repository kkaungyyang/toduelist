const express = require('express'); 
const path = require('path'); 

const app = express(); 


app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3", "item4"];
    res.json(list);
    console.log('Sent list of items');
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log("Server Connected to 5000");
})
