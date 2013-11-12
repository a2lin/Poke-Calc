var express = require('express');
var server = express();
var battlechart = require('./typechart');

server.get('/type/:movetype/:type1/:type2', function(req, res){
	res.send(''+calcType(req.params.movetype, req.params.type1, req.params.type2));
});

function calcType(movetype,type1, type2) {
	var res2 = -1;
	var res1 = parseInt(battlechart.BattleTypeChart[type1].damageTaken[movetype]);
	if(type2 != 'None')
		var res2 = parseInt(battlechart.BattleTypeChart[type2].damageTaken[movetype]);
	if(res2 == -1)
	{ 	
		return res1;
	}
	else if(res1 == 3 || res2 == 3)
	{
	//no dps
		return 3;
	}
	else if(res2 == 0)
	{
		return res1;
	}
	else if(res1 == 0)
	{
		return res2;
	}
	else if(res2 == 2 && res1 == 1 || res1 == 2 && res2 == 1)
	{
	//normal dmg
		return 0;
	}
	else if(res2 == 1 && res1 == 1)
	{
	//super effective
		return 4;
	}
	else if(res1 == 2 && res2 == 2)
	{
	//super-ineffective
		return 5;
	}  
};

server.listen(5000);

console.log('Listening on port 5000');
