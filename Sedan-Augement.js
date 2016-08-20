var Sedan = (function(newSedan){
	var max_coupancy = 6;
	var current_occupancy = 0;
	var type = "minivan";
	newSedan.getType = function(){
		return type;
	};
	newSedan.getOccupancy = function(){
		return current_occupancy;
	};
	newSedan.setOccupancy = function(occupancy){
		if(occupancy <= max_coupancy){
			current_occupancy = occupancy;
		} else {
			throw "cannot exced max_coupancy " + max_coupancy;
		}
	};
	return newSedan;
})(Sedan || {});