const numbers = [1,2,3];

function double([first, ...rest]) {

	return rest.length ? [ first * 2, ...double(rest) ] : [ first * 2 ];

}

console.log(double(numbers))