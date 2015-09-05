# jQuery Floating Form Label
A jQuery Plugin to turn an input placeholder into a floated form label when selected or filled out.

## Installation

Include [jQuery](http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js) and the `jquery.floatingFormLabel.js` script:
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
<script src="jquery.floatingFormLabel.js"></script>
```

[Bower](https://github.com/bower/bower) users can get the source with:

```sh
bower install jquery-floating-form-label
```

## Using jQuery.floatingFormLabel.js
Use the plugin like so:

```js
<script>
  $(document).ready(function () {
    $(".float-label").floatingFormLabel({
      addRequiredAsterisk: true
    });
  });
</script>
```
There is one option to include:

* `addRequiredAsterisk` -- **boolean**: Prepend an asterisk to the input placeholder if using the HTML5 Required Property (default: true )

### CSS
Make sure to include the `floatingFormLabel.css` file. I've also provided a sass partial, so you can easily just copy that file into your sass folder structure.
