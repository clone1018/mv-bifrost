/*
 * Available Events:
 * Game_Player.moveByInput.beforeMove
 * Game_Player.moveByInput.afterMove
 */

Game_Player.prototype.moveByInput = function () {
  if (!this.isMoving() && this.canMove()) {
    var direction = this.getInputDirection();
    if (direction > 0) {
      $gameTemp.clearDestination();
    } else if ($gameTemp.isDestinationValid()) {
      var x = $gameTemp.destinationX();
      var y = $gameTemp.destinationY();
      direction = this.findDirectionTo(x, y);
    }
    if (direction > 0) {
      window.dispatchEvent(new CustomEvent('Game_Player.moveByInput.beforeMove', {
        detail: {
          map_id: $gameMap.mapId(),
          x: this.x,
          y: this.y,
          direction: direction,
          moveSpeed: this.realMoveSpeed(),
          moveFrequency: this.moveFrequency(),
          characterName: this._characterName,
          characterIndex: this._characterIndex
        }
      }));

      this.executeMove(direction);

      window.dispatchEvent(new CustomEvent('Game_Player.moveByInput.afterMove', {
        detail: {
          map_id: $gameMap.mapId(),
          x: this.x,
          y: this.y,
          direction: direction,
          moveSpeed: this.realMoveSpeed(),
          moveFrequency: this.moveFrequency(),
          characterName: this._characterName,
          characterIndex: this._characterIndex
        }
      }));
    }
  }
};

Game_Player.prototype.refresh = function() {
  var actor = $gameParty.leader();
  var characterName = actor ? actor.characterName() : '';
  var characterIndex = actor ? actor.characterIndex() : 0;
  this.setImage(characterName, characterIndex);
  this._followers.refresh();

  window.dispatchEvent(new CustomEvent('Game_Player.refresh', {
    detail: {
      characterName: characterName,
      characterIndex: characterIndex
    }
  }));
};