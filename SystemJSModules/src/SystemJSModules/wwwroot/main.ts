/// <reference path="app/config.ts" />
/// <reference path="app/services/service.ts" />



import Config = require('app/config');
let config = new Config.Config();

import Service = require('app/services/service');

let service = new Service.Service(config.settings.address);

let address = service.getAddress();

if(address === config.settings.address){
	console.log(`The service returned ${config.settings.address}`)
}else{	
	console.log(`The service did not return ${config.settings.address}`)
}