/// <reference path="config.ts" />
/// <reference path="app/service.ts" />

let config = new Config();
let service =  new Service(config.settings.address);

let address = service.getAddress();

if(address === config.settings.address){
	console.log(`The service returned ${config.settings.address}`)
}else{	
	console.log(`The service did not return ${config.settings.address}`)
}
