// переменные для замены имени
var name = document.querySelector(".tab-name").innerHTML;
var nameBox = document.querySelector(".tab-name");
var inputName = document.querySelector(".name-change");
var newName;
var nameStorage = localStorage.getItem("newName");
// переменные для замены семейного положения
var marital = document.querySelector(".marital-status").innerHTML;
var maritalBox = document.querySelector(".marital-status");
var inputMarital = document.querySelector(".marital-change");
var newMarital;
var maritalStorage = localStorage.getItem("newMarital");
// переменные для замены номера телефона
var tel = document.querySelector(".tel").innerHTML;
var telBox = document.querySelector(".tel");
var inputTel = document.querySelector(".tel-change");
var newTel;
var telStorage = localStorage.getItem("newTel");
// переменные для замены email
var mail = document.querySelector(".mail").innerHTML;
var mailBox = document.querySelector(".mail");
var inputMail = document.querySelector(".mail-change");
var newMail;
var mailStorage = localStorage.getItem("newMail");
// переменные для кнопки добавления интересов
var addInterest = document.querySelector(".add-interest");
var inputInterest = document.querySelector(".input-interest");
var newInterest;
var button = document.querySelector(".interests-btn");
var containerButton = document.querySelector(".interest-list");
var newButton;
var buttonAll = document.querySelectorAll(".interests-btn");

// добавление интересов
addInterest.addEventListener("click", function(event) {
  inputInterest.classList.add("show");
 	inputInterest.focus();
});

inputInterest.addEventListener("blur", function(event) {
  inputInterest.classList.remove("show");
  newInterest = inputInterest.value;
  if (inputInterest.value) {
  	newButton = button.cloneNode(true);
  	newButton.innerHTML = newInterest;
  	containerButton.insertBefore(newButton, containerButton.firstChild);
  	inputInterest.value = "";
  } else {
  	alert("Введи что-нибудь");
  }
});

// удаление созданных интересов
containerButton.onclick = function(event) {
				var target = event.target;
				containerButton.removeChild(target);
			};


// замена имени
nameBox.addEventListener("click", function(event) {
  inputName.classList.add("show");
  nameBox.classList.add("hide");
  if (nameStorage) {
  	inputName.value = nameStorage;
  } else if (newName) {
  	inputName.value = newName;
  } else {
  	inputName.value = name;
  }
 	inputName.focus();
});

inputName.addEventListener("blur", function(event) {
  nameBox.classList.remove("hide");
  inputName.classList.remove("show");
  newName = inputName.value;
	document.querySelector(".tab-name").innerHTML = newName;
	localStorage.setItem("newName", newName);
});

document.addEventListener("DOMContentLoaded", function(event) {
	if (nameStorage) {
		document.querySelector(".tab-name").innerHTML = nameStorage;
	} else {
		document.querySelector(".tab-name").innerHTML = name;
	}
});

// замена семейного положения
maritalBox.addEventListener("click", function(event) {
  inputMarital.classList.add("show");
  maritalBox.classList.add("hide");
  if (maritalStorage) {
  	inputMarital.value = maritalStorage;
  } else if (newMarital) {
  	inputMarital.value = newMarital;
  } else {
  	inputMarital.value = marital;
  }
 	inputMarital.focus();
});

inputMarital.addEventListener("blur", function(event) {
  maritalBox.classList.remove("hide");
  inputMarital.classList.remove("show");
  newMarital = inputMarital.value;
	document.querySelector(".marital-status").innerHTML = newMarital;
	localStorage.setItem("newMarital", newMarital);
});

document.addEventListener("DOMContentLoaded", function(event) {
	if (maritalStorage) {
		document.querySelector(".marital-status").innerHTML = maritalStorage;
	} else {
		document.querySelector(".marital-status").innerHTML = marital;
	}
});

// замена телефона
telBox.addEventListener("click", function(event) {
  inputTel.classList.add("show");
  telBox.classList.add("hide");
  if (telStorage) {
  	inputTel.value = telStorage;
  } else if (newTel) {
  	inputTel.value = newTel;
  } else {
  	inputTel.value = tel;
  }
 	inputTel.focus();
});

inputTel.addEventListener("blur", function(event) {
  telBox.classList.remove("hide");
  inputTel.classList.remove("show");
  newTel = inputTel.value;
	document.querySelector(".tel").innerHTML = newTel;
	localStorage.setItem("newTel", newTel);
});

