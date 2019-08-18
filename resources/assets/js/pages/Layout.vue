<style>

</style>

<template>
    <div id="app-layout">
        <navigation></navigation>
        <router-view></router-view>
        <login-model></login-model>
    </div>
</template>

<script>
    import Navigation from '../components/global/Navigation.vue';
    import LoginModel from "../components/global/LoginModel.vue";
    export default {
        components:{
            Navigation,
            LoginModel
        },
        created() {
            this.$store.dispatch('loadCafes');
            this.$store.dispatch('loadUser');
            this.$store.dispatch('loadBrewMethods');
        }
    }
</script>
