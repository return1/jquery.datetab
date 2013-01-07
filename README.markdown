 jQuery.datetab
=================
comfortable auto-tabbing for date/time fields
[http://github.com/return1/jquery.datetab][0]

Description and Usage
---------------------

This plugin offers a comfortable handling for Date/Time or Datetime HTML input fields. Depending on the maxlength of a input field, the focus autotabs between fields. The plugin uses the new jQuery HTML5 data handling, so defining previous and next fields is done
via HTML attributes (data-next, data-prev) on the input field like:

HTML:

    <input type="text" data-next="month" name="day" class="day" maxlength="2"/>
    <input type="text" data-prev="day" data-next="year" name="month" class="month" maxlength="2"/>
    <input type="text" data-prev="month" name="year" class="year" maxlength="4"/>

Note: all input elements using dateTab() should be siblings in the DOM tree.

Javascript:

    $(".day, .month, .year").dateTab();

data-prev and data-next attributes should hold the a class of the prev/next input field. I don´t use ids or the name attribute to make the html-snippet easier to copy&paste reuse within a project

Features
--------

* autotabs between input fields depending on the maxlength attribute
* restricting input to numbers
* preserving special keys functionality (like tab, shift-tab, cursor keys,...)
* backspace delete to previous fields

Why another autotab plugin?
---------------------------

* the keyup-focus (unintended double-tab if next field is already on maxlength) problem other autotab plugins suffer from is fixed
* this plugin also affects elements that have not yet been added to the DOM through jquery.live()


Requirements
------------

this plugins requires jQuery >= 1.4.3

Changelog
---------

* 1.1 - jQuery 1.7 compatible
* 1.0 - initial release


License
-------

[http://return1.mit-license.org/][2]

[0]: http://github.com/return1/jquery.datetab "jQuery.datetab"
[1]: http://www.mathachew.com/sandbox/jquery-autotab/ "jQuery.autotab"
[2]: http://return1.mit-license.org/ "mit"
