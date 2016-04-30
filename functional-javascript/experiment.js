var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];

function checkUsersValid(goodUsers){
	return function allUsersValid(submitedUsers){
		return submitedUsers.every(function(submittedUser){
			// {id:2}
			return goodUsers.some(function(goodUser){
				// {id:1}
				console.log(submittedUser.id, goodUser.id);
				return submittedUser.id === goodUsers.id;
			});
		});
	};
}

var testAllValid = checkUsersValid(goodUsers);

console.log(
	testAllValid([
		{id:2},
		{id:1}
	])
);

console.log(
	testAllValid([
		{id:2},
		{id:4},
		{id:1}
	])
);
