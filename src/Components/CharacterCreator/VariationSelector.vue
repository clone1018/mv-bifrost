<template>
  <div>
    <h3>Variation</h3>
    <div class="variation-box">

    </div>
  </div>
</template>

<script>
module.exports = {
  props: ['layer'],
  data:  function () {
    return {
      
    }
  },
  computed: {
      background() {
          return require('./img/transparency.png');
      }
  }
}
</script>

<style scoped>
    .variation-box {
        background-image: url("./img/transparency.png");
        width: 100%;
        height: 100px; 
    }
</style>