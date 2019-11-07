<template>
  <div>
    <input type="text" @input="nameModified(value)" id="fullName" class="form-control" />
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    nameModified(fullName) {
      console.log("Entro en el metodo para el evento: " + fullName);
      this.$emit("input", fullName);
    }
  }
};
</script>

<style>
</style>