import NetworkPlayer from "./NetworkPlayer";

export default class PlayerManager {

  constructor(socket) {
    this.socket = socket;
    this.players = {};
  }

  registerServerHooks() {
    let manager = this;
    console.log(manager);
    this.socket.onmessage = function (incoming) {
      console.log('received: %s', incoming.data);
      let msg = JSON.parse(incoming.data);
      let event = msg.event;
      let data = msg.data;

      if (!(data.id in manager.players)) {
        manager.players[data.id] = new NetworkPlayer(data.id);
      }
      let player = manager.players[data.id];

      if (player.eventId === null) {
        player.createEvent(data);
      }

      if (event == "PLAYER_MOVE") {
        if (window.GAME_ID !== player.id) {
          if (!SceneManager._sceneStarted || !SceneManager._scene._spriteset) return;

          console.log("Sending handleMove for " + player.id);
          player.handleMove(data);

          // Another player, for now create a new actor

          // Spriteset_Map.prototype.createNetworkPlayer = function(player) {
          //   var sId = this._characterSprites.length;
          //
          //   let sprite = new Sprite_Character(newPlayer);
          //   sprite.update();
          //
          //   this._characterSprites[sId] = sprite;
          //   this._tilemap.addChild(this._characterSprites[sId]);
          // };

          var l = $dataMap.events.length;

          //
          // Game_Map.prototype.addEvent(eventData, true, index);
          // $dataMap.events[l] = {};
          // $gameMap._events[l] = new Game_Event($gameMap._mapId, l);
          //SceneManager._scene.children = []; SceneManager._scene.createDisplayObjects();

          // let newPlayer = new NetworkPlayer(1,data.id);
          // SceneManager._scene._spriteset.createNetworkPlayer(newPlayer);
        }
      }
    }
  }


}