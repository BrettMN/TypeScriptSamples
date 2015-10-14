System.register([], function(exports_1) {
    var Service;
    return {
        setters:[],
        execute: function() {
            Service = (function () {
                function Service(address) {
                    this.address = address;
                }
                Service.prototype.getAddress = function () {
                    return this.address;
                };
                return Service;
            })();
            exports_1("Service", Service);
        }
    }
});
