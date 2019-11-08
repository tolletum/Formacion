<template>
  <div>
    <!-- <input type="text" @blur="nameModified($event.target.value)" id="fullName" class="form-control" /> -->
    <div class="form-group">
      <label for="First Name">First Name</label>
      <input type="text" id="firstName" class="form-control" :value="firstName" @input="changeValue(true, $event)"/>
      </div>
      <div class="form-group">
        <label for="Last Name">Last Name</label>
        <input type="text" id="lastName" class="form-control" :value="lastName" @input="changeValue(false, $event)" />
      </div>

  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    changeValue(isFirst, event) {
      let name = '';
      if(isFirst) {
        name = event.target.value + ' ' + this.lastName;
      } else {
        name = this.firstName + ' ' + event.target.value;
      }
      // this.value = name;
      this.$emit('input', name);
    }
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  }
};
</script>

<style>
</style>