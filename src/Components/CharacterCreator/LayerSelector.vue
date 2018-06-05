<template>
  <div>
    <select v-model="selected" size="18">
    <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
    </option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
module.exports = {
  data:  function () {
    return {
        selected: 'A',
        options: [
        { text: 'Face', value: 'face' },
        { text: 'Front Hair', value: 'frontHair' },
        { text: 'Rear Hair', value: 'rearHair' },
        { text: 'Beard', value: 'beard' },
        { text: 'Ears', value: 'ears' },
        { text: 'Eyes', value: 'eyes' },
        { text: 'Eyebrows', value: 'eyebrows' },
        { text: 'Nose', value: 'nose' },
        { text: 'Mouth', value: 'mouth' },
        { text: 'Facial Mark', value: 'tattoo' },
        { text: 'Beast Ears', value: 'kemono' },
        { text: 'Tail', value: 'tail' },
        { text: 'Wing', value: 'wing' },
        { text: 'Clothing', value: 'cloth' },
        { text: 'Cloak', value: 'cloak' },
        { text: 'Accessory 1', value: 'accessoryA' },
        { text: 'Accessory 2', value: 'accessoryB' },
        { text: 'Glasses', value: 'glasses' }
        ]
    }
  },
}
</script>

<style scoped>

</style>