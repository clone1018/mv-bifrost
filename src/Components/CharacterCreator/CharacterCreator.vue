<template>
  <div>
    <LayerSelector />
  </div>
</template>

<script>
import LayerSelector from './LayerSelector.vue'

module.exports = {
  data: function () {
    return {
      greeting: 'Hello'
    }
  },
  components: {
		LayerSelector
	}
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>