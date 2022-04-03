<template>
  <div>
    <component :is="plant_data" class="plant-markdown"></component>
  </div>
</template>

<script>
// import Lobelia from `../assets/plants/${this.plant_name}.md`;
import { defineAsyncComponent } from "vue";

export default {
  name: "Plant",
  props: {
    plantName: {
      type: String,
      required: true,
    },
  },
  computed: {
    plant_data() {
      console.log(this.plantName);
      return defineAsyncComponent(() =>
        import(`@/assets/plants/${this.plantName}.md`)
      );
    },
  },
};
</script>

<style>
.plant-markdown {
  text-align: left;
}
</style>
