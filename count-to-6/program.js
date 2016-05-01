// var inputs = process.argv.slice(2),
// 	result = inputs.map(input => input[0])
// 								.reduce((prev,curr) => prev+curr);

// console.log(`[${inputs}] becomes "${result}"`);


// var foot = {
// 	kick: function() {
// 		this.yelp = 'Ouch!';
// 		setImmediate( () => console.log(this.yelp) );
// 	}
// };

// foot.kick();

// var numbers = process.argv.slice(2),
// 	result = Math.min(...numbers);

// console.log(`The minimum of [${numbers}] is ${result}`);

// var average = function(...args){
// 	var divisor = 0,
// 		sum = 0
// 		;
// 	args.forEach(function(val){
// 		return sum+=value;
// 	});
// 	return (sum / divisor);
// };

// module.exports = average;

// module.exports = (...args) => {
// 	var sum = args.reduce((prev,cur) => prev + cur,0);
// 	return sum / args.length;
// };


// module.exports = (num1 = 0, num2 = 1) =>  (num1 + num2) / 2;

// var makeImportant = (str, times = str.length) => {
// 	var excl = '';
// 	for(var i=1; i<=times;i++){
// 		excl+='!';
// 	}
// 	console.log(`${str}${excl}`);
// };

// makeImportant('hi',1);

// exports.makeImportant = makeImportant;
// module.exports = (str, times = str.length) => {
// 	var excl = '';
// 	for(var i=1; i<=times;i++){
// 		excl+='!';
// 	}
// 	return str+excl;
// 	// console.log(`${str}${excl}`);
// };


// var replaceSingle =

// var html = (username,comment) => {
// 	var escape = [
// 			['\'','&apos;'], ['"','&quot;'] , ['<','&lt;'] , ['>','&gt;'] , ['&','&amp;'] 
// 		];

// 	escape.forEach((char) =>{
// 		username = username.replace(char[0],char[1]);
// 		comment = comment.replace(char[0],char[1]);
// 	});


// };

// console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);


function html(pieces, ...substitutions) {
    var result = pieces[0];
    for (var i = 0; i < substitutions.length; ++i) {
        result += escape(substitutions[i]) + pieces[i + 1];
    }

    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);















