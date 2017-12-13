import Player from "./Player";

export default class NetworkPlayer extends Player {

  constructor(id) {
    super();
  }

  createEvent(detail) {
    console.log('createEvent', detail);
    this.x = detail.x;
    this.y = detail.y;
    this.characterIndex = detail.characterIndex;
    this.characterName = detail.characterName;
    this.direction = detail.direction;
    this.moveSpeed = detail.moveSpeed;
    this.moveFrequency = detail.moveFrequency;

    var index = $gameMap._events.length;

    let eventObject = {
      "id": 1,
      "name": "NetworkPlayer1",
      "note": "",
      "pages": [
        {
          "conditions": {
            "actorId": 1,
            "actorValid": false,
            "itemId": 1,
            "itemValid": false,
            "selfSwitchCh": "A",
            "selfSwitchValid": false,
            "switch1Id": 1,
            "switch1Valid": false,
            "switch2Id": 1,
            "switch2Valid": false,
            "variableId": 1,
            "variableValid": false,
            "variableValue": 0
          },
          "directionFix": false,
          "image": {
            "tileId": 0,
            "characterName": this.characterName,
            "direction": this.direction,
            "pattern": 0,
            "characterIndex": this.characterIndex
          },
          "list": [
            {
              "code": 0,
              "indent": 0,
              "parameters": []
            }
          ],
          "moveFrequency": this.moveFrequency,
          "moveRoute": {
            "list": [
              {
                "code": 0,
                "parameters": []
              }
            ],
            "repeat": true,
            "skippable": false,
            "wait": false
          },
          "moveSpeed": this.moveSpeed,
          "moveType": 0,
          "priorityType": 1,
          "stepAnime": false,
          "through": false,
          "trigger": 0,
          "walkAnime": true
        }
      ],
      "x": this.x,
      "y": this.y
    };
    console.log(eventObject);

    var created = $gameMap.addEvent(eventObject, true, index);

    this.eventId = index;
    this.event = created;
  }

  handleMove(detail) {
    this.x = detail.x;
    this.y = detail.y;
    this.characterIndex = detail.characterIndex;
    this.characterName = detail.characterName;
    this.direction = detail.direction;
    this.moveSpeed = detail.moveSpeed;
    this.moveFrequency = detail.moveFrequency;

    this.event.setMoveFrequency(this.moveFrequency);
    this.event.setMoveSpeed(this.moveSpeed);
    this.event.moveStraight(this.direction);
    this.event.setPosition(this.x, this.y);
    this.event.setImage(this.characterName, this.characterIndex);
  }

}