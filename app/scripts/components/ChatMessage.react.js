/** @jsx React.DOM */
!(function(){
    'use strict';

    var ChatMessage = React.createClass({
        render: function() {
            var listStyle = {
                listStyle: 'none',
                margin: 0,
                padding: 0
            }
            return (
                <li style={listStyle} key={this.props.key}> {this.props.message} </li>
            );
        }
    });

    // Make it compatible for require.js/AMD loader(s)
    if(typeof define === 'function' && define.amd) {
        define(function() { return ChatMessage; });
    } else if(typeof module !== 'undefined' && module.exports) {
        // And for npm/node.js
        module.exports = ChatMessage;
    } else {
        this.ChatMessage = ChatMessage;
    }
}).call(this);

