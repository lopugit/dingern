// function stringify(obj, supplemental) {
//   return f.stringify(obj, supplemental || this.stringifyFunc)
// }

let testString = "[1, "2", { "3": 4} ]"
let testObj = JSON.parse(testString, ())

let smarts = require("smarts")()

let a = {
	b: function(){},
	c(){},
	d: function e(){},
	f: ()=>{},
	h: {
		test: 'test'
	}
}

a.g = a.f
a.j = a.h

console.log(a.g == a.f)
console.log(a.j == a.h)

let string = smarts.stringify(a)

console.log(string)

let code = smarts.parse(string)

console.log(code)

console.log(code.g == code.f)
console.log(code.j == code.h)
console.log()