<template>
	<div id="interface">
		<router-view></router-view>
		<p>
    		<!-- use router-link component for navigation. -->
			<!-- specify the link by passing the `to` prop. -->
			<!-- `<router-link>` will be rendered as an `<a>` tag by default -->
			<router-link to="/character-creator">Character Creator</router-link>
			<router-link to="/login">Login</router-link>
			<router-link to="/game">Game</router-link>
		</p>
	</div>
</template>

<script>

export default {
}
</script>

<style>
@import '../../node_modules/tachyons/css/tachyons.css';

*, *::before, *::after {
	box-sizing: border-box;
}

#interface {
	border: 5px solid pink;
	position: absolute;
	z-index: 100;
    margin: auto;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
	width: 1290px;
    height: 730px;
}

h1 {
	text-align: center;
}
</style>