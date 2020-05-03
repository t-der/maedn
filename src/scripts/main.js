function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function genKey(textFieldId) {
	/*nbChars = 16;
	var key = "x".repeat(nbChars);
	//var array = new Uint32Array(nbChars);
	var array = new Uint8Array(nbChars);
	window.crypto.getRandomValues(array);
	for (var i = 0; i < array.length; i++) {
		key = key.substring(0, i) + String.fromCharCode(array[i]) + key.substring(i + 1);
		console.log(array[i]);
		console.log(key);
	}
	key = key.substring(0, 0) + '[' + key.substring(0 + 1);
	key = key.substring(0, i) + ']' + key.substring(i + 1);*/
	document.getElementById(textFieldId).value = secureRandomString(16);
}

function secureRandomString(nbChars) {
	var key = "x".repeat(nbChars);
	//var array = new Uint32Array(nbChars);
	var array = new Uint8Array(nbChars);
	window.crypto.getRandomValues(array);
	for (var i = 0; i < array.length; i++) {
		key = key.substring(0, i) + String.fromCharCode(array[i]) + key.substring(i + 1);
		console.log(array[i]);
		console.log(key);
	}
	key = key.substring(0, 0) + '[' + key.substring(0 + 1);
	key = key.substring(0, i) + ']' + key.substring(i + 1);
	return key
}

function randomString(length) {
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}

function randomString2(nbChars) {
	return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, nbChars);
}




function copy2ClipBoard(idTxtSrc) {
  /* Get the text field */
  var copyText = document.getElementById(idTxtSrc);

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  //alert("Copied the text: " + copyText.value);
}
