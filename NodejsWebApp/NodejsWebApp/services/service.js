var helper = require('./helper');
function doSomething(id) {
    var results = id + Date.now().toString() + '\n';
    helper.log(results);
    return results;
}
exports.doSomething = doSomething;
//# sourceMappingURL=service.js.map