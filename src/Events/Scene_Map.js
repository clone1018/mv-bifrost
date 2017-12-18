Scene_Map.prototype.updateTransferPlayer = function() {
  if ($gamePlayer.isTransferring()) {
    SceneManager.goto(Scene_Map);


  }
};

Scene_Map.prototype.create = function() {
  Scene_Base.prototype.create.call(this);
  this._transfer = $gamePlayer.isTransferring();
  var mapId = this._transfer ? $gamePlayer.newMapId() : $gameMap.mapId();
  DataManager.loadMapData(mapId);

  window.dispatchEvent(new CustomEvent('Scene_Map.create', {
    detail: {
      map_id: mapId
    }
  }));
};

Scene_Map.prototype.stop = function() {
  window.dispatchEvent(new CustomEvent('Scene_Map.stop', {
    detail: {
      map_id: $gameMap.mapId()
    }
  }));

  Scene_Base.prototype.stop.call(this);
  $gamePlayer.straighten();
  this._mapNameWindow.close();
  if (this.needsSlowFadeOut()) {
    this.startFadeOut(this.slowFadeSpeed(), false);
  } else if (SceneManager.isNextScene(Scene_Map)) {
    this.fadeOutForTransfer();
  } else if (SceneManager.isNextScene(Scene_Battle)) {
    this.launchBattle();
  }
};