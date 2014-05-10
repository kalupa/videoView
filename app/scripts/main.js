/** @jsx React.DOM */

!(function(){
    'use strict';
    React.renderComponent(
        <ChatApp />,
        $('#chatter')[0]
    );
    React.renderComponent(
        <LocalVideo />,
        $('#local-video')[0]
    );
})();

