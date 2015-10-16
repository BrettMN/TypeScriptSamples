import helper = require('./helper');

export function doSomething(id: string) {
    let results = id + Date.now().toString() + '\n'; 

    helper.log(results);

    return results;
}