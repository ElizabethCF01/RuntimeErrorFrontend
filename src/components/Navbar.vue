<template>
  <div >
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" :class="path.includes('tutorials') || collapsed ? 'bg-dark':'mibg'" >
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
                  <a class="nav-link" :class="{'active': route == 'home'}" href="#">Home
                    <span class="visually-hidden">(current)</span>
                  </a>
              </router-link>
              </li>
              <li class="nav-item">
                <router-link class="anone" to="/questions">
                  <a class="nav-link" :class="{ 'active': route == 'questions'}" href="#">Questions</a></router-link>
              </li>
              <li class="nav-item">
                <router-link class="anone" to="/tutorials">
                  <a class="nav-link" :class="{ 'active': route == 'tutorials'}" href="#">Tutorials</a></router-link>
              </li>
              <li class="nav-item">
                <router-link class="anone" to="/about">
                  <a class="nav-link" :class="{ 'active': route == 'about'}" href="#">About</a>
                </router-link>
              </li>
            </ul>
            <div class="d-flex dropdown link-login">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i class="bi bi-person"></i></a>
              <div class="dropdown-menu dropdown-menu-dark bg-dark" style="">
                <template v-if="!isLoggedIn">
                  <router-link class="anone" to="/signin">
                  <a class="dropdown-item" href="#">Sign in</a>
                </router-link>
                <router-link class="anone" to="/signup">
                  <a class="dropdown-item" href="#">Sign up</a>
                </router-link>
                </template>
                <div v-else @click="logOut">
                  <a  class="dropdown-item" href="#">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  </div>
</template>
<script>
/* eslint-disable */
import { mapState } from "vuex";

export default {
  name: 'NavbarVue',
  data () {
    return {
      p: this.$route.name
    }
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.isLoggedIn,
    }),
    path () {
      return this.$route.path
    },
    route () {
      return this.$route.name
    },
    collapsed(){
      return false
    }
  },
  methods: {
      logOut(){
        this.$store.dispatch("logoutUser");
        this.$router.push('/')
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
.link-login{
  color: rgba(255, 255, 255, 0.678);
  font-size: 1.3rem;
}
.link-login:hover{
  color: white !important;
}
.bg-dark{
  background-color: #2f2349 !important;
  border-color: transparent !important;
}

</style>
