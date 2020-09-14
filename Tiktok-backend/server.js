import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import Videos from './dbModel/dbModel.js';
//app config
const connection_url =
    'mongodb+srv://admin:wlwl1234@cluster0.ivm6k.mongodb.net/TIKTOK_CLONE?retryWrites=true&w=majority';
const app = express();
const port = 9000;

app.use(express.json());
//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
//middle wares
app.use(express.json());
app.use((req, res, next) => {
    res.setHeaders('Access-Control-Allow-Origin', '*');
    res.setHeaders('Access-Control-Allow-Header', '*');
    next();
});
//api endpoints
app.get('/', (req, res) => res.status(200).send('hello world'));
// listen
app.get('/v1/posts', (req, res) => res.status(200).send(data));

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

app.post('/v2/posts', (req, res) => {
    //post request is to add data to the db
    //it will let us add a video to the vieos collection
    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});
app.listen(port, () => console.log(`listening on localhost${port}`));
