/*:
 * @plugindesc Bifrost - Connects with Heimdall to provide MMO features to MV games
 * @author clone1018       
 */
var GAME_ID = Math.floor(Math.random() * 1000000000);
window.GAME_ID = GAME_ID;
window.PLAYER_ID = null;

import {Socket} from "./Lib/phoenix";
import "./Lib/OrangeCustomEvents";
import "./Lib/CmdInp";

import Player from "./Game/Player";
import PlayerManager from "./Game/PlayerManager";
import NetworkBattleManager from "./Game/NetworkBattleManager";
import Types from "./types";

import Map from "./ServerEvents/Map";

import "./Events/Game_Party";
import "./Events/Game_Player";
import "./Events/Scene_Battle";
import "./Events/Scene_Map";
import "./Events/Scene_Menu";

import Vue from 'vue';
import App from './Components/App.vue';

(function () { 
  var parameters = PluginManager.parameters('Bifrost');

  let socket = new Socket("ws://127.0.0.1:8101/socket", {
    logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) },
    params: {player_id: GAME_ID}
  })
  socket.connect()
  // playerChannel.join()
  //   .receive("ok", resp => { console.log("Joined successfully", resp) })
  //   .receive("error", resp => { console.log("Unable to join", resp) })

    // let playerManager = new PlayerManager(playerChannel);
    // playerManager.registerServerHooks();

    // let battleManager = new NetworkBattleManager(socket);
    // battleManager.registerGameHooks();

    let player = new Player(GAME_ID);
    player.setSocket(socket);
    player.registerGameHooks();
    // player.registerServerHooks();
    player.connect();

    new Vue({
      el: '#app',
      render: h => h(App)
    });

})();