const path = require('path'),
      fs = require('fs');
    
const dbPath = path.join(__dirname, 'db.json');

let counter = 0;

function getElements(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf-8", (err, jsonData) => {
            if(err) reject(err)
            resolve(jsonData)
        });
    })
}


function postElements(filePath, elements) {
    return new Promise((_, reject) => {
        fs.writeFile(filePath, JSON.stringify(elements), (err) => {
            if(err) reject(err)
        })
    });
}

function addElement(filePath, element) {
    getElements(filePath).then(jsonData => {
        const data = JSON.parse(jsonData);
        const newData = data == []? [element]: [...data, element];
        postElements(filePath, newData).catch(err => {
            throw err;
        })
    }).catch(err => {
        throw err;
    })
}

module.exports = {
    addElement,
    dbPath
}
