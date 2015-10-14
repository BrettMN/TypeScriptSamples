/// <reference path="config.ts" />
/// <reference path="services/service.ts" />
System.register(['app/config', 'app/services/service'], function(exports_1) {
    var Config, Service;
    var config, service, address;
    return {
        setters:[
            function (Config_1) {
                Config = Config_1;
            },
            function (Service_1) {
                Service = Service_1;
            }],
        execute: function() {
            config = new Config.Config();
            service = new Service.Service(config.settings.address);
            address = service.getAddress();
            if (address === config.settings.address) {
                console.log("The service returned " + config.settings.address);
            }
            else {
                console.log("The service did not return " + config.settings.address);
            }
        }
    }
});
