<template>
  <div>
    <input type="text" @blur="nameModified($event.target.value)" id="fullName" class="form-control" />
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    nameModified(fullName) {
      this.$emit("input", fullName);
    }
  }
};
</script>

<style>
</style>