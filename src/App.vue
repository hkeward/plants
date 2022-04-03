<template>
  <div id="app-view">
    <nav-bar />
    <router-view id="content" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  height: 100%;
  background: #696681;
}

#app-view {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  align-content: stretch;
}

#content {
  height: 100%;
  margin-left: 1em;
}

ul {
  list-style-type: none;
  padding-left: 0;
}
</style>
