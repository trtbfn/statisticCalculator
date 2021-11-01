const taskRouter = require('express').Router(),
      {addElement, dbPath} = require('../database/api.js');

//task one
taskRouter.get('/', (req, res) => {
    res.render("calculator", 
    {
        layout: 'main', 
        post: {
            isTaskOne: true, 
            styleFile: 'taskOne.css', 
            jsFile: 'taskOne.js',
        }
    });
});

taskRouter.post('/', (req, res) => {
    if(req.body != null) {
        addElement(dbPath, {'taskOne':req.body});
        res.status(200);
    } else {
        res.status(301);
    }
});

//task two
taskRouter.get('/taskTwo', (req, res) => {
    res.render("calculator", 
    {
        layout: 'main', 
        post: {
            isTaskTwo: true, 
            styleFile: 'taskTwo.css', 
            jsFile: 'taskTwo.js',
        }
    });
});

taskRouter.post('/taskTwo', (req, res) => {
    if(req.body != null) {
        addElement(dbPath, {'taskTwo':req.body});
        res.status(200);
    } else {
        res.status(301);
    }
});

//task tree
taskRouter.get('/taskThree', (req, res) => {
    res.render("calculator", 
    {
        layout: 'main', 
        post: {
            isTaskThree: true, 
            styleFile: 'taskThree.css', 
            jsFile: 'taskThree.js'
        }
    });
});

taskRouter.post('/taskThree', (req, res) => {
    console.log('yo')
    if(req.body != null) {
        addElement(dbPath, {'taskThree':req.body});
        res.status(200);
    } else {
        res.status(301);
    }
});

//task four
taskRouter.get('/taskFour', (req, res) => {
    res.render("calculator", 
    {
        layout: 'main', 
        post: {
            isTaskFour: true, 
            styleFile: 'taskFour.css',
            jsFile: 'taskFour.js',
        }
    });
});

taskRouter.post('/taskFour', (req, res) => {
    if(req.body != null) {
        addElement(dbPath, {'taskFour':req.body});
        res.status(200);
    } else {
        res.status(301);
    }
});


//task five
taskRouter.get('/taskFive', (req, res) => {
    res.render("calculator", 
    {
        layout: 'main', 
        post: {
            isTaskFive: true, 
            styleFile: 'taskFive.css',
            jsFile: 'taskFive.js',
        }
    });
});

taskRouter.post('/taskFive', (req, res) => {
    if(req.body != null) {
        addElement(dbPath, {'taskFive':req.body});
        res.status(200);
    } else {
        res.status(301);
    }
});

//task six
taskRouter.get('/taskSix', (req, res) => {
    res.render("calculator", 
    {
        layout: 'main', 
        post: {
            isTaskSix: true, 
            styleFile: 'taskSix.css',
            jsFile: 'taskSix.js'
        }
    });
});

taskRouter.post('/taskSix', (req, res) => {
    if(req.body != null) {
        addElement(dbPath, {'taskSix':req.body});
        res.status(200);
    } else {
        res.status(301);
    }
});

module.exports = {
    taskRouter
}