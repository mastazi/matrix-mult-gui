<template>
  <div class="home">
    <matrix-size
      @update-matrix-x="updateMatrixX"
      @update-matrix-y="updateMatrixY"
      @update-matrix-z="updateMatrixZ"
      :key="'ms_' + componentKey"
    ></matrix-size>
    <input-matrix
      :matrix_x="matrix_x"
      :matrix_y="matrix_y"
      :matrix_z="matrix_z"
      :key="'im_' + componentKey"
    ></input-matrix>
    <result
      v-if="result != null"
      :result="result"
      :key="'r_' + componentKey"
    ></result>
    <p class="mt-4">
      <b-button @click="resetAllForms">New Multiplication</b-button>
    </p>
  </div>
</template>

<script>
import InputMatrix from "@/components/InputMatrix.vue";
import Result from "@/components/Result.vue";
import MatrixSize from "../components/MatrixSize.vue";
import { uuid } from "vue-uuid";
import { multiply } from "@/api";

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
      matrix_y: 1,
      matrix_z: 2,
      componentKey: uuid.v4(),
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
    updateMatrixZ(newVal) {
      this.matrix_z = newVal;
    },
    resetAllForms() {
      this.componentKey = this.$uuid.v4();
      this.matrix_x = 3;
      this.matrix_y = 2;
    },
    async multiplyMatrices(matrixA, matrixB) {
      let params = {
        matrix_a: matrixA,
        matrix_b: matrixB,
      };
      let response = await multiply(params);
      let { data, status, message } = response.data;
      if (status == "success") {
        this.result = data;
      } else if (status == "error") {
        // could be `message?? "unknown error"` if ES11 supported.
        let output = message || "unknown error";
        this.$bvModal.msgBoxOk(output);
      }
      let result = await multiply(params);
      console.log(result);
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
