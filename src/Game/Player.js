
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

  registerGameHooks(socket) {
    this.socket = socket;

    let player = this;
    window.addEventListener('Game_Player.moveByInput.beforeMove', function (e) {
      console.log('beforeMove', e.detail);
    });
    window.addEventListener('Game_Player.moveByInput.afterMove', function (e) {
      console.log('afterMove', e.detail);
      player.handleMove(e.detail);
    });
  }

  handleMove(detail) {
    this.x = detail.x;
    this.y = detail.y;
    this.characterIndex = detail.characterIndex;
    this.characterName = detail.characterName;
    this.direction = detail.direction;
    this.moveSpeed = detail.moveSpeed;
    this.moveFrequency = detail.moveFrequency;

    this.socket.send(JSON.stringify({event: "PLAYER_MOVE", data: this.data()}));
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