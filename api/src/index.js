import express from 'express';
import allRoutes from './routes';
import morgan from 'morgan';

//DOCUMENTATION



//INIT EXPRESS
const app = express();

//CONFIG
const port = (process.env.PORT || 3004);

//Direction
app.use( express.static('public'))

//MIDDLEWARE
app.use(express.json())
app.use(morgan('dev'));
app.use(allRoutes);

//PORT
app.set('port', port);
app.get( '*', (req, res) => {
    res.sendFile( path.resolve(__dirname, 'public/index.html'))
});



//EXPRESS

app.listen(app.get('port'), (error)=> {
    if(error) {
        console.error('Failed to start')
    }
    else {
        console.log('Server started on port: '+ app.get('port'))
    }
})
