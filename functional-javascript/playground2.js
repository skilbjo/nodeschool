var countWords = function(inputWords) {
  return inputWords.reduce(function(prev,current){
  	prev[current] === undefined ? prev[current] = 1 : prev[current]+=1;
  	return prev;
  },{});
};
var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

var reduce = function(arr, fn, inital){
	return (function reduceOne(index,value){
		if(index > arr.length - 1) return value;
		return reduceOne(index+1,fn(value,arr[index],index,arr));
	})(0,inital);

	return reduceOne = function(index,value){
		if (index>arr.length-1) return value;
		return reduceOne(index+1,fn(value,arr[index],index,arr));
	}(0,inital);
	// if (!arr) return inital;
	// var head = arr[0];
	// head.toString(); // blah
	// var tail = arr.slice(1);
	// return [head].concat(reduce(tail));
};

console.log(
	reduce([1,2,3],function(prev,curr,index,arr){
		return prev + curr;
	}, 0)
);

var blah = function(){
	return blah2 = function(){
		console.log('hey');
	};
};

// console.log(
// 	blah
// );


