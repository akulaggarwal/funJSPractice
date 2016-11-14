var alice = {
  name: 'alice',
  shout: function (arg) {
    console.log('here comes' + ' ' + this.name);
  }
};

// alice.shout() //=> 'here comes alice'

function bind1(func, context){
	console.log('args: ', [...arguments]);
	const args = [...arguments];
	const after1 = args.slice(2);
	console.log('aft1: ', after1);
	return function(diff) {
		const allArgs = [...after1, ...arguments];
		console.log('after1 in anonymous func: ', allArgs);
		return func.apply(context, allArgs);
	}
};

// const boundShout = bind2(alice.shout, { name: 'bob' }, 'some arg') //=> 'here comes bob'


// boundShout('mary', 'cat');
////////////////////////////////////////


Function.prototype.bind2 = function(context) {
	const func = this;
	const args = [...arguments];
	const after0 = args.slice(1);
	return function() {
		const moreArgs = [...arguments];
		const allArgs = [...after0, ...arguments];
		return func.apply(context, allArgs)
	}
}

var boundShout = alice.shout.bind(alice, 'arg0', 'arg1');
boundShout('arg1', 'arg2'); // alerts 'alice'

// boundShout = alice.shout.bind({ name: 'bob' });
// boundShout(); // alerts 'bob'
