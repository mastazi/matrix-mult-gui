<template>
  <div class="input-matrix text-center">
    <h1>Input Matrix A Values</h1>
    <b-form inline v-for="y in matrix_y" :key="'A' + y" class="matrix-form">
      <b-form-input
        v-for="x in matrix_x"
        :key="'A' + y + ':' + x"
        class="short-input"
        v-model="matrixA[y - 1][x - 1]"
      ></b-form-input>
    </b-form>
    <h1>Input Matrix B Values</h1>
    <b-form inline v-for="x in matrix_x" :key="'B' + x" class="matrix-form">
      <b-form-input
        v-for="z in matrix_z"
        :key="'B' + x + ':' + z"
        class="short-input"
        v-model="matrixB[x - 1][z - 1]"
      ></b-form-input>
    </b-form>
    <p class="mt-4">
      <b-button @click="multiply">Multiply!</b-button>
    </p>
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
      matrixA: [[1, 2, 3]],
      matrixB: [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
    };
  },
  props: {
    matrix_x: Number,
    matrix_y: Number,
    matrix_z: Number,
  },
  watch: {
    matrix_x: function () {
      this.initialiseA();
      this.initialiseB();
    },
    matrix_y: function () {
      this.initialiseA();
    },
    matrix_z: function () {
      this.initialiseB();
    },
  },
  methods: {
    initialiseA() {
      this.matrixA = new Array(this.matrix_y);
      for (var i = 0; i < this.matrixA.length; i++) {
        this.matrixA[i] = new Array(this.matrix_x).fill(1);
      }
    },
    initialiseB() {
      this.matrixB = new Array(this.matrix_x);
      for (var i = 0; i < this.matrixB.length; i++) {
        this.matrixB[i] = new Array(this.matrix_z).fill(1);
      }
    },
    multiply() {
      this.$parent.multiplyMatrices(this.matrixA, this.matrixB);
    },
  },
};
</script>
<style lang="scss" scoped>
.matrix-form {
  margin: 0 auto;
}
</style>