<template>
  <div class="home">
    <matrix-size
      @update-matrix-x="updateMatrixX"
      @update-matrix-y="updateMatrixY"
    ></matrix-size>
    <input-matrix :matrix_x="matrix_x" :matrix_y="matrix_y"></input-matrix>
    <result></result>
    matrix x: {{ matrix_x }} matrix_y: {{ matrix_y }}
  </div>
</template>

<script>
import InputMatrix from "@/components/InputMatrix.vue";
import Result from "@/components/Result.vue";
import MatrixSize from "../components/MatrixSize.vue";

export default {
  name: "Home",
  components: {
    InputMatrix,
    Result,
    MatrixSize,
  },
  data() {
    return {
      matrix_x: 3,
      matrix_y: 2,
    };
  },
  methods: {
    updateMatrixX(newVal) {
      this.matrix_x = newVal;
    },
    updateMatrixY(newVal) {
      this.matrix_y = newVal;
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  max-width: 600px !important;
  margin: 0 auto;
}
</style>
