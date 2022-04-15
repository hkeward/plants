<template>
  <div>
    <h1>Plants</h1>
    <ul id="plant_list">
      <li
        class="plant_item"
        v-for="plant in plant_list"
        v-bind:key="plant_list.indexOf(plant)"
      >
        <router-link :to="{ name: 'plant', params: { plantName: plant } }"
          ><font-awesome-icon
            style="margin-right: 5px; font-size: 15px"
            icon="leaf"
          />{{ plant.replace(/-/g, " ").replace(/_/g, " ") }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PlantList",
  data() {
    return {
      plant_list: [],
    };
  },
  mounted() {
    this.importAll(require.context("@/assets/plants", true, /^.*\.md$/));
  },
  methods: {
    importAll(markdown_files) {
      markdown_files
        .keys()
        .forEach((key) =>
          this.plant_list.push(key.replace(/.md/, "").replace(/.\//, ""))
        );
    },
  },
};
</script>

<style>
.plant_item {
  margin: 14px 0;
  font-size: 20px;
}
</style>
