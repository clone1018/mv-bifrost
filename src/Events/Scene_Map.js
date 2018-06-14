import hooker from '../hooker';

hooker('Scene_Map', 'create', undefined, function () {
    window.dispatchEvent(new CustomEvent('Scene_Map.create', {
        detail: {
            map_id: $gameMap.mapId()
        }
    }));
});


hooker('Scene_Map', 'stop', function () {
    window.dispatchEvent(new CustomEvent('Scene_Map.create', {
        detail: {
            map_id: $gameMap.mapId()
        }
    }));
}, undefined);
