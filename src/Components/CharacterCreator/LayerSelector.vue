<template>
    <div>
        <select v-model="layer" size="18">
            <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
            </option>
        </select>
    </div>
</template>

<script>
    var map = {
        // Actual Face
        face: "Face",
        frontHair: "FrontHair",
        rearHair: "RearHair",
        beard: "Beard",
        ears: "Ears",
        eyes: "Eyes",
        eyebrows: "Eyebrows",
        nose: "Nose",
        mouth: "Mouth",
        tattoo: "FacialMark",
        kemono: "BeastEars"

        // Character
    };

    module.exports = {
        watch: {
            layer(value) {
                this.$emit("onChangeLayer", value);
            }
        },
        data: function () {
            return {
                layer: "face",
                options: [
                    {text: "Face", value: "face"},
                    {text: "Front Hair", value: "frontHair"},
                    {text: "Rear Hair", value: "rearHair"},
                    {text: "Beard", value: "beard"},
                    {text: "Ears", value: "ears"},
                    {text: "Eyes", value: "eyes"},
                    {text: "Eyebrows", value: "eyebrows"},
                    {text: "Nose", value: "nose"},
                    {text: "Mouth", value: "mouth"},
                    {text: "Facial Mark", value: "tattoo"},
                    {text: "Beast Ears", value: "kemono"},
                    {text: "Tail", value: "tail"},
                    {text: "Wing", value: "wing"},
                    {text: "Clothing", value: "cloth"},
                    {text: "Cloak", value: "cloak"},
                    {text: "Accessory 1", value: "accessoryA"},
                    {text: "Accessory 2", value: "accessoryB"},
                    {text: "Glasses", value: "glasses"}
                ]
            };
        }
    };
</script>

<style scoped>
    select {
        width: 100%;
        overflow-y: auto;
    }
</style>