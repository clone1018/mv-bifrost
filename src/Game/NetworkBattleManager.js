import NetworkPlayer from "./NetworkPlayer";
import Types from "../types";

export default class NetworkBattleManager {

  constructor(socket) {
    this.socket = socket;
    this.players = {};
  }

  registerGameHooks() {
    window.addEventListener('Scene_Battle.start', function (e) {
      console.info('Scene_Battle.start', e.detail);
    });
    window.addEventListener('Scene_Battle.update', function (e) {
      console.info('Scene_Battle.update', e.detail);
    });
  }

  registerServerHooks() {
  }


}