<template>
  <div class="input-matrix">
    <h1>Input Matrix A</h1>
    <b-form inline v-for="n in matrix_y" :key="'A' + n" class="matrix-form">
      <b-form-input
        v-for="m in matrix_x"
        :key="'A' + n + ':' + m"
        class="short-input"
        v-model="matrixA[m - 1][n - 1]"
      ></b-form-input>
    </b-form>
    <h1>Input Matrix B</h1>
    <b-form inline v-for="n in matrix_x" :key="'B' + n" class="matrix-form">
      <b-form-input
        v-for="m in matrix_y"
        :key="'B' + n + ':' + m"
        class="short-input"
        v-model="matrixB[m - 1][n - 1]"
      ></b-form-input>
    </b-form>
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
      matrixA: [
        [1, 1, 1],
        [1, 1, 1],
      ],
      matrixB: [
        [1, 1],
        [1, 1],
        [1, 1],
      ],
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
    matrix_y: function () {
      this.initialiseA();
      this.initialiseB();
    },
  },
  methods: {
    initialiseA() {
      this.matrixA = new Array(this.matrix_x);
      for (var i = 0; i < this.matrixA.length; i++) {
        this.matrixA[i] = new Array(this.matrix_y).fill(1);
      }
    },
    initialiseB() {
      this.matrixB = new Array(this.matrix_y);
      for (var i = 0; i < this.matrixB.length; i++) {
        this.matrixB[i] = new Array(this.matrix_x).fill(1);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.short-input {
  width: 4rem;
}
.matrix-form {
  margin: 0 auto;
}
</style>