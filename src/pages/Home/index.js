import Home from './src/Home.vue';
Home.install = function (Vue) {
    Vue.component(Home.name, Home);
};
export default Home;