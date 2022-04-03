<template>
  <div>
    <Lobelia class="plant-markdown" />
  </div>
</template>

<script>
import Lobelia from "../assets/plants/Lobelia.md";

export default {
  name: "Plant",
  components: { Lobelia },
};
</script>

<style>
.plant-markdown {
  text-align: left;
}
</style>
