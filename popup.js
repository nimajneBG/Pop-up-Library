/*

Libary for popups they look much nicer than alert()
© by Benjamin Grau



Using:


<!--Include the libary-->
<script src="popup.js"></script>

<!--Create Popup-->
<script type="text/javascript">
  p = new Popup({"message" : "Lorem ipsum dolor sit amet",
    "ok" : true,
    "cancel" : true,
    "coustom" : false,
    "text" : "coustom btn text",
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
    this.btnCoustom;
    this.click;
    console.table(this.input);
  }

  create() {

    //Fehlererkennung
    if (this.input.ok != true && this.input.cancel != true && this.input.coustom != true) {
      console.error("At least one sort of button have to be selected.");
      return 1;
    }

    console.log(this);

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

    var test;

    console.log(this.events().then(function(result) {
      test = result;
      console.log("test");
      return result;
    }, function(err) {
      console.log(err); // Error: "It broke"
    }));

    console.log(test);


    //this.close();

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
    if (this.input.coustom == true) {
      this.btnCoustom = document.createElement("BUTTON");
      this.btnCoustom.innerHTML = this.input.text;
      this.btnCoustom.classList.add("standard-button");
      buttonLine.appendChild(this.btnCoustom);
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
    const btnCoustom = this.btnCoustom;
    const inBtnCoustom = this.input.coustom;

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

      if (inBtnCoustom == true) {
        btnCoustom.onclick = () => {
          bg.remove();
          resolve("coustom");
        }
      }
      if (inBtnCoustom != true && inBtnOk != true && inBtnCancel != true) {
        reject(Error("It broke"));
      }

    });

    return promise;

  }

}
