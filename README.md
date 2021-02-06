# Vanilla JS and CSS Pop-up library

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://lbesson.mit-license.org/)&nbsp;&nbsp;[![GitHub release](https://img.shields.io/github/release/nimajneBG/Pop-up-Library.svg?style=for-the-badge)](https://github.com/nimajneBG/Pop-up-Library)&nbsp;&nbsp;![Using JS](https://img.shields.io/badge/Unsing-JS-green?style=for-the-badge)&nbsp;&nbsp;![Using CSS](https://img.shields.io/badge/Unsing-CSS-green?style=for-the-badge)

Library for pop-ups and toasts that look much nicer than `alert()`.
<!--Hello-->
This is a simple "vanilla" JS and CSS Pop-up library.

Beside "normal" Pop-ups you can also create Toast Pop-ups.

You don't need any special HTML, because the required HTML is generated automatically when you create a pop-up or toast.

## Usage
### Include the library

**Normal files**
```HTML
<!--Include the CSS-->
<link rel="stylesheet" href="pop-up.css">

<!--Include the library-->
<script src="pop-up.js"></script>
```

**Minified files**
```HTML
<!--Include the CSS-->
<link rel="stylesheet" href="pop-up.min.css">

<!--Include the library-->
<script src="pop-up.min.js"></script>
```

### Use the predefined functions for pop-ups
```JavaScript
popUpInfo("Message"); //Displays an information pop-up with an OK button and a close button.
popUpError("Error message"); //Displays an error pop-up with an OK button and a close button.
popUpConfirm("Question"); 
/*Displays an confirm pop-up with an OK button and a cancel button.
Returns a promise which gets fulfilled when the user clicks one of the buttons.
The promise returns "ok" or "cancel".*/
```

### Create a custom pop-up
```HTML
<!--Create Pop-up-->
<script type="text/javascript">
  var p = new PopUp({
	"message" : "Lorem ipsum dolor sit amet", //Set the message in the pop-up
	"ok" : true, //Set if there should be a OK button
	"cancel" : true, //Set if there should be a cancel button
	"custom" : false, //Set if there should be a custom button
	"close" : true, //Set if there should be a close button ("x")
	"text" : "custom button text", //Set the text for your custom button
	"icon" : "📣" //Set the emoji which should be used as icon
  });

  p.create().then(function(result) {
	if (result == "ok") {
	  //What should happen if ok was pressed
	} else if (result == "cancel") {
	  //What should happen if cancel was pressed
	} else if (result == "custom") {
	  //What should happen if the custom button was pressed
	}
  }, function(err) {
	console.error(err); //What should happen if something goes wrong
  });
</script>
```

### Create a custom toast
```HTML
<!--Create Pop-up-->
<script type="text/javascript">
  var t = new Toast({
	"message" : "Lorem ipsum dolor sit amet", //Set the message in the pop-up
	"ok" : true, //Set if there should be a OK button
	"cancel" : true, //Set if there should be a cancel button
	"custom" : false, //Set if there should be a custom button
	"close" : true, //Set if there should be a close button ("x")
	"text" : "custom button text", //Set the text for your custom button
  });

  t.create().then((result) => {
	if (result == "ok") {
	  //What should happen if ok was pressed
	} else if (result == "cancel") {
	  //What should happen if cancel was pressed
	} else if (result == "custom") {
	  //What should happen if the custom button was pressed
	}
  }, function(err) {
	console.error(err); //What should happen if something goes wrong
  });
</script>
```

## Customization

You can customize the content of the Pop-up via the object parameter at `new PopUp({...})` or `new Toast({...})`

If you don't like the look of the pop-ups and toasts, you can write your own CSS, or if you only don't like the color theme, you can go to the `:root` Element in the CSS and change the color variables.

The colors are the same for the toasts and the pop-ups.
```CSS
/* Color theme */
:root {
	--popUpBg: rgba(26, 26, 26, 0.7);
	--popUpWindowBg: #fff;
	--popUpBtnLineColor: lightgrey;
	--popUpBtnBg: #3498db;
	--popUpBtnHoverBg: #2e80b7;
	--popUpBtnTextColor: #fff;
	--popUpTextColor: #000;
	--shadow: #ccc;
}
```

---
Copyright © 2020 Benjamin Grau & Gregor Parzefall (MIT license) 👌
