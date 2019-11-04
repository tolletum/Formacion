<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <p>Server id: {{ serverDetail.id }}</p>
        <p>server status: {{ serverDetail.status }} </p>
        <button @click="reset()">Reset status</button>
    </div>

</template>

<script>
    import { bus } from '../../main.js';

    export default {
        data: function() {
            return {
                serverDetail: null
            }
        },
        created() {
            bus.$on('settedServer', (server) => {
                console.log(`Estamos en el $on: server.id: ${server.id} - server.status: ${server.status}`);
                this.serverDetail = server;
            });
        },
        methods: {
            reset: function() {
                this.serverDetail.status = 'Normal';
            }
        }
    }
</script>

<style>

</style>
