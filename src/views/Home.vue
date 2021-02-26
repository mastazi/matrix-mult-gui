<template>
  <div class="home">
    <input-matrix></input-matrix>
    <result></result>
  </div>
</template>

<script>
// @ is an alias to /src
import InputMatrix from "../components/InputMatrix.vue";
import Result from "../components/Result.vue";

export default {
  name: "Home",
  components: {
    InputMatrix,
    Result,
  },
};
</script>
