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
    <input type="text" data-prev="month" name="year" class="year" maxlength="2"/>

Javascript:

    $(".day, .month, .year").dateTab();

data-prev and data-next attributes should hold the a class of the prev/next input field. I don«t use ids or the name attribute to make the html-snippet easier to copy&paste reuse within a project

Features
--------

* autotabs between input fields depending on the maxlength attribute
* restricting input to numbers
* preserving special keys functionality (like tab, shift-tab, cursor keys,...)
* backspace delete to previous fields
* fixes the keyup-focus (double autotab if next field is already on maxlength) problem other autotab plugins suffer from by tracking keydown events

Requirements
------------

this plugins requires jQuery >= 1.4.3

Changelog
---------

* 1.0 - initial release


License
-------

The MIT License

Copyright (c) 2010 Dominique Lederer, http://return1.at/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[0]: http://github.com/return1/jquery.datetab "jQuery.datetab"
[1]: http://www.mathachew.com/sandbox/jquery-autotab/ "jQuery.autotab"
