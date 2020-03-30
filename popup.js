/*

Libary for popups they look much nicer than alert()
© by Benjamin Grau



Using:


<!--Include the library-->
<script src="popup.js"></script>

<!--Create Popup-->
<script type="text/javascript">
  p = new Popup({"message" : "Lorem ipsum dolor sit amet",
    "ok" : true,
    "cancel" : true,
    "custom" : false,
    "text" : "custom btn text",
    "icon" : "an emoji as icon 📣"
  });

  p.create();
</script>

*/

class Popup {

  constructor(x) {
    this.input = x;
    this.popupBg;
    this.popup;
    this.btnOk;
    this.btnCancel;
    this.btnCustom;
    this.click;
    console.table(this.input);
  }

  create() {

    //Fehlererkennung
    if (this.input.ok != true && this.input.cancel != true && this.input.custom != true) {
      console.error("At least one sort of button have to be selected.");
      return 1;
    }


    //Hintergrund erstellen
    this.popupBg = document.createElement("DIV");
    this.popupBg.classList.add("popup-bg");
    document.body.appendChild(this.popupBg);


    //Popup erstellen
    this.popup = document.createElement("DIV");
    this.popup.classList.add("popup");
    this.popupBg.appendChild(this.popup);

    if (this.input.icon != false) {
      var icon = document.createElement("P");
      icon.classList.add("popup-icon");
      icon.innerHTML = this.input.icon;
      this.popup.appendChild(icon);
    }

    var popupText = document.createElement("P");
    popupText.innerHTML = this.input.message;
    this.popup.appendChild(popupText);

    this.createButtons();

    return this.events();

  }


  createButtons() {
    //Buttons
    var buttonLine = document.createElement("DIV");
    buttonLine.classList.add("button-line");
    this.popup.appendChild(buttonLine);

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
    this.popupBg.remove();
  }



  events() {
    const bg = this.popupBg;
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
