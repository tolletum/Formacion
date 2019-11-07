<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="frameColorName = 'appBlue';colorName='Blue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="frameColorName = 'appGreen';colorName='Green'" class="btn btn-success">Load Green Template</button>
                <button @click="frameColorName = 'appRed';colorName='Red'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="frameColorName">
                    <h2>This is {{ colorName }} frame!</h2>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: () => ({
            colorName: 'Blue',
            frameColorName: 'appBlue',
        }),
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
