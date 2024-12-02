const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// const corsOptions = {
//    origin: '*',  // Ou spécifiez une origine, par ex : 'http://localhost:3000'
//    methods: 'GET, POST, PUT, DELETE, OPTIONS',
//    allowedHeaders: 'Content-Type, Authorization',
//    credentials: true
// };
// app.use(cors(corsOptions));
app.use(cors({ origin: true, credentials: true }));
// origin: 'http://localhost:5173/'

app.use(bodyParser.json()).mangoURI;

const db = require('./config/keys').mongoURI;
console.log(process.env);

mongoose
   .connect(db, {})
   .then(() => {
      console.log('mongo db connected');
   })
   .catch((err) => console.log('error connecting to mongodb', err));

//* Routes =========================================================>>>>>
const emplacements = require('./routes/api/emplacements');
app.use('/api/emplacements', emplacements);

const applications = require('./routes/api/applications');
app.use('/api/applications', applications);

const individuals = require('./routes/api/individuals');
app.use('/api/individuals', individuals);

const exhibitors = require('./routes/api/exhibitors');
app.use('/api/exhibitors', exhibitors);

//todo: route + fichier pour committeeMembers
//todo: route + fichier pour editions

//* Routes <<<<<=========================================================

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started on port ${port}`));
