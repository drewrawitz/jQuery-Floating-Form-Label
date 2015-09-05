/* ===========================================================
 * jQuery Floating Form Labels
 *
 * Author: Drew Rawitz <email@drewrawitz.com>
 * http://www.drewrawitz.com
 *
 * https://github.com/drewrawitz/jquery-floating-form-label
 *
 * Options:
 *  - addRequiredAsterisk (boolean)
 * ========================================================== */

(function ($) {
  'use strict';

  $.fn.floatingFormLabel = function (options) {

    // Default options
    var defaults = {
      addRequiredAsterisk: true
    };

    var opts = $.extend(true, {}, defaults, options);

    return this.each(function () {

      // define some variables
      var $element = $(this),
          label = $element.attr('placeholder'),
          activeClass = 'float-label--active';

      // wrap the inputs with our markup
      $element.wrap('<div class="float-label__wrapper"></div>');
      $('<label>' + label + '</label>').insertBefore($element);

      // check if there are any required fields
      if($element.prop('required')) {

        // add an asterisk to the placeholder
        if(opts.addRequiredAsterisk) {
          $element.attr("placeholder", "* " + label);
        }

        // add the asterisk to the label
        $element.parent().find('label').addClass('float-label--required').prepend('<span>*</span>');
      }

      // on keyup or change (for autofill), add / remove the appropriate classes
      $element.bind('change keyup', function() {
        if($element.val()) {
          $element.parent().addClass(activeClass).find('label').fadeIn(300);
        } else {
          $element.parent().removeClass(activeClass).find('label').fadeOut(300);
        }
      });

      // handling the active classes based on input focus
      $element.blur(function() {
        $element.parent().removeClass(activeClass);
      }).focus(function() {
        $element.parent().addClass(activeClass);
      });

    });

  };
}(jQuery));
