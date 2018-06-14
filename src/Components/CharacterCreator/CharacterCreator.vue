<template>
    <div>
        <div class="mw9 center ph3-ns">
            <div class="fl w-20 pa2" style="background-color: red">
                <LayerSelector @onChangeLayer="changeLayer"/>
            </div>
            <div class="fl w-80 pa2" style="background-color: blue">

                <div class="mw9 center ph3-ns">
                    <div class="fl w-50 pa2">
                        <VariationSelector :layer="layer"/>
                    </div>
                    <div class="fl w-50 pa2">
                        <ColorSelector :layer="layer"/>
                    </div>
                </div>

                <Preview/>
            </div>
        </div>

    </div>
</template>

<script>
    import ColorSelector from './ColorSelector.vue';
    import LayerSelector from './LayerSelector.vue';
    import VariationSelector from './VariationSelector.vue';
    import Preview from './Preview.vue';

    module.exports = {
        methods: {
            changeLayer(layer) {
                console.log("Change layer: " + layer);
            }
        },
        data: function () {
            return {
                layer: 'face',
                greeting: 'Hello'
            }
        },
        components: {
            ColorSelector,
            LayerSelector,
            VariationSelector,
            Preview
        }
    }
</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>