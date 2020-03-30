# Vanilla JS and CSS Pop-up library
Library for pop-ups that look much nicer than alert()

This is a simple "vanilla" JS and CSS Pop-up library, you don't need special HTML because it is pure JS and CSS.

## Usage:

```HTML
<!--Include the CSS-->
<link rel="stylesheet" href="popup.css">
```

```HTML
<!--Include the library-->
<script src="popup.js"></script>

<!--Create Pop-up-->
<script type="text/javascript">
  var p = new Popup({"message" : "Lorem ipsum dolor sit amet",
    "ok" : true,
    "cancel" : true,
    "custom" : false,
    "text" : "custom btn text",
    "icon" : "an emoji as icon 📣"
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

You can customize the content of the Pop-up via the JSON String at `new Popup({...})`

If you don't like the look of the pop-ups, you can write your own CSS, or if you only don't like the color theme, you can go to the `:root` Element in the CSS and change the color variables.
```CSS
/* Colortheme */
:root {
	--popupBG: rgba(26, 26, 26, 0.7);
	--popupWindowBG: #fff;
	--btnBG: #3498db;
	--btnText: #fff;
	--textColor: #000;
}
```

---
Copyright © 2020 Benjamin Grau & Gregor Parzefall (MIT license)
