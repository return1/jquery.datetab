/**
* jQuery.dateTab - comfortable auto-tabbing for date/time fields
*
* version 1.0
*
* http://return1.at/
* http://github.com/return1/jquery.datetab
*
* Copyright (c) 2010 Dominique Lederer
* Licensed under terms of the MIT License (http://www.opensource.org/licenses/mit-license.php)
*/

/*jslint white: true, undef: true, nomen: true, eqeqeq: true, regexp: true, newcap: true */
/*global $, jQuery */

(function ($) {

    $.fn.dateTab = function () {

        return this.live('keydown keyup', function (event) {
            var key,
                maxlength,
                next,
                prev,
                specialkeys,
                keyIsValid;

            key = event.which;
            maxlength = $(this).attr('maxlength');
            next = '.' + $(this).data('next');
            prev = '.' + $(this).data('prev');
            /**
             * allow this special keys
             * 8:   Backspace
             * 9:   Tab
             * 16:  Shift
             * 17:  Ctrl
             * 18:  Alt
             * 19:  Pause Break
             * 20:  Caps Lock
             * 27:  Esc
             * 33:  Page Up
             * 34:  Page Down
             * 35:  End
             * 36:  Home
             * 37:  Left Arrow
             * 38:  Up Arrow
             * 39:  Right Arrow
             * 40:  Down Arrow
             * 45:  Insert
             * 46:  Delete
             * 144: Num Lock
             * 145: Scroll Lock
             * 224: OSX Option Key
             */
            specialkeys = [8, 9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145, 224];

            if (!maxlength) {
                throw ("please specify the maxlength attribute on all dateTab fields");
            }

            /**
             * Keydown Event
             */
            if (event.type === 'keydown') {

                // prevent typing non-numerical chars
                // allow codes for keys 0-9 on alphanumerical block and numpad; allow specialchars
                if (!(key >= 48 && key <= 57 || key >= 96 && key <= 105 || $.inArray(key, specialkeys) !== -1)) {
                    event.preventDefault();
                } else {
                    //if a number was pressed, save it on this element, what was keydowned. this is used in the keyup handler below
                    if (key >= 48 && key <= 57 || key >= 96 && key <= 105) {
                        //init keydown code array
                        if (!$.isArray($(this).data('keydown'))) {
                            $(this).data('keydown', []);
                        }
                        //save pressed key with jQuery.data() as array of pressed keycodes
                        $(this).data('keydown').push(key);
                    }
                }

                //special treatment for the backspace key:
                //if nothing to delete in this field, focus previous one and delete there
                if (key === 8 && this.value.length === 0 && prev) {
                    $(this).siblings(prev).focus();
                }

            }

            /**
             * Keyup Event
             */
            else if (event.type === 'keyup') {
                keyIsValid = $.inArray(key, $(this).data('keydown')) !== -1; //true, if an keydown event with this keycode was fired on this element

                //do autotab
                if (keyIsValid && this.value.length === maxlength && next) {
                    $(this).siblings(next).change().select(); //trigger change on autotabbing , select next field
                }

                //reset pressed key in the custom data array
                if ($(this).data('keydown')) {
                    $(this).data('keydown').pop(key);
                }

            }

        });
    };
})(jQuery);