<template>
    <div class="rpgui-content">
        <div id="interface" class="rpgui-container framed">
            <router-view></router-view>
            <!--<p>-->
                <!--<router-link tag="button" class="rpgui-button" to="/character-creator">Character Creator</router-link>-->
                <!--<router-link tag="button" class="rpgui-button" to="/login">Login</router-link>-->
                <!--<router-link tag="button" class="rpgui-button" to="/game">Game</router-link>-->
            <!--</p>-->
        </div>
    </div>
</template>

<script>

  export default {}
</script>

<style>
    @import '../../node_modules/tachyons/css/tachyons.css';
    @import "~rpgui/rpgui.css";

    *, *::before, *::after {
        box-sizing: border-box;
    }

    #interface {
        position: absolute;
        z-index: 100;
        margin: auto;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        width: 1304px;
        height: 744px;
    }

    h1 {
        text-align: center;
    }
</style>