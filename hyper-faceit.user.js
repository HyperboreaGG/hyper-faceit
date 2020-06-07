// ==UserScript==
// @name         Hyper FaceIt
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.faceit.com/en/csgo/room/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(document).on('click', '.sc-jjOAeO.hbbTPq', function(){
        let parent = $(this).parent();
        parent.parent().find('input[type=radio]').prop('checked', false);
        parent.find('input[type=radio]').parent().click();
    });
    // Your code here...
})();
