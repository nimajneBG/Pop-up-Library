# Vanilla JS and CSS Popup libary

This is a simple "vanilla" JS CSS Popup libary, you don't need special HTML it is pure JS and CSS.

## Using:

```HTML
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
```

---
© by Benjamin Grau 👌