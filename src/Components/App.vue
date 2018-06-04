<template>
	<div id="app">
		<h1>Testing!</h1>
		<CharacterCreator/>
	</div>
</template>

<script>
import CharacterCreator from './CharacterCreator.vue'

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

#app {
	background-color: yellow;
    position: relative;
    z-index: 100;
    height: 200px;
    width: 200px;
}

h1 {
	text-align: center;
}
</style>