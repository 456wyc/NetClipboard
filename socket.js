/********************************************************************
 * @project Pipe
 * @file WebStorm
 * @brief
 * @author wyc
 * @date 2019/3/31
 ********************************************************************
 */

var io = require('socket.io');

module.exports = function (httpServer) {
    var ioServer = io(httpServer);

    ioServer.on('connection', function (socket) {
        console.log('a user connected');

        socket.on('update', function (msg) {
            console.log('new msg:', msg);
            socket.broadcast.emit('update', msg);
        })
    });

    return ioServer;
};