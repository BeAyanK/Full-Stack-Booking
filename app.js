const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors')
const app=express();
const sequelize=require('./util/database');
const bookingRouter=require('./routes/booking.js')

app.use(cors());
app.use(bodyParser.json({extended: false}))

app.use('/user',bookingRouter);

sequelize
//.sync({force : true})
.sync()
.then(result=>{
    app.listen(3000)
    console.log(result)
})
.catch(err=>console.log(err))
