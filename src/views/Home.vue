<template>
  <div class="home">
    <matrix-size
      @update-matrix-x="updateMatrixX"
      @update-matrix-y="updateMatrixY"
      :key="'ms_' + componentKey"
    ></matrix-size>
    <input-matrix
      :matrix_x="matrix_x"
      :matrix_y="matrix_y"
      :key="'im_' + componentKey"
    ></input-matrix>
    <result :key="'r_' + componentKey"></result>
    <p><b-button @click="resetAllForms">New Multiplication</b-button></p>
  </div>
</template>

<script>
import InputMatrix from "@/components/InputMatrix.vue";
import Result from "@/components/Result.vue";
import MatrixSize from "../components/MatrixSize.vue";
import { uuid } from "vue-uuid";
import multiply from "@/api";

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
      componentKey: uuid.v1(),
      result: null,
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
      this.componentKey = this.$uuid.v1();
      this.matrix_x = 3;
      this.matrix_y = 2;
    },
    async multiplyMatrices(matrixA, matrixB) {
      let params = {
        matrix_a: matrixA,
        matrix_b: matrixB,
      };
      let { data, status } = await multiply(params);
      if (status == "success") {
        this.result = data;
      }
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
