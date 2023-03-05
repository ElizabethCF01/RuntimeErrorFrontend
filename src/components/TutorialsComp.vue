<template>
  <div class="home container text-center pb-5 pt-5 mt-5">
    <form @submit.prevent="console">
      <div class="row ">
        <div class="form-group search d-flex center">
          <input type="text" v-model="search" class="form-control custom-focus" id="search" aria-describedby="button-addon2"
            placeholder="🔍Search ...">
        </div>
      </div>
    </form>
    <div class="mt-3" v-if="(tutos != null && tutos.length == 0)">No encontramos nungun resultado
      😓</div>
    <div v-else-if="tutos != null" class="d-flex justify-content-center mt-3 row">
      <div v-for="tuto in tutos" :key="tuto.id" class=" d-flex justify-content-center col-12">
        <RouterLink class="anone" :to="`tutorials/${tuto.id}`">
          <TutorialCard :tutorial="tuto" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import TutorialCard from './TutorialCard.vue'
export default {
  name: 'TutorialsComp',
  components: { TutorialCard },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    ...mapState({
      tutorials: state => state.tutorials
    }),
    tutos () {
      return this.tutorials.filter(q => {
        const title = q.title.toString().toLowerCase()
        const content = q.content.toString().toLowerCase()
        const searchTerm = this.search.toLowerCase()
        return (
          title.includes(searchTerm) || content.includes(searchTerm))
      })
    }
  },
  methods: {
    console () {
      console.log(this.search)
    }
  }
}
</script>
<style scoped>
.logo {
  margin-top: 1rem;
}
.logo img{
  max-width: 90px;
}
.search {
  margin: 0 auto;
  margin-top: 1rem;
  max-width: 25rem;
}
.anone {
  text-decoration: none;
  color: inherit;
}
.custom-focus{
  z-index: 1;

  border-color:#5D5D89;
  background: #ac8df957;
}
.custom-focus:focus{
  box-shadow: none;
  border-color: #5D5D89;
  background-color: #ebd7edb8;
}
</style>
