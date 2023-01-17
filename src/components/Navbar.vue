<template>
  <div >
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-primary mibg">
        <div class="container">
          <router-link class="anone" to="/">
            <img class="logo" src="../assets/logo.png"/>
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <router-link class="anone" to="/">
                  <a class="nav-link" :class="{'active': path == 'home'}" href="#">Home
                    <span class="visually-hidden">(current)</span>
                  </a>
              </router-link>
              </li>
              <li class="nav-item">
                <router-link class="anone" to="/questions">
                  <a class="nav-link" :class="{ 'active': path == 'questions'}" href="#">Questions</a></router-link>
              </li>
              <li class="nav-item">
                <router-link class="anone" to="/tutorials">
                  <a class="nav-link" :class="{ 'active': path == 'tutorials'}" href="#">Tutorials</a></router-link>
              </li>
              <li class="nav-item">
                <router-link class="anone" to="/about">
                  <a class="nav-link" :class="{ 'active': path == 'about'}" href="#">About</a></router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </div>
</template>
<script>
export default {
  name: 'NavbarVue',
  data () {
    return {
      p: this.$route.name
    }
  },
  computed: {
    path () {
      return this.$route.name
    }
  }
}

</script>
<style scoped>
.mar{
  margin-bottom: 70px;
}
.anone {
  text-decoration: none;
  color: inherit;
}
.active{
  color: white !important;
}
.logo{
  max-height: 45px;
}
.mibg{
  background-color: transparent!important;
  border-color: transparent !important;
}
</style>
