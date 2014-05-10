
/** @jsx React.DOM */
!(function(){
    'use strict';

    var gumHelper = window.GumHelper;

    var RemoteVideo = React.createClass({
        getInitialState: function() {
            return {
                videoElement: {}
            };
        },
        componentDidMount: function() {
            var videoElement;
            if(navigator.getMedia) {
                videoElement = gumHelper.startVideoStreaming(function(err, stream, videoElement, width, height) {
                    videoElement.width =235;
                    videoElement.height = 201;
                    videoElement.ref = 'videoEl2';
                    $('#videoHolderRemote').append(videoElement);
                    return videoElement;
                });
            } else {
                console.error('No luck');
            };
            this.setState({videoElement: videoElement});
        },

        render: function() {
            var videoStyle = { marginTop: 10};
            return <div style={videoStyle} id="videoHolderRemote"></div>;
        }
    });
    //
    // Make it compatible for require.js/AMD loader(s)
    if(typeof define === 'function' && define.amd) {
        define(function() { return RemoteVideo; });
    } else if(typeof module !== 'undefined' && module.exports) {
        // And for npm/node.js
        module.exports = RemoteVideo;
    } else {
        this.RemoteVideo = RemoteVideo;
    }
}).call(this);

