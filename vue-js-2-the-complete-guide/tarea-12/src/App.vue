<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-myvon:click="setText" style="cursor:pointer">Directives Exercise</h1>
                <p>{{ text }} </p>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div style="width: 100px;height: 100px;background-color: lightgreen"
                    v-myvon:mouseenter="mouseEnter"
                    v-myvon:mouseleave="mouseLeave"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'myvon': {
                bind(el, binding, vnode) {
                    // var ev = new Event(binding.value, {"bubbles":true, "cancelable":false});
                    // console.log(binding.arg, binding.value)
                    el.addEventListener(binding.arg, binding.value);
                }
            }
        },
        data() {
            return {
                text: '',
            }
        },

        methods: {
            setText() {
                this.text = 'Ha funcionado!';
            },
            mouseEnter() {
                console.log('Mouse enter');
            },
            mouseLeave() {
                console.log('Mouse leave');
            }   
        },

    }
</script>

<style>
</style>
