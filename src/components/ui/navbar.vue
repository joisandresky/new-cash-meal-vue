<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand" href="#">Cash-Meal App</router-link>
    <!-- <a class="navbar-brand" href="#">Cash-Meal App</a> -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>-->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-database"></i>&nbsp Master
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <!-- <a class="dropdown-item" href="#">
              <i class="fa fa-user"></i>&nbsp Employee
            </a> -->
            <!-- Router link kadang mengubah styling -->
            <!-- <router-link tag="li" to="/employee">
              <i class="fa fa-user"></i>&nbsp Employee
            </router-link> -->
            <router-link to="/employee" class="dropdown-item">
              <i class="fa fa-user"></i>&nbsp Employee
            </router-link>
            <router-link to="/job" class="dropdown-item" href="#">
              <i class="fa fa-briefcase"></i>&nbsp Job
            </router-link>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-cc-visa"></i>&nbsp Transactions
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link to="/cashin" class="dropdown-item" href="#">
              <i class="fa fa-arrow-circle-up"></i>&nbsp Cash In
            </router-link>
            <router-link to="/cashout" class="dropdown-item" href="#">
              <i class="fa fa-arrow-circle-down"></i>&nbsp Cash Out
            </router-link>
            <router-link to="/deposit" class="dropdown-item" href="#">
              <i class="fa fa-briefcase"></i>&nbsp Deposit
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
</style>
