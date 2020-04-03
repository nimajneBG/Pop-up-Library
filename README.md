# Vanilla JS and CSS Pop-up library
Library for pop-ups that look much nicer than `alert()`

This is a simple "vanilla" JS and CSS Pop-up library.

You don't need any special HTML, because the required HTML is generated automatically when you create a pop-up.

## Usage:
### Include the library:
```HTML
<!--Include the CSS-->
<link rel="stylesheet" href="pop-up.css">

<!--Include the library-->
<script src="pop-up.js"></script>
```
### Create a pop-up:
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
    console.log(err); //What should happen if something goes wrong
  });
</script>
```

## Customization

You can customize the content of the Pop-up via the object parameter at `new PopUp({...})`

If you don't like the look of the pop-ups, you can write your own CSS, or if you only don't like the color theme, you can go to the `:root` Element in the CSS and change the color variables.
```CSS
/* Color theme */
:root {
	--popUpBg: rgba(26, 26, 26, 0.7);
	--popUpWindowBg: #fff;
	--popUpBtnLineColor: lightgrey;
	--popUpBtnBg: #3498db;
	--popUpBtnTextColor: #fff;
	--popUpTextColor: #000;
}
```

---
Copyright © 2020 Benjamin Grau & Gregor Parzefall (MIT license) 👌