document.addEventListener("DOMContentLoaded", function(event) {
	if (telStorage) {
		document.querySelector(".tel").innerHTML = telStorage;
	} else {
		document.querySelector(".tel").innerHTML = tel;
	}
});

// замена email
mailBox.addEventListener("click", function(event) {
  inputMail.classList.add("show");
  mailBox.classList.add("hide");
  if (mailStorage) {
  	inputMail.value = mailStorage;
  } else if (newMail) {
  	inputMail.value = newMail;
  } else {
  	inputMail.value = mail;
  }
 	inputMail.focus();
});

inputMail.addEventListener("blur", function(event) {
  mailBox.classList.remove("hide");
  inputMail.classList.remove("show");
  newMail = inputMail.value;
	document.querySelector(".mail").innerHTML = newMail;
	localStorage.setItem("newMail", newMail);
});

document.addEventListener("DOMContentLoaded", function(event) {
	if (mailStorage) {
		document.querySelector(".mail").innerHTML = mailStorage;
	} else {
		document.querySelector(".mail").innerHTML = mail;
	}
});














// SCROLLBAR

		(function(w, d) {
			var raf = w.requestAnimationFrame || w.setImmediate || function(c) { return setTimeout(c, 0); };

			function initEl(el) {
				if (el.hasOwnProperty('data-simple-scrollbar')) return;
				Object.defineProperty(el, 'data-simple-scrollbar', new SimpleScrollbar(el));
			}

  // Mouse drag handler
  function dragDealer(el, context) {
  	var lastPageY;

  	el.addEventListener('mousedown', function(e) {
  		lastPageY = e.pageY;
  		el.classList.add('ss-grabbed');
  		d.body.classList.add('ss-grabbed');

  		d.addEventListener('mousemove', drag);
  		d.addEventListener('mouseup', stop);

  		return false;
  	});

  	function drag(e) {
  		var delta = e.pageY - lastPageY;
  		lastPageY = e.pageY;

  		raf(function() {
  			context.el.scrollTop += delta / context.scrollRatio;
  		});
  	}

  	function stop() {
  		el.classList.remove('ss-grabbed');
  		d.body.classList.remove('ss-grabbed');
  		d.removeEventListener('mousemove', drag);
  		d.removeEventListener('mouseup', stop);
  	}
  }

  // Constructor
  function ss(el) {
  	this.target = el;
  	this.bar = '<div class="ss-scroll">';

  	this.wrapper = d.createElement('div');
  	this.wrapper.setAttribute('class', 'ss-wrapper');

  	this.el = d.createElement('div');
  	this.el.setAttribute('class', 'ss-content');

  	this.wrapper.appendChild(this.el);

  	while (this.target.firstChild) {
  		this.el.appendChild(this.target.firstChild);
  	}
  	this.target.appendChild(this.wrapper);

  	this.target.insertAdjacentHTML('beforeend', this.bar);
  	this.bar = this.target.lastChild;

  	dragDealer(this.bar, this);
  	this.moveBar();

  	this.el.addEventListener('scroll', this.moveBar.bind(this));
  	this.el.addEventListener('mouseenter', this.moveBar.bind(this));

  	this.target.classList.add('ss-container');
  }

  ss.prototype = {
  	moveBar: function(e) {
  		var totalHeight = this.el.scrollHeight,
  		ownHeight = this.el.clientHeight,
  		_this = this;

  		this.scrollRatio = ownHeight / totalHeight;

  		raf(function() {
  			_this.bar.style.cssText = 'height:' + (ownHeight / totalHeight) * 100 + '%; top:' + (_this.el.scrollTop / totalHeight ) * 100 + '%;right:-' + (_this.target.clientWidth - _this.bar.clientWidth) + 'px;';
  		});
  	}
  }
  
  function initAll() {
  	var nodes = d.querySelectorAll('*[ss-container]');

  	for (var i = 0; i < nodes.length; i++) {
  		initEl(nodes[i]);
  	}
  }
  
  d.addEventListener('DOMContentLoaded', initAll);
  ss.initEl = initEl;
  ss.initAll = initAll;

  w.SimpleScrollbar = ss;
})(window, document);
