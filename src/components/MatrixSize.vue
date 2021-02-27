<template>
  <div class="matrix-size">
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
  </div>
</template>
<script>
export default {
  name: "MatrixSize",
  watch: {
    // matrix dimensions should be integers not floats.
    matrix_x: function (newVal) {
      this.$nextTick(function () {
        this.matrix_x = parseInt(newVal);
      });
    },
    matrix_y: function (newVal) {
      this.$nextTick(function () {
        this.matrix_x = parseInt(newVal);
      });
    },
  },
  data() {
    return {
      matrix_x: 3,
      matrix_y: 2,
    };
  },
};
</script>