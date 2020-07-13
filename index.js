const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const keys =require('./config/keys');

require('./models/User');

require('./services/passport');
require('./models/Survey');

mongoose.connect(keys.mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => console.log('DB Connected!'));

const app = express();
app.use(express.json({extended:false}));
app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
const PORT = process.env.PORT || 5000;
app.listen(5000);

