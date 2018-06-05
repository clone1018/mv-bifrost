<template>
	<div id="interface">
		<h1>Testing!</h1>
		<CharacterCreator/>
	</div>
</template>

<script>
import CharacterCreator from './CharacterCreator/CharacterCreator.vue'

export default {
	components: {
		CharacterCreator
	}
}
</script>

<style>

*, *::before, *::after {
	box-sizing: border-box;
}

#interface {
	background-color: yellow;
	position: absolute;
	z-index: 100;
    margin: auto;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 1280px;
    height: 720px;
}

h1 {
	text-align: center;
}
</style>