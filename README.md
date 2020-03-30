# Vanilla JS and CSS Popup libary

This is a simple "vanilla" JS and CSS Popup libary, you don't need special HTML it is pure JS and CSS.

## Usage:

```HTML
<link rel="stylesheet" href="popup.css">
```

```HTML
<!--Include the libary-->
<script src="popup.js"></script>

<!--Create Popup-->
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
    } else if (result == "canel") { 
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

You can coustomize the conntent of the Popup via the JSON String at `new Popup({...})`

But if you don't like the look of the popups you can write your one CSS or if you only don't like the colortheme you can go to the `:root` Elemt in the CSS and change the color variables.
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
© by Benjamin Grau 👌