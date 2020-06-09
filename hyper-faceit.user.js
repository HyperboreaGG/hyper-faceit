// ==UserScript==
// @name         Hyper FaceIt
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        https://*.faceit.com/*
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @require      https://cdn.jsdelivr.net/gh/khaimovmr/wshook@0.1.2/wsHook.js
// @require      https://cdn.jsdelivr.net/gh/hyperboreagg/hyper-faceit-assets@0.3.1/wshook-init.js
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function() {
        let styleElement = document.createElement('style');
        styleElement.innerHTML = '.sc-jjOAeO.hbbTPq:hover {cursor: pointer;}';
        styleElement.type = 'text/css';
        document.head.insertBefore(styleElement, document.head.firstChild);
        //$('head').append('<style>.sc-jjOAeO.hbbTPq:hover {cursor: pointer;}</style>');
        $(document).on('click', '.sc-jjOAeO.hbbTPq', function(){
            var parent = $(this).parent();
            parent.parent().find('input[type=radio]').prop('checked', false);
            parent.find('input[type=radio]').parent().click();
        });
    });
})();
