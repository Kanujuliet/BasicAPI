const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const {routerManager} = require('./routes/rts')
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',routerManager);
app.post('/testid/:uses', (req, res) => {
   res.statuste(200).send(req.params.uses)
  })


app.listen(5000, function () {
    console.log("server running ")
})





