<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Fixed navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <router-link to="/" tag="li" class="nav-item" active-class="active" exact>
            <a class="nav-link">
              Home
            </a>
          </router-link>
          <router-link to="/users" tag="li" class="nav-item" active-class="active">
            <a class="nav-link">
              Users
            </a>
          </router-link>
          <router-link to="/add" tag="li" class="nav-item" active-class="active">
            <a class="nav-link">
             Add Users
            </a>
          </router-link>

        </ul>

      </div>
    </nav>

    <main role="main" class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
#app {
  margin-top: 60px;
}


</style>
