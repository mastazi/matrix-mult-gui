<template>
  <div class="input-matrix">
    <h1>Input Matrix A</h1>
    <b-form inline v-for="n in matrix_y" :key="n" class="matrix-form">
      <b-form-input
        v-for="m in matrix_x"
        :key="m"
        class="short-input"
      ></b-form-input>
    </b-form>
    <h1>Input Matrix B</h1>
    <b-form inline v-for="n in matrix_x" :key="n" class="matrix-form">
      <b-form-input
        v-for="m in matrix_y"
        :key="m"
        class="short-input"
      ></b-form-input>
    </b-form>
    X: {{ matrix_x }} Y: {{ matrix_y }}
  </div>
</template>
<script>
export default {
  name: "InputMatrix",
  created() {
    this.initialiseA();
    this.initialiseB();
  },
  data() {
    return {
      matrixA: [],
      matrixB: [],
    };
  },
  props: {
    matrix_x: Number,
    matrix_y: Number,
  },
  watch: {
    matrix_x: function () {
      this.initialiseA();
      this.initialiseB();
    },
  },
  methods: {
    initialiseA() {
      this.matrixA = new Array(this.matrix_x);
      for (var i = 0; i < this.matrixA.length; i++) {
        this.matrixA[i] = new Array(this.matrix_y);
      }
    },
    initialiseB() {
      this.matrixB = new Array(this.matrix_y);
      for (var i = 0; i < this.matrixB.length; i++) {
        this.matrixB[i] = new Array(this.matrix_x);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.short-input {
  width: 2rem;
}
.matrix-form {
  margin: 0 auto;
}
</style>