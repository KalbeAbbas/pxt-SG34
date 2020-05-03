namespace sg34{
	//% shim=max30105::setup_sg34
	//% block="SG34 setup"
	export function setup(): number
	{
		return 1
	}
	
	//% shim=max30105::startParallel
	function startParallel(u: ()=> void):number{
		return 1;
	}
	
	//%block="SG34 get Red"
	//%shim=max30105::getRedSG34
	export function getRed():number
	{
		return 1
	}
	
	//%block="SG34 get Green"
	//%shim=max30105::getGreenSG34
	export function getGreen():number
	{
		return 1
	}
	
	//%block="SG34 get IR"
	//%shim=max30105::getIRSG34
	export function getIR():number
	{
		return 1
	}
	
	//%block="SG34 get temperature"
	//%shim=max30105::getTempSG34
	export function getTemp():number
	{
		return 1
	}
	
	//%block="SG34 get SPO2"
	//%shim=max30105::getSPO2SG34
	export function getSPO2():number{
		return 1
	}
	
	setup()
}