<template>
  <div id="app">
    <Header></Header>
    <div class="main-content">
      <router-view/>
    </div>

  </div>
</template>

<script>
import Header from "@/components/Header/";
export default {
  name: "App",
  components: { Header }
};
</script>

<style>
#app {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, \\5fae\8f6f\96c5\9ed1, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.main-content {
  height: calc(100% - 70px);
  background: #e8ebed;
  margin-top: 10px;
  overflow: auto;
}
html,
body {
  margin: 0;
  height: 100%;
}
a {
  text-decoration: none;
  color: #666666;
}
</style>
