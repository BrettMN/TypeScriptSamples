/// <reference path="config.ts" />
/// <reference path="app/service.ts" />
var config = new Config();
var service = new Service(config.settings.address);
var address = service.getAddress();
if (address === config.settings.address) {
    console.log("The service returned " + config.settings.address);
}
else {
    console.log("The service did not return " + config.settings.address);
}
