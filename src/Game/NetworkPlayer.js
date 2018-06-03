
export default class NetworkPlayer {

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

  createEvent(detail) {
    // this.x = detail.x;
    // this.y = detail.y;
    // this.characterIndex = detail.characterIndex;
    // this.characterName = detail.characterName;
    // this.direction = detail.direction;
    // this.moveSpeed = detail.moveSpeed;
    // this.moveFrequency = detail.moveFrequency;

    let index = $gameMap._events.length;

    let eventObject = {
      "id": this.id,
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
              "code": 102,
              "indent": 0,
              "parameters": [
                [
                  "Party",
                  "Chat",
                  "Other",
                  "Other2",
                  "Other3",
                  "Other4"
                ],
                -2,
                -1,
                1,
                0
              ]
            },
            {
              "code": 402,
              "indent": 0,
              "parameters": [
                0,
                "Party"
              ]
            },
            {
              "code": 355,
              "indent": 1,
              "parameters": [
                "console.log('Adding player to Party')"
              ]
            },
            {
              "code": 0,
              "indent": 1,
              "parameters": []
            },
            {
              "code": 402,
              "indent": 0,
              "parameters": [
                1,
                "Chat"
              ]
            },
            {
              "code": 0,
              "indent": 1,
              "parameters": []
            },
            {
              "code": 402,
              "indent": 0,
              "parameters": [
                2,
                "Other"
              ]
            },
            {
              "code": 0,
              "indent": 1,
              "parameters": []
            },
            {
              "code": 402,
              "indent": 0,
              "parameters": [
                3,
                "Other2"
              ]
            },
            {
              "code": 0,
              "indent": 1,
              "parameters": []
            },
            {
              "code": 402,
              "indent": 0,
              "parameters": [
                4,
                "Other3"
              ]
            },
            {
              "code": 0,
              "indent": 1,
              "parameters": []
            },
            {
              "code": 402,
              "indent": 0,
              "parameters": [
                5,
                "Other4"
              ]
            },
            {
              "code": 0,
              "indent": 1,
              "parameters": []
            },
            {
              "code": 403,
              "indent": 0,
              "parameters": [
                6,
                null
              ]
            },
            {
              "code": 0,
              "indent": 1,
              "parameters": []
            },
            {
              "code": 404,
              "indent": 0,
              "parameters": []
            },
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
          "through": true,
          "trigger": 0,
          "walkAnime": true
        }
      ],
      "x": this.x,
      "y": this.y
    };

    let created = $gameMap.addEvent(eventObject, true, index);

    this.eventId = index;
    this.event = created;
  }

  deleteEvent() {
    $gameSystem.removeCustomEvent($gameMap._mapId, this.eventId);

    if(this.eventId in $gameMap._events) {
      $gameMap.eraseEvent(this.eventId);
    }

    this.eventId = null;
    this.event = null;
  }

  handleMove(detail) {
    this.event.setMoveFrequency(this.moveFrequency);
    this.event.setMoveSpeed(this.moveSpeed);
    this.event.moveStraight(this.direction);
    this.event.setPosition(this.x, this.y);
    this.event.setImage(this.characterName, this.characterIndex);
  }

}