import NetworkPlayer from "./NetworkPlayer";
import Types from "../types";

export default class PlayerManager {

  constructor(socket) {
    this.socket = socket;
    this.players = {};
  }

  registerServerHooks() {
    let manager = this;


    this.socket.onmessage = function (incoming) {
      if (!SceneManager._sceneStarted || !SceneManager._scene._spriteset) return;

      const json = incoming.data;
      const message = JSON.parse(json);
      console.log('received: %s', json);

      let action = parseInt(message[0]);
      let playerId = parseInt(message[1]);

      if(playerId === window.GAME_ID) {
        return;
      }

      if (!(playerId in manager.players)) {
        manager.players[playerId] = new NetworkPlayer(playerId);
      }
      let player = manager.players[playerId];

      if (action === Types.Messages.SPAWN) {


      } else if(action === Types.Messages.DESPAWN) {
        console.log("Removing player from map");
        player.deleteEvent();
      } else if (action === Types.Messages.MOVE) {
        // Needs to be moved to spawn after I figure that out...
        if (player.eventId === null || player.event !== $gameMap._events[player.eventId]) {
          console.log("Creating player on map");
          player.createEvent({
            x: message[2],
            y: message[3],
            characterIndex: message[4],
            characterName: message[5],
            direction: message[6],
            moveSpeed: message[7],
            moveFrequency: message[8],
          });
        }

        player.handleMove({
          x: message[2],
          y: message[3],
          characterIndex: message[4],
          characterName: message[5],
          direction: message[6],
          moveSpeed: message[7],
          moveFrequency: message[8],
        });
      }
    };


    /*
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

          player.handleMove(data);
        }
      }
    }
    */
  }


}