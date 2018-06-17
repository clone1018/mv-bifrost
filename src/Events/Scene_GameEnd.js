

Scene_GameEnd.prototype.commandToTitle = function() {
  this.fadeOutAll();
  // instead log player out
  SceneManager.goto(Scene_Title);
};

Scene_Gameover.prototype.gotoTitle = function() {
  SceneManager.goto(Scene_Title);
};
