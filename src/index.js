import pathFinder from '../module/pathFinder.js'

let data;
fetch("/mock-data/testData.json")
    .then(response => response.json())
    .then(json => {
        console.log(json);
        data = json;
        let pf = new pathFinder(json);
        console.log(pf.findPathForElement(131))
    })


