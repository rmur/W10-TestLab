var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(function(element){
			return element * element;
		});
	},

	sum: function (arr) {
		return arr.reduce( function(summAccumulator, value){
			return summAccumulator + value;
		}, 0)
	},

	findDuplicates: function (arr) {
		var newArr = []
		for (var i = 0 ; i < arr.length ; i++){
			for(var g = 0 ; g <arr.length ; g++){
				if (arr[i] == arr[g] && i != g && !newArr.includes(arr[i])){
					newArr.push(arr[i]);
				}
			}
		}
		return newArr;
	},

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter( function(element){
			return element != valueToRemove;
		}) 
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexes = [];
		for( var i=0; i<arr.length ; i++){
			if ( arr[i] == itemToFind ){
				indexes.push(i);
			}
		}
		return indexes;
	},

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
