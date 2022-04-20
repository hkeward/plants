<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/plants">Plants</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
#nav {
  background: #dafc54;
  height: 100%;
  border-radius: 0 10px 10px 0;
}

li {
  margin: 10px 10px 0 10px;
  color: #383043;
}

a.router-link-exact-active {
  font-weight: bold;
  color: #290d4e;
}

ul {
  list-style-type: none;
  padding-left: 0;
}
</style>
