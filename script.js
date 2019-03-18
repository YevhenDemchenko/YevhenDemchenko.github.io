function validName() {
	var re = /^[А-Я]{0,1}[а-я]{1,15}( [А-Я]{0,1}[а-я]{1,15}){0,1}$|^[A-Z]{0,1}[a-z]{1,15}( [A-Z]{0,1}[a-z]{1,15}){0,1}$/
	var name = document.getElementById("name").value;
	var valid = re.test(name);
	if (valid) output = '';
    else output = 'Required field. Enter data.';
    document.getElementById('message1').innerHTML = output;
    return valid;	
}
function validEmail() {
    var re = /^([a-z0-9_-]{1,15}\.){0,3}[a-z0-9_-]{1,15}@[a-z0-9_-]{1,15}\.[a-z]{2,6}$/;
    var myMail = document.getElementById('mail').value;
    var valid = re.test(myMail);
    if (valid) output = '';
    else output = 'Email address is not valid! Please correct.';
    document.getElementById('message2').innerHTML = output;
    return valid;
}
function validMessage() {
	var message = document.getElementById("message").value;
	if(message == "") {
		document.getElementById('message3').innerHTML = "Required field. Enter data.";	
		return false;	
	}
	return true;
}
