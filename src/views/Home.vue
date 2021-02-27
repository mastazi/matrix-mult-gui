<template>
  <div class="home">
    <matrix-size></matrix-size>
    <input-matrix></input-matrix>
    <result></result>
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
};
</script>
<style lang="scss" scoped>
.home {
  max-width: 600px !important;
  margin: 0 auto;
}
</style>
