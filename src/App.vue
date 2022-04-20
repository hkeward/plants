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
  url("https://fonts.googleapis.com/css2?family=Send+Flowers&family=Share+Tech+Mono&family=Indie+Flower&family=Permanent+Marker&display=swap");

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
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  align-content: stretch;
}

#content {
  margin-left: 1em;
  margin-right: 1em;
  width: 100%;
  overflow-y: scroll;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Permanent Marker", cursive;
}

h1 {
  font-size: 32px;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
