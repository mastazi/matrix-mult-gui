<template>
  <div class="result-matrix">
    <h1>Result</h1>
    <p v-for="n in result" :key="n[0]">
      <span class="result-entry" v-for="m in n" :key="n[m]">{{
        m | excel
      }}</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "Result",
  props: {
    result: Array,
  },
  filters: {
    excel: function (value) {
      /*
       * Note: Excel format is not a base-26 numbering system.
       * Think about what happens when you go from Z to AA:
       * if A was 0, then you're going from 9 to 00? doesn't make sense;
       * if A was 1, then you're going from 9 to 11? again doesn't work.
       * It's not a numbering system like HEX, but completely different logic.
       */
      let remainder = value;
      let output = "";
      while (remainder > 0) {
        // modulo of 26 i.e. the letters in the alphabet
        let mod = (remainder - 1) % 26;
        // new output using ASCII code
        output = String.fromCharCode(65 + mod).toString() + output;
        remainder = parseInt((remainder - mod) / 26);
      }
      return output;
    },
  },
};
</script>
<style lang="scss" scoped>
.result-entry {
  display: inline-block;
  padding: 0 1rem;
  border: 1px solid #aaa;
  border-radius: 3px;
}
</style>