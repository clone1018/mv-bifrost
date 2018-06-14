/*
Game's function for adding actors
Game_Interpreter.prototype.command129 = function() {
    var actor = $gameActors.actor(this._params[0]);
    if (actor) {
        if (this._params[1] === 0) {  // Add
            if (this._params[2]) {   // Initialize
                $gameActors.actor(this._params[0]).setup(this._params[0]);
            }
            $gameParty.addActor(this._params[0]);
        } else {  // Remove
            $gameParty.removeActor(this._params[0]);
        }
    }
    return true;
};
 */
Game_Party.prototype.addActor = function(actorId) {
    if (!this._actors.contains(actorId)) {
        this._actors.push(actorId);
        $gamePlayer.refresh();
        $gameMap.requestRefresh();
    }
};

Game_Party.prototype.removeActor = function(actorId) {
    if (this._actors.contains(actorId)) {
        this._actors.splice(this._actors.indexOf(actorId), 1);
        $gamePlayer.refresh();
        $gameMap.requestRefresh();
    }
};