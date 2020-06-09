// ==UserScript==
// @name         Hyper FaceIt
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://*.faceit.com/*
// @grant        none
// @require      https://cdn.jsdelivr.net/gh/skepticfx/wshook@0.1.1/wsHook.js
// ==/UserScript==

// Make sure your program calls `wsClient.onmessage` event handler somewhere.
wsHook.after = function(messageEvent, url, wsObject) {
    var bodyStart = messageEvent.data.search('\<body\>');
    var bodyEnd = messageEvent.data.search('\<\/body\>');

    if (bodyStart > -1 && bodyEnd > -1) {
        let message = messageEvent.data.slice(bodyStart + 6, bodyEnd);
        console.log(message);
    }

    return messageEvent;
}

// if you do not want to propagate the MessageEvent further down, just return null
wsHook.after = function(messageEvent, url, wsObject) {
    //console.log("3Received message from " + url + " : " + messageEvent.data);
    // This example can ping-pong forever, so maybe use some conditions
    wsObject.send("Intercepted and sent again")
    return null;
}

(function() {
    'use strict';

    $(document).ready(function() {
        $('head').append('<style>.sc-jjOAeO.hbbTPq:hover {cursor: pointer;}</style>');
        $(document).on('click', '.sc-jjOAeO.hbbTPq', function(){
            var parent = $(this).parent();
            parent.parent().find('input[type=radio]').prop('checked', false);
            parent.find('input[type=radio]').parent().click();
        });
    });
})();

