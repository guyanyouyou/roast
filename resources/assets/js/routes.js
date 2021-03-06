/*
 |-------------------------------------------------------------------------------
 | routes.js
 |-------------------------------------------------------------------------------
 | Contains all of the routes for the application
 */

/**
 * Imports Vue and VueRouter to extend with the routes.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from  './store.js'

/**
 * Extends Vue to use Vue Router
 */
Vue.use( VueRouter )

function requireAuth(to,from,next) {
    console.log('requireAuth');
    console.log(store.getters.getUserLoadStatus());
    function proceed(){
        console.log('proceed');
        //如果用户信息已经加载并且不为空则说明该用户已登录，可以继续访问路由，否则跳转到首页
        //这个功能雷系Laravel中的auth中间件
        if (store.getters.getUserLoadStatus() === 2){
            if (store.getters.getUser != ''){
                next();
            }else{
                next('/home');
            }
        }
    }

    if (store.getters.getUserLoadStatus() !== 2){
        //如果用户信息未加载完毕则先加载
        store.dispatch('loadUser');

        //监听用户信息加载状态，加载完成后调用proceed方法继续后续操作
        store.watch(store.getters.getUserLoadStatus,function(){
            if (store.getters.getUserLoadStatus() === 2){
                proceed();
            }
        });
    }else{
        //如果用户信息加载完毕直接调用proceed方法
        proceed();
    }
}

/**
 * Makes a new VueRouter that we will use to run all of the routes for the app.
 */
export default new VueRouter({
    routes: [
        {
            path:'/',
            redirect:{name:'home'},
            name:'layout',
            components:Vue.component('Home',require('./pages/Layout.vue')),
            children:[
                {
                    path: 'home',
                    name: 'home',
                    components: Vue.component( 'Home', require( './pages/Home.vue' ) )
                },
                {
                    path: '/cafes',
                    name: 'cafes',
                    components: Vue.component( 'Cafes', require( './pages/Cafes.vue' ) )
                },
                {
                    path: '/cafes/new',
                    name: 'newcafe',
                    components: Vue.component( 'NewCafe', require( './pages/NewCafe.vue' )),
                    beforeEnter:requireAuth
                },
                {
                    path: '/cafes/:id',
                    name: 'cafe',
                    components: Vue.component( 'Cafe', require( './pages/Cafe.vue' )),
                },
                {
                    path:'profile',
                    name:'profile',
                    components: Vue.component('Profile',require('./pages/Profile.vue' )),
                    beforeEnter:requireAuth
                }
            ]
        }

    ]
});
