<template>
  <div class="plant_info">
    <router-link id="back" to="/plants"
      ><font-awesome-icon style="margin-right: 10px" icon="chevron-left" />Back
      to plant list</router-link
    >
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

.plant_info {
  display: flex;
  flex-direction: column;
}

#back {
  margin-top: 15px;
}
</style>
