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
@import (css)
  url("https://fonts.googleapis.com/css2?family=Send+Flowers&display=swap");
@import (css)
  url("https://fonts.googleapis.com/css2?family=Send+Flowers&family=Share+Tech+Mono&display=swap");

html,
body {
  height: 100%;
  margin: 0px;
}

#app {
  font-family: "Share Tech Mono", monospace;
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
  margin-left: 1em;
}

h1,
h2,
h3,
h4,
h5,
ul {
  font-family: "Send Flowers", cursive;
}

h1 {
  font-size: 32px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
