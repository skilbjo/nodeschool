function upperCaser(input) {
  return input.toUpperCase();
}

function repeat(operation, num) {
	if(num <= 0) return;
	operation();
	return repeat(operation, --num);
}

function doubleAll(numbers){
	return numbers.map(function(number){
		return number*2;
	});
}

function getShortMessages(messages){
	return messages.filter(function(message){
		return message.message.length < 50;
	}).map(function(message){
		return message.message;
	});
}

function checkUsersValid(goodUsers){
	return function allUsersValid(submitedUsers){
		return submitedUsers.every(function(submittedUser){
			// {id:2}
			return goodUsers.some(function(goodUser){
				// {id:1}
				console.log(submittedUser.id, goodUser.id);
				return submittedUser.id == goodUser.id;
			});
		});
	};
}

function countWords(inputWords) {
  return inputWords.reduce(function(prev,current){
  	prev[current] === undefined ? prev[current] = 1 : prev[current]+=1;
  	return prev;
  },{});
}

function reduce(arr, fn, inital){
	return (function reduceOne(index,value){
		if(index > arr.length - 1) return value;
		return reduceOne(index+1,fn(value,arr[index],index,arr));
	})(0,inital);
}

function duckCount(){
	console.log('quack');
}

module.exports = upperCaser;
module.exports = repeat;
module.exports = doubleAll;
module.exports = getShortMessages;
module.exports = checkUsersValid;
module.exports = countWords;
module.exports = reduce;
module.exports = duckCount;


