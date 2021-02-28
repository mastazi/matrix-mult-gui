<template>
  <div class="home">
    <matrix-size
      @update-matrix-x="updateMatrixX"
      @update-matrix-y="updateMatrixY"
      :key="componentKey"
    ></matrix-size>
    <input-matrix
      :matrix_x="matrix_x"
      :matrix_y="matrix_y"
      :key="componentKey"
    ></input-matrix>
    <result :key="componentKey"></result>
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
      componentKey: 0,
    };
  },
  methods: {
    updateMatrixX(newVal) {
      this.matrix_x = newVal;
    },
    updateMatrixY(newVal) {
      this.matrix_y = newVal;
    },
    resetAllForms() {
      this.componentKey += 1;
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
