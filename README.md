# jQuery Floating Form Label
A jQuery Plugin to turn an input placeholder into a floated form label when selected or filled out.

[See Demo](http://drewrawitz.github.io/demo/jquery-floating-form-label/)

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
An example of how this demo page uses this script:

####HTML
Markup can be flexible, just make sure you add a `float-label` class to the inputs you want to float.
```html
<form>
  <div class="form-group">
    <input type="text" class="float-label" placeholder="Username" required>
  </div>
  <div class="form-group">
    <input type="password" class="float-label" placeholder="Password" required>
  </div>
</form>
```

####JS
```js
<script>
  $(document).ready(function () {
    $(".float-label").floatingFormLabel();
  });
</script>
```

#### CSS
Make sure to include the `_floatingFormLabel.scss` sass partial to your folder structure . I've also included the regular compiled css file if you're not using sass.

There is one option to include:

* `addRequiredAsterisk` -- **boolean**: Prepend an asterisk to the input placeholder if using the HTML5 Required Property (default: true )

