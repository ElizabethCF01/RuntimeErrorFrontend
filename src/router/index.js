import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestionsView from '../views/QuestionsView.vue'
import QuestionView from '../views/QuestionView.vue'
import TutorialsView from '../views/TutorialsView.vue'
import TutorialPQView from '../views/TutorialPQ.vue'
import TutorialBSView from '../views/TutorialBS.vue'
import TutorialGph from '../views/TutorialGph.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/questions',
    name: 'questions',
    component: QuestionsView
  },
  {
    path: '/question/:id', // <- Segmento dinámico
    name: 'question',
    component: QuestionView
  },
  {
    path: '/tutorials', // <- Segmento dinámico
    name: 'tutorials',
    component: TutorialsView
  },
  {
    path: '/tutorials/pq', // <- Segmento dinámico
    name: 'priorityQueue',
    component: TutorialPQView
  },
  {
    path: '/tutorials/bs', // <- Segmento dinámico
    name: 'binarysearch',
    component: TutorialBSView
  },
  {
    path: '/tutorials/gph', // <- Segmento dinámico
    name: 'graph',
    component: TutorialGph
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
