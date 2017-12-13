/*:
 * @plugindesc Bifrost - Connects with Heimdall to provide MMO features to MV games
 * @author clone1018       
 */
var GAME_ID = Math.floor(Math.random() * 1000000000);
window.GAME_ID = GAME_ID;

import "./Lib/OrangeCustomEvents";

import Player from "./Game/Player";
import PlayerManager from "./Game/PlayerManager";

import "./Events/Game_Player";

(function () {
  var parameters = PluginManager.parameters('Bifrost');

  var socket = new WebSocket("ws://127.0.0.1:8101");
  socket.onopen = function (event) {
    socket.send(JSON.stringify({
      event: 'CONNECT',
      data: {
        game_id: GAME_ID
      }
    }));
  };

  let playerManager = new PlayerManager(socket);
  playerManager.registerServerHooks();

  let player = new Player(GAME_ID);
  player.registerGameHooks(socket);

})();