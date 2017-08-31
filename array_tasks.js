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
					break;
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

	sumOfAllEvenNumbersSquared: function (arr) {
		// newArr = [];
		// for (var i=0 ; i<arr.length; i++){
		// 	if (arr[i]/2 % 0){
		// 		newArr.push(arr[i])
		// 	}
		// 	return newArr
		// }	

		// return newArr.reduce( function(summAccumulator, squaredValue){
		// 	return summAccumulator + (squaredValue*squaredValue);
		// })

		sum = 0;
		arr.forEach(function(element){
			if (element % 2 ==0){
				sum += element **2
			}
		})
		return sum;

	}

}

module.exports = arrayTasks
