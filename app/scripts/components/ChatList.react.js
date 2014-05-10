/** @jsx React.DOM */
!(function(){
    'use strict';

    var ChatList = React.createClass({
        render: function() {

            if (Object.keys(this.props.messageList).length < 1) {
                return <noscript />;
            }

            var messageList = this.props.messageList;
            var messages = [];

            for (var key in messageList) {
                messages.push(<ChatMessage key={key} message={messageList[key].message} />);
            }

            var chatStyle = {
                margin: 0,
                padding: 0
            }

            return (
                <ul style={chatStyle}>
                    {messages}
                </ul>
            );
        }
    });

    // Make it compatible for require.js/AMD loader(s)
    if(typeof define === 'function' && define.amd) {
        define(function() { return ChatList; });
    } else if(typeof module !== 'undefined' && module.exports) {
        // And for npm/node.js
        module.exports = ChatList;
    } else {
        this.ChatList = ChatList;
    }
}).call(this);

