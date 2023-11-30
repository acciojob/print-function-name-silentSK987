//your JS code here. If required.
function callfunc() {
	const msg=arguments.callee.name;
    // console.log(msg)
	alert(msg);
}
callfunc();