/** @jsx React.DOM */
!(function(){
    'use strict';
    var ENTER_KEY_CODE = 13;

    var ChatInput = React.createClass({

        getInitialState: function() {
            return {
                value: this.props.value || ''
            };
        },

        render: function() {
            return (
                <input
                    className='chatBox'
                    ref='chatInput'
                />
                //<input
                    //className='chatBox'
                    //ref='chatInput'
                    //onKeyDown={this._onKeyDown}
                    //onChange={this._onChange}
                    //value={this.state.value}
                    //autoFocus={true}
                ///>
            )
        },

        _onChange: function(/*object*/ event) {
            this.setState({
                value: event.target.value
            });
        },


        _onKeyDown: function(event) {
            if (event.keyCode === ENTER_KEY_CODE) {
                this._addMessage();
            }
        },

        _addMessage: function() {
            this.props.messageList.push({ id:'3', message: this.state.value })
        }

    });

    // Make it compatible for require.js/AMD loader(s)
    if(typeof define === 'function' && define.amd) {
        define(function() { return ChatInput; });
    } else if(typeof module !== 'undefined' && module.exports) {
        // And for npm/node.js
        module.exports = ChatInput;
    } else {
        this.ChatInput = ChatInput;
    }
}).call(this);

