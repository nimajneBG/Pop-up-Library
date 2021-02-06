/*
The MIT License (MIT)

Copyright © 2020 Benjamin Grau & Gregor Parzefall

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

class PopUp {

	constructor(args) {
		this.input = args;
		this.popUpBg;
		this.popUp;
		this.btnOk;
		this.btnCancel;
		this.btnCustom;
		this.closeX;
	}

	create() {

		// Error detection
		if (this.input.ok != true && this.input.cancel != true && this.input.custom != true) {
			console.error("At least one sort of button have to be selected.");
			return 1;
		}


		// Create background
		this.popUpBg = document.createElement("DIV");
		this.popUpBg.classList.add("pop-up-bg");
		document.body.appendChild(this.popUpBg);


		// Create pop-up
		this.popUp = document.createElement("DIV");
		this.popUp.classList.add("pop-up");
		this.popUpBg.appendChild(this.popUp);

		// Close x
		if (this.input.close == true) {
			this.closeX = document.createElement("DIV");
			this.closeX.classList.add("popup-close");
			this.closeX.innerHTML = '<i class="cross"></i>';
			this.popUp.appendChild(this.closeX);
		}

		// Icon
		if (this.input.icon != false) {
			var icon = document.createElement("P");
			icon.classList.add("pop-up-icon");
			icon.innerHTML = this.input.icon;
			this.popUp.appendChild(icon);
		}

		// Text
		this.popUpText = document.createElement("P");
		this.popUpText.innerHTML = this.input.message;
		this.popUp.appendChild(this.popUpText);

		// Buttons
		this.createButtons();

		return this.events();

	}

	createButton(name, text) {
		this[name] = document.createElement("BUTTON");
		this[name].innerHTML = text;
		this[name].classList.add("standard-button");
		this.buttonLine.appendChild(this[name]);
	}


	createButtons() {
		// Create buttons
		this.buttonLine = document.createElement("DIV");
		this.buttonLine.classList.add("button-line");
		this.popUp.appendChild(this.buttonLine);

		// OK Button
		if (this.input.ok) {
			this.createButton('btnOk', 'OK');
		}

		// Cancel Button
		if (this.input.cancel) {
			this.createButton('btnCancel', 'Cancel');
		}

		// Custom Button
		if (this.input.custom) {
			this.createButton('btnCustom', this.input.text);
		}

	}

	close() {
		this.popUpBg.remove();
	}

	setText(text = String) {
		this.input.message = text;
		this.popUpText.innerHTML = this.input.message;
	}

	events() {
		const { popUpBg: bg, btnOk, btnCancel, btnCustom, closeX } = this;
		const { ok: inBtnOk, cancel: inBtnCancel, custom: inBtnCustom, close: inCloseX } = this.input;

		var promise = new Promise(function (resolve, reject) {
			if (inCloseX == true) {
				closeX.onclick = () => {
					bg.remove();
				}
			}

			if (inBtnOk == true) {
				btnOk.onclick = () => {
					bg.remove();
					resolve("ok");
				}
			}

			if (inBtnCancel == true) {
				btnCancel.onclick = () => {
					bg.remove();
					resolve("cancel");
				}
			}

			if (inBtnCustom == true) {
				btnCustom.onclick = () => {
					bg.remove();
					resolve("custom");
				}
			}
			if (inBtnCustom != true && inBtnOk != true && inBtnCancel != true) {
				reject(Error("It broke"));
			}

		});

		return promise;

	}

}


// Toast Pop up
class Toast {
	constructor(args) {
		this.input = args;
		this.toast;
	}

	create() {
		// Toast Background
		this.toastBg = document.createElement('DIV');
		this.toastBg.classList.add('toast-bg');
		document.body.appendChild(this.toastBg);

		// Toast
		this.toast = document.createElement('DIV');
		this.toast.classList.add('toast');
		this.toastBg.appendChild(this.toast);

		// Text
		this.toastText = document.createElement('P');
		this.toastText.classList.add('toast-text');
		this.toastText.innerHTML = this.input.message;
		this.toast.appendChild(this.toastText);

		// Buttons
		this.createButtons();

		// Events
		return this.events();
	}

	close() {
		this.toastBg.remove();
	}

	setText(text) {
		this.input.message = text;
		this.toastText.innerHTML = text;
	}

	createButton(name, text) {
		this[name] = document.createElement("BUTTON");
		this[name].innerHTML = text;
		this[name].classList.add("standard-button");
		this.buttonLine.appendChild(this[name]);
	}

	createButtons() {
		// Create buttons
		this.buttonLine = document.createElement("DIV");
		this.buttonLine.classList.add("button-line");
		this.toast.appendChild(this.buttonLine);

		// OK Button
		if (this.input.ok) {
			this.createButton('btnOk', 'OK');
		}

		// Cancel Button
		if (this.input.cancel) {
			this.createButton('btnCancel', 'Cancel');
		}

		// Custom Button
		if (this.input.custom) {
			this.createButton('btnCustom', this.input.text);
		}

		// Close x
		if (this.input.close == true) {
			this.closeX = document.createElement("i");
			this.closeX.classList.add("cross");
			this.buttonLine.appendChild(this.closeX);
		}
	}

	events() {
		const { toastBg: bg, btnOk, btnCancel, btnCustom, closeX } = this;
		const { ok: inBtnOk, cancel: inBtnCancel, custom: inBtnCustom, close: inCloseX } = this.input;

		// Decay
		if (this.input.decay && this.input.time != undefined) {
			setTimeout(() => {
				this.close()
			}, this.input.time * 1000)
		}

		// Buttons clicked
		let promise = new Promise(function (resolve, reject) {
			if (inCloseX == true) {
				closeX.onclick = () => bg.remove();
			}

			if (inBtnOk == true) {
				btnOk.onclick = () => {
					bg.remove();
					resolve("ok");
				}
			}

			if (inBtnCancel == true) {
				btnCancel.onclick = () => {
					bg.remove();
					resolve("cancel");
				}
			}

			if (inBtnCustom == true) {
				btnCustom.onclick = () => {
					bg.remove();
					resolve("custom");
				}
			}
			if (inBtnCustom != true && inBtnOk != true && inBtnCancel != true) {
				reject(Error("It broke"));
			}

		});

		return promise;

	}

}



// Predefined functions for easier usage
function popUpInfo(message) {
	var p = new PopUp({
		"message": message,
		"ok": true,
		"cancel": false,
		"custom": false,
		"close": true,
		"icon": "📣"
	});
	p.create().then(function (result) { }, function (err) { console.log(err); });
}

function popUpError(message) {
	var p = new PopUp({
		"message": message,
		"ok": true,
		"cancel": false,
		"custom": false,
		"close": true,
		"icon": "🛑"
	});
	p.create().then(function (result) { }, function (err) { console.log(err); });
}

function popUpConfirm(message) {
	var p = new PopUp({
		"message": message,
		"ok": true,
		"cancel": true,
		"custom": false,
		"close": false,
		"icon": "❓"
	});
	return p.create();
}
