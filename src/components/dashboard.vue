<template>
  <div class="dashboard">
    <div class="jumbotron">
      <h1 class="display-4">Cash-Meal App</h1>
      <p class="lead">Manage Your Cash-Meal</p>
      <hr class="my-4">
    </div>
  </div>
</template>


<script>
export default {
  name: "dashboard",
  data() {
    return {
      msg: "Cash-Meal",
      age: 10
    };
  },
  methods: {
    addAge() {
      this.age += 2;
    }
  }
};
</script>

<style>
</style>
