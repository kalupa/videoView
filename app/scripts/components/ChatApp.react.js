/** @jsx React.DOM */

!(function(){
    'use strict';

    var socket = io.connect(
        location.protocol + '//' + location.hostname +
        (location.port ? ':' + location.port : '')
    );

    var ChatApp = React.createClass({
        getInitialState: function() {
            return {
                messages: [
                    {message: 'chat'},
                    {message: 'this is more chat'},
                    {message: 'even more'},
                ]
            };
        },

        render: function() {
            return (
                <div>
                    <div><RemoteVideo /></div>
                    <ChatList messageList = {this.state.messages}/>
                    <form><ChatInput messageList = {this.state.messages}/></form>
                    <LocalVideo />
                </div>
            );
        }
    });

    // Make it compatible for require.js/AMD loader(s)
    if(typeof define === 'function' && define.amd) {
        define(function() { return ChatApp; });
    } else if(typeof module !== 'undefined' && module.exports) {
        // And for npm/node.js
        module.exports = ChatApp;
    } else {
        this.ChatApp = ChatApp;
    }

}).call(this);
