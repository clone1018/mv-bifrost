import NetworkPlayer from "./NetworkPlayer";

export default class MapManager {

    constructor(channel) {
        this.channel = channel;
        this.players = {};

        this.registerServerHooks();
    }

    registerServerHooks() {
        let manager = this;

        this.channel.on("EXIST", function (params) {
            console.log("Creating player: ", params);
            manager.players[params.player_id] = new NetworkPlayer(params.player_id);

            let player = manager.players[params.player_id];
            player.x = params.x;
            player.y = params.y;
            player.characterName = params.character_name;
            player.characterIndex = params.character_index;
            player.direction = params.direction;
            player.moveSpeed = params.move_speed;
            player.moveFrequency = params.move_frequency;

            try {
                player.createEvent();
                player.handleMove();
            } catch(e) {
                console.error(e);
            }
        });

        this.channel.on("SPAWN", function (params) {
            manager.players[params.player_id] = new NetworkPlayer(params.player_id);
            manager.players[params.player_id].x = params.x;
            manager.players[params.player_id].y = params.y;
        });

        this.channel.on("REFRESH", function (params) {
            let player = manager.players[params.player_id];

            player.characterName = params.character_name;
            player.characterIndex = params.character_index;

            player.createEvent();
        });

        this.channel.on("DESPAWN", function (params) {
            let player = manager.players[params.player_id];
            if(typeof player === 'undefined') return;

            player.deleteEvent();
        });


        this.channel.on("MOVE", function (params) {
            let player = manager.players[params.player_id];
            if(typeof player === 'undefined') return;

            player.x = params.x;
            player.y = params.y;
            player.direction = params.direction;
            player.moveSpeed = params.move_speed;
            player.moveFrequency = params.move_frequency;

            player.handleMove();
        });


        // this.socket.onmessage = function (incoming) {
        //   if (!SceneManager._sceneStarted || !SceneManager._scene._spriteset) return;

        //   const json = incoming.data;
        //   const message = JSON.parse(json);
        //   console.log('received: %s', json);

        //   let action = parseInt(message[0]);
        //   let playerId = parseInt(message[1]);

        //   if(playerId === window.GAME_ID) {
        //     return;
        //   }

        //   if (!(playerId in manager.players)) {
        //     manager.players[playerId] = new NetworkPlayer(playerId);
        //   }
        //   let player = manager.players[playerId];

        //   if (action === Types.Messages.SPAWN) {


        //   } else if(action === Types.Messages.DESPAWN) {
        //     console.log("Removing player from map");
        //     player.deleteEvent();
        //   } else if (action === Types.Messages.MOVE) {
        //     // Needs to be moved to spawn after I figure that out...
        //     if (player.eventId === null || player.event !== $gameMap._events[player.eventId]) {
        //       console.log("Creating player on map");
        //       player.createEvent({
        //         x: message[3],
        //         y: message[4],
        //         characterIndex: 0,
        //         characterName: "Actor1",
        //         direction: message[5],
        //         moveSpeed: message[6],
        //         moveFrequency: message[7],
        //       });
        //     }

        //     player.handleMove({
        //       x: message[3],
        //       y: message[4],
        //       characterIndex: 0,
        //       characterName: "Actor1",
        //       direction: message[5],
        //       moveSpeed: message[6],
        //       moveFrequency: message[7],
        //     });
        //   }
        // };


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