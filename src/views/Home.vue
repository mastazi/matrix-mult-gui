<template>
  <div class="home">
    <h1>Multiply&hellip;</h1>
    <b-form inline>
      <b-form-group>
        &hellip;a
        <b-form-input v-model="matrix_x" type="number" required></b-form-input>
        by
        <b-form-input v-model="matrix_y" type="number" required></b-form-input>
        matrix
      </b-form-group>
    </b-form>
    <h1>by&hellip;</h1>
    <b-form inline class="mb-4">
      <b-form-group> </b-form-group>
      <b-form-group>
        &hellip;a
        <b-form-input v-model="matrix_y" type="number" readonly></b-form-input>
        by
        <b-form-input v-model="matrix_x" type="number" readonly></b-form-input>
        matrix
      </b-form-group>
    </b-form>
    <input-matrix></input-matrix>
    <result></result>
  </div>
</template>

<script>
import InputMatrix from "@/components/InputMatrix.vue";
import Result from "@/components/Result.vue";

export default {
  name: "Home",
  components: {
    InputMatrix,
    Result,
  },
  data() {
    return {
      matrix_x: 3,
      matrix_y: 2,
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  max-width: 600px !important;
  margin: 0 auto;
}
</style>
