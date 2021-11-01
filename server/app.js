const {taskRouter} = require('./router/tasks.js'),
      express = require('express'),
      path = require('path'),
      handlebars = require('express-handlebars');


const app = express();
const port = 3000;
const partialPath = path.resolve(__dirname, '../public', 'views', 'partials');
const layoutsPath = path.resolve(__dirname, '../public', 'views', 'layouts')

app.set("view engine", "hbs");
app.engine("hbs", handlebars({
    layoutsDir: layoutsPath,
    extname: "hbs",
    partialsDir: partialPath,

}));
app.set('views', path.resolve(__dirname, '../public', 'views'));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(taskRouter);

app.listen(port, () => console.log(`server have started on port ${port}`));