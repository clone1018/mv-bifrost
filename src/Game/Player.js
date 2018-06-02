import Types from "../types";

export default class Player {

  constructor(id) {
    this.id = id;
    this.eventId = null;
    this.event = null;

    this.x = 0;
    this.y = 0;

    this.characterIndex = 0;
    this.characterName = null;
    this.direction = 0;
    this.moveSpeed = 0;
    this.moveFrequency = 0;
  }

  setSocket(socket) {
    this.socket = socket;
  }

  registerGameHooks() {
    let player = this;
    window.addEventListener('Game_Player.refresh', function (e) {
      console.info('Game_Player.refresh', e.detail);
      player.characterIndex = e.detail.characterIndex;
      player.characterName = e.detail.characterName;
      player.handleRefresh(player.characterIndex, player.characterName);
    });
    window.addEventListener('Game_Player.moveByInput.beforeMove', function (e) {
      console.info('Game_Player.moveByInput.beforeMove', e.detail);
    });
    window.addEventListener('Game_Player.moveByInput.afterMove', function (e) {
      console.info('Game_Player.moveByInput.afterMove', e.detail);
      player.handleMove(e.detail);
    });
    window.addEventListener('Scene_Map.create', function (e) {
      console.info('Scene_Map.create', e.detail);
      player.handleMapChange(e.detail.map_id);
    });
    window.addEventListener('Scene_Map.stop', function (e) {
      console.info('Scene_Map.stop', e.detail);
      //player.handleMapChange(e.detail.map_id)
    });
  }

  sendMessage(type, params) {
    console.log(this.channel);
    this.channel.push(type, params);
  }

  connect() {
    console.log('connect');

    // This needs to be done earlier, maybe on an account channel?
    // this.sendMessage("CONNECT", [window.GAME_ID, window.PLAYER_ID]);
  }

  handleMapChange(map_id) {
    this.channel = this.socket.channel("map:" + map_id , {});
    this.channel.join();

    // this.socket.send(JSON.stringify([
    //   Types.Messages.SPAWN,
    //   this.id,
    //   map_id,
    //   this.x,
    //   this.y
    // ]));
  }

  handleRefresh(index, name) {
    // this.socket.send(JSON.stringify([
    //   Types.Messages.REFRESH,
    //   this.id,
    //   index,
    //   name
    // ]));
  }

  handleMove(detail) {
    this.x = detail.x;
    this.y = detail.y;
    this.characterIndex = detail.characterIndex;
    this.characterName = detail.characterName;
    this.direction = detail.direction;
    this.moveSpeed = detail.moveSpeed;
    this.moveFrequency = detail.moveFrequency;

    this.sendMessage("MOVE", {
      "x": this.x,
      "y": this.y,
      "direction": this.direction,
      "move_speed": this.moveSpeed,
      "move_frequency": this.moveFrequency,
    });
    // this.socket.send(JSON.stringify([
    //   Types.Messages.MOVE,
    //   this.id,
    //   detail.map_id,
    //   this.x,
    //   this.y,
    //   this.direction,
    //   this.moveSpeed,
    //   this.moveFrequency,
    // ]));
  }

  data() {
    return {
      id: this.id,
      x: this.x,
      y: this.y,
      direction: this.direction,
      moveSpeed: this.moveSpeed,
      moveFrequency: this.moveFrequency,
      characterName: this.characterName,
      characterIndex: this.characterIndex
    }
  }

}