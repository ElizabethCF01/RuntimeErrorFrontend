import { createStore } from 'vuex'
/* eslint-disable */
export default createStore({
  state: {
    questions: [
      {
        id: '10',
        title: '¿Como instalar bootstrap en vue?',
        content: 'No consigo instalar bootrswatch en vue 3',
        answers: [
          {
            rating: 40,
            id: 'asd',
            user: { name: 'Lola Flores' },
            content: 'Puedes correr el comando: \n npm i bootswatch \n y luego importar el archivo css \n import "bootswatch/dist/[theme]/bootstrap.min.css";\n en tu archivo main.js'
          },
          {
            rating: 1,
            id: '32we',
            user: { name: 'Jhon Doe' },
            content: 'Puedes correr el comando: npm i bootswatch y luego importar el archivo css import "bootswatch/dist/[theme]/bootstrap.min.css"; en tu archivo main.js'
          },
          {
            rating: 4,
            id: '234ew',
            user: { name: 'Jane Doe' },
            content: 'Puedes correr el comando: \n npm i bootswatch \n '
          }
        ]
      },
      {
        id: '20',
        title: '¿Como instalar vuex un proyecto vue en windows?',
        content: 'No consigo instalar vuex en un proyecto vue 3 en windows 11 a traves de la consola',
        answers: [
          {
            id: '1',
            user: { name: 'Jane Doe' },
            rating: 49,
            content: ' puedes usar el comando:  npm install vuex@next --save'
          },
          {
            id: '2',
            user: { name: 'Maria Doe' },
            rating: 4,
            content: 'Puedes correr el comando: yarn add vuex@next --save'
          },
          {
            id: '7',
            user: { name: 'Jhon Doe' },
            rating: 1,
            content: 'Usa el cdn https://unpkg.com/vuex@4.0.0/dist/vuex.global.js y luego agregas el script correspondiente'
          },
          {
            id: '9',
            user: { name: 'Lola Doe' },
            rating: 8,
            content: 'ni idea'
          }
        ]
      }
    ],
    tutorials: [
      {
        id: 'pq',
        user: { name: 'Lola Doe' },
        rating: 8,
        title: 'Cola con prioridad',
        content:
          'Una cola de prioridad es una coleccion de elementos donde '
          + 'cada elemento tiene asociado un valor susceptible '
          + 'de ordenacion denominado prioridad. Una cola de '
          + 'prioridad se caracteriza por admitir inserciones de '
          + 'nuevos elementos y la consulta y eliminacion del '
          + 'elemento de minima prioridad. Analogamente se '
          + 'pueden definir colas de prioridad que admitan la '
          + 'consulta y eliminacion del elemento de maxima '
          + 'prioridad en la coleccion. '
      },
      {
        id: 'bs',
        user: { name: 'Lola Doe' },
        rating: 19,
        title: 'Busqueda Binaria',
        content:
          'El algoritmo de búsqueda binaria compara el valor que estamos'
          + 'buscando con el valor central de un arreglo ordenado. Si el valor'
          + 'es igual al punto medio decimos que lo encontramos, de lo contrario'
          + 'repetimos buscando en las mitad inferior y superior, según sea el caso,'
          + 'hasta que lo encontramos'
      },
      {
        id: 'gph',
        user: { name: 'Jhane Doe' },
        rating: 30,
        title: 'Grafos',
        content:
          'En matemáticas y ciencias de la computación, un grafo (del griego grafos: dibujo, imagen)1​ ' +
          'es un conjunto de objetos llamados vértices o nodos unidos por enlaces llamados aristas o arcos,' +
          ' que permiten representar relaciones binarias entre elementos de un conjunto.'
      }
    ]
  },
  getters: {
    questions(state, getters) {
      return getters.questions
    }
  },
  mutations: {
    addQuestion(state, payload) {
      state.questions.push(payload)
    },
    addAnsware(state, payload) {
      const { id, newAns } = payload
      state.questions.find(q => q.id = id).push(newAns)
    },
    setRateAnsware(state, payload) {
      let x = state.questions[payload.id] // .answers[payload.ans].rating+=payload.rating
      console.log(x)
    }
  },
  actions: {
    getQuestions() {
      return this.questions
    },
    getQuestion(i) {
      return this.questions[i]
    }
  },
  modules: {
  }
})
