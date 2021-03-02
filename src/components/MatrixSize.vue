<template>
  <div class="matrix-size">
    <h1>Multiply&hellip;</h1>
    <b-form inline>
      <b-form-group>
        &hellip;a
        <b-form-input
          v-model="matrix_x"
          type="number"
          class="short-input"
          readonly
        ></b-form-input>
        by
        <b-form-input
          v-model="matrix_y"
          type="number"
          class="short-input"
        ></b-form-input>
        matrix
      </b-form-group>
    </b-form>
    <h1>by&hellip;</h1>
    <b-form inline class="mb-4">
      <b-form-group> </b-form-group>
      <b-form-group>
        &hellip;a
        <b-form-input
          v-model="matrix_z"
          type="number"
          class="short-input"
        ></b-form-input>
        by
        <b-form-input
          v-model="matrix_x"
          type="number"
          class="short-input"
          readonly
        ></b-form-input>
        matrix
      </b-form-group>
    </b-form>
    <h3>Change linked size (width of A, height of B):</h3>
    <b-form-input
      v-model="matrix_x"
      type="range"
      min="1"
      max="9"
      class="mt-2"
    ></b-form-input>
    <div class="mb-2">Value: {{ matrix_x }}</div>
  </div>
</template>
<script>
export default {
  name: "MatrixSize",
  watch: {
    // matrix dimensions should be integers not floats.
    // $nextTick is required in order to update the input field.
    matrix_x: function (newVal) {
      this.$nextTick(function () {
        this.matrix_x = parseInt(newVal);
        this.$emit("update-matrix-x", this.matrix_x);
      });
    },
    matrix_y: function (newVal) {
      this.$nextTick(function () {
        this.matrix_y = parseInt(newVal);
        this.$emit("update-matrix-y", this.matrix_y);
      });
    },
    matrix_z: function (newVal) {
      this.$nextTick(function () {
        this.matrix_z = parseInt(newVal);
        this.$emit("update-matrix-z", this.matrix_z);
      });
    },
  },
  data() {
    return {
      matrix_x: 3,
      matrix_y: 1,
      matrix_z: 2,
    };
  },
};
</script>