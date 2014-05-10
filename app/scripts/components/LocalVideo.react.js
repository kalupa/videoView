/** @jsx React.DOM */
!(function(){
    'use strict';

    var gumHelper = window.GumHelper;

    var LocalVideo = React.createClass({
        getInitialState: function() {
            return {
                videoElement: {}
            };
        },
        componentDidMount: function() {
            var videoElement;
            if(navigator.getMedia) {
                videoElement = gumHelper.startVideoStreaming(function(err, stream, videoElement, width, height) {
                    videoElement.width = 135;
                    videoElement.height = 101;
                    videoElement.ref = 'videoEl';
                    $('#videoHolder').append(videoElement);
                    return videoElement;
                });
            } else {
                console.error('No luck');
            };
            this.setState({videoElement: videoElement});
        },

        render: function() {
            var videoStyle = { marginTop: 10};
            return <div style={videoStyle} id="videoHolder"></div>;
        }
    });
    //
    // Make it compatible for require.js/AMD loader(s)
    if(typeof define === 'function' && define.amd) {
        define(function() { return LocalVideo; });
    } else if(typeof module !== 'undefined' && module.exports) {
        // And for npm/node.js
        module.exports = LocalVideo;
    } else {
        this.LocalVideo = LocalVideo;
    }
}).call(this);

