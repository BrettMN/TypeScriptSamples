var Service = (function () {
    function Service(address) {
        this.address = address;
    }
    Service.prototype.getAddress = function () {
        return this.address;
    };
    return Service;
})();
