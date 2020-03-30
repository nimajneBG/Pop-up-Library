/*
The MIT License (MIT)

Copyright © 2020 Benjamin Grau & Gregor Parzefall

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

class PopUp {

  constructor(x) {
    this.input = x;
    this.popUpBg;
    this.popUp;
    this.btnOk;
    this.btnCancel;
    this.btnCustom;
    this.click;
    console.table(this.input);
  }

  create() {

    //Error detection
    if (this.input.ok != true && this.input.cancel != true && this.input.custom != true) {
      console.error("At least one sort of button have to be selected.");
      return 1;
    }


    //Create background
    this.popUpBg = document.createElement("DIV");
    this.popUpBg.classList.add("pop-up-bg");
    document.body.appendChild(this.popUpBg);


    //Create pop-up
    this.popUp = document.createElement("DIV");
    this.popUp.classList.add("pop-up");
    this.popUpBg.appendChild(this.popUp);

    if (this.input.icon != false) {
      var icon = document.createElement("P");
      icon.classList.add("pop-up-icon");
      icon.innerHTML = this.input.icon;
      this.popUp.appendChild(icon);
    }

    var popUpText = document.createElement("P");
    popUpText.innerHTML = this.input.message;
    this.popUp.appendChild(popUpText);

    this.createButtons();

    return this.events();

  }


  createButtons() {
    //Create buttons
    var buttonLine = document.createElement("DIV");
    buttonLine.classList.add("button-line");
    this.popUp.appendChild(buttonLine);

    if (this.input.ok == true) {
      this.btnOk = document.createElement("BUTTON");
      this.btnOk.innerHTML = "OK";
      this.btnOk.classList.add("standard-button");
      buttonLine.appendChild(this.btnOk);
    }
    if (this.input.cancel == true) {
      this.btnCancel = document.createElement("BUTTON");
      this.btnCancel.innerHTML = "Cancel";
      this.btnCancel.classList.add("standard-button");
      buttonLine.appendChild(this.btnCancel);
    }
    if (this.input.custom == true) {
      this.btnCustom = document.createElement("BUTTON");
      this.btnCustom.innerHTML = this.input.text;
      this.btnCustom.classList.add("standard-button");
      buttonLine.appendChild(this.btnCustom);
    }

  }

  close() {
    this.popUpBg.remove();
  }



  events() {
    const bg = this.popUpBg;
    const btnOk = this.btnOk;
    const inBtnOk = this.input.ok;
    const btnCancel = this.btnCancel;
    const inBtnCancel = this.input.cancel;
    const btnCustom = this.btnCustom;
    const inBtnCustom = this.input.custom;

    var promise = new Promise(function(resolve, reject) {
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