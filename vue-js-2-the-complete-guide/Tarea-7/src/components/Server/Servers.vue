<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    style="cursor: pointer"
                    v-for="server in servers"
                    @click="setServer(server)">
                Server #{{ server.id }}, status {{ server.status}}
            </li>
        </ul>
    </div>
</template>

<script>
    import { bus } from '../../main.js';

    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'Normal'},
                    { id: 2, status: 'Critical'},
                    { id: 3, status: 'Unknown'},
                    { id: 4, status: 'Normal'},
                ]
            }
        },
        methods: {
            setServer: function(server) {
                console.log(`Servidor numero: ${server.id} - Status: ${server.status}`)
                bus.$emit('settedServer', server);
            }
        }
    }
</script>

<style>

</style>
