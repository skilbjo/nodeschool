// var hello = 'hello';

// console.log(
// 	hello.slice(0,2)
// 	);

var html = (username,comment) => {
	var escape = [
			['\'','&apos;'], ['"','&quot;'] , ['<','&lt;'] , ['>','&gt;'] , ['&','&amp;'] 
		];

	escape.forEach((char) =>{
		username = username.replace(char[0],char[1]);
		comment = comment.replace(char[0],char[1]);
	});

	console.log(username,comment);
};

console.log(

html('johnny<',' hithere')

	);


