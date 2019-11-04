<template>
    <div class="container">
        <v-header></v-header>
        <hr>
        <div class="row">
            <v-server-group></v-server-group>
            <v-server-detail></v-server-detail>
        </div>
        <hr>
        <v-footer></v-footer>
    </div>
</template>

<script>
import ServerGroup from './ServerGroup.vue';
import Header from './Header.vue';
import ServerDetail from './ServerDetail.vue';
import Footer from './Footer.vue';

export default {
    components: {
        'v-server-group': ServerGroup,
        'v-header': Header,
        'v-server-detail': ServerDetail,
        'v-footer': Footer,
    }
}
</script>
