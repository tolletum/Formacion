<template>
  <div>
    <h1>Trade or view your portfolio</h1>
    <h6>Yo may save & load your data</h6>
    <h6>Click on 'end Day' to begin a New Day!</h6>
    <hr />
    <p>Your Funds: {{ funds | currency }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>