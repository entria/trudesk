/**
 .                              .o8                     oooo
 .o8                             "888                     `888
 .o888oo oooo d8b oooo  oooo   .oooo888   .ooooo.   .oooo.o  888  oooo
 888   `888""8P `888  `888  d88' `888  d88' `88b d88(  "8  888 .8P'
 888    888      888   888  888   888  888ooo888 `"Y88b.   888888.
 888 .  888      888   888  888   888  888    .o o.  )88b  888 `88b.
 "888" d888b     `V88V"V8P' `Y8bod88P" `Y8bod8P' 8""888P' o888o o888o
 ========================================================================
 Created:    08/20/2015
 Author:     Chris Brame

 **/

define('modules/socket.io/ticketsUI', [
    'jquery',
    'underscore',
    'moment',
    'modules/helpers',
    'modules/navigation',
    'history'

], function($) {
    var ticketsUI = {};

    ticketsUI.updateSubscribe = function(socket) {
        socket.removeAllListeners('ticket:subscriber:update');
        socket.on('ticket:subscriber:update', function(data) {
            var $subscribeSwitch = $('input#subscribeSwitch[data-subscribe-userId="' + data.user + '"]');
            if ($subscribeSwitch.length > 0) {
                if (data.subscribe)
                    $subscribeSwitch.prop('checked', true);
                else
                    $subscribeSwitch.prop('checked', false);
            }
        });
    };

    return ticketsUI;
});
