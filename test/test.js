
function test(){
}

test.hmm = 'a'

let test2 = new test()

let o = {

}

Object.defineProperty(o, 'test', {
	enumerable: true,
	configurable: true,
	get(){
		return 'hmm'
	}
})

debug = 1