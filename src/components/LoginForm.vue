<template>
  <div class="d-flex flex-column">
    <div v-if="showAlert" class="alert alert-dismissible alert-danger">
    <button
      type="button"
      @click="showAlert = false"
      class="btn-close"
    ></button>
    <strong>Oh snap!</strong><a href="#" @click="showAlert = false" class="alert-link">Change a few things up</a> and try submitting again.
</div>
<div v-else-if="showSuccess" class="alert alert-info">
  <strong>🎉</strong> {{ mess }}<router-link class="anone" to="/signin"></router-link><a @click="go" href="#" class="alert-link">{{ goTo }}</a>
</div>
  <div v-else class="card border-secondary mb-3 text-start">
    <div class="card-body row justify-content-between">
      <div class="col-12">
        <legend>{{ isLogin ? "Sign In" : "Sign Up" }}</legend>

        <h6 v-if="isLogin" class="card-subtitle mb-2 text-muted">
          You don't have an account?
          <router-link class="anone" to="/signup">
            <a class="card-link" href="#">Sign up</a>
          </router-link>
        </h6>
        <h6 v-else class="card-subtitle mb-2 text-muted">
          You already have an account?
          <router-link class="anone" to="/signin">
            <a class="card-link" href="#">Sign in</a>
          </router-link>
        </h6>
        <form @submit.prevent="handleSubmit">
          <fieldset>
            <div v-if="!isLogin" class="form-group mt-3">
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="user.name"
                placeholder="Enter your full name"
                :required="!isLogin"
              />
            </div>
            <div class="form-group mt-3">
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="user.email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
              <small id="emailHelp" class="form-text text-muted"></small>
            </div>
            <div class="form-group mt-3">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                v-model="user.password"
                required
              />
            </div>
            <div class="form-group text-center mt-3">
              <button type="submit" class="px-5 btn btn-primary">Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import { mapState } from "vuex";

export default {
  name: "LoginForm",

  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
      route: this.$route.name,
      showAlert: false,
      showSuccess: false,
      mess: "",
      goTo: ""
    };
  },
  computed: {
    ...mapState({
      loggedUser: (state) => state.user,
      messg: (state) => state.message,
      loading: (state) => state.loading,
    }),
    isLogin() {
      return this.$route.name === "signin";
    },
  },
  methods: {
    go(){
      if(this.isLogin){
        this.$router.push("/");
      }else{
        this.$router.push("/signin");
      }
      this.showSuccess = false
    },
    async handleSubmit() {

      this. showAlert= false
      this.showSuccess = false

      this.mess = ''
      this.goTo = ''

      let data = {
        email: this.user.email,
        password: this.user.password,
      };
      if (!this.isLogin) {
        data = {
          ...data,
          name: this.user.name,
        };
        await this.$store.dispatch("registerUser", data);
        this.mess = " You sing up successfully!"
        this.goTo = ' Now you can sign in '
      } else {
        await this.$store.dispatch("loginUser", data);
        this.mess = " You are successfully logged in "
        this.goTo = ' Go to homepage'
        console.log(this.loggedUser)

      }
      if (this.messg.includes("Error")) {
        this.showAlert = true;
        this.mess = ''
        this.goTo = ''
      } else {
        this.showSuccess = true
      }

      console.log(data);
    },
  },
};
</script>
<style scoped>
.search {
  margin: 0 auto;
  margin-top: 2rem;
  max-width: 25rem;
}
.card {
  border-color: rgba(198, 154, 248, 0.548) !important;
  background-color: #feedff3b;
  color: white;
}
.card-subtitle {
  color: rgba(255, 255, 255, 0.767) !important;
  font-weight: 500;
}
.btn-primary {
  border: 0 !important;
  transition: 0.5s;
  background-size: 200% auto;
  background-image: linear-gradient(to right, #da22ff 0%, #9733ee 51%, #da22ff 100%);
}
.card-link {
  color: #d9d5fa;
  font-weight: bold;
}
.btn-primary:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
  border: 0 !important;
}
.alert-danger{
  border-color: rgb(202, 6, 6) !important;
  background-color: #c9101059;
  color: white;
}
.alert-info{
  border-color: rgb(91, 6, 202) !important;
  background-color: #4110c959;
}
</style>
