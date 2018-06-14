import hooker from '../hooker';

/*
 * Available Events:
 * Game_Player.moveByInput.beforeMove
 * Game_Player.moveByInput.afterMove
 */

/**
 * moveByInput is called very frequently, cannot dispatch all the time.
 *
 * @TODO: Is this the right method for movement?
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


hooker('Game_Player', 'refresh', undefined, function() {
    window.dispatchEvent(new CustomEvent('Game_Player.refresh', {
        detail: {
            characterName: this._characterName,
            characterIndex: this._characterIndex
        }
    }));
});
