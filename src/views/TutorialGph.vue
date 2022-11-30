<template>
  <div class='home container text-center'>
    <div class='borderbot mb-5'>
      <h2>{{ tutorial.title }}</h2>
    </div>
    <div class='text-start'>
      <p>{{ tutorial.content }}</p>
    </div>
    <div>
      <img class="graph-img" src='../assets/undirectedgraph.png' />
    </div>
    <div class='text-start'>
      <h5>Componentes de un Grafo</h5>
      <p><strong>Vértices:</strong> Los vértices son las unidades fundamentales del . A veces, los vértices también se
        conocen como vértices o nodos. Cada nodo/vértice se puede etiquetar o no etiquetar.</p>
      <p><strong>Bordes:</strong> Los bordes se dibujan o se usan para conectar dos nodos del grafos. Se puede ordenar
        un par de nodos en un grafos dirigido. Los bordes pueden conectar dos nodos cualesquiera de cualquier forma
        posible. No hay reglas. A veces, los bordes también se conocen como arcos. Cada borde se puede
        etiquetar/desetiquetar.</p>
      <p>Los grafos se utilizan para resolver muchos problemas de la vida real. Se utilizan para representar redes. Las
        redes pueden incluir trayectos en una ciudad o red telefónica o red de circuitos. Los grafos también se utilizan
        en redes sociales como linkedIn, Facebook. Por ejemplo, en Facebook, cada persona se representa con un vértice
        (o nodo). Cada nodo es una estructura y contiene información como identificación de persona, nombre, sexo,
        ubicación, etc.</p>
    </div>
    <div class='text-start'>
      <h5>Las dos siguientes son las representaciones más utilizadas de un grafos.</h5>
      <p>1. Matriz de adyacencia</p>
      <p>2. Lista de adyacencia</p>
      <strong>Matriz de adyacencia:</strong>
      <p>Adjacency Matrix es una matriz 2D de tamaño V x V donde V es el número de vértices en un grafos. Sea la matriz
        2D adj[][], una ranura adj[i][j] = 1 indica que hay una arista desde el vértice i hasta el vértice j. La matriz
        de adyacencia para el grafos no dirigido siempre es simétrica. La matriz de adyacencia también se utiliza para
        representar grafos ponderados. Si adj[i][j] = w, entonces hay una arista del vértice i al vértice j con peso w.
      </p>
      <p>La matriz de adyacencia para el grafo de ejemplo anterior es: </p>
    </div>
    <div>
      <img class="graph-img" src='../assets/adjacencymatrix.png' />
    </div>
    <div class='text-start'>
      <p><strong>Pros:</strong> la representación es más fácil de implementar y seguir. Eliminar un borde lleva O(1)
        tiempo. Las consultas como si hay un borde desde el vértice 'u' hasta el vértice 'v' son eficientes y se pueden
        realizar O(1).</p>
      <p><strong>Contras:</strong> consume más espacio O(V^2). Incluso si el grafos es escaso (contiene menos aristas),
        consume el mismo espacio. Agregar un vértice es O(V^2) tiempo. Calcular todos los vecinos de un vértice lleva
        tiempo O(V) (no eficiente).
        Consulte esto para ver una implementación de Python de muestra de la matriz de adyacencia.</p>
    </div>
    <div class='text-start'>
      <h5>Implementación de toma de entrada para matriz de adyacencia</h5>
      <GraphAdjMatrix />
    </div>
    <div class='text-start mt-5 pt-5 mb-4'>
      <strong>Lista de adyacencia:</strong>
      <p>
        Se utiliza una matriz de listas. El tamaño de la matriz es igual al número de vértices. Sea el arreglo un
        arreglo[]. Una
        matriz de entrada[i] representa la lista de vértices adyacentes al i-ésimo vértice. Esta representación también
        se puede
        utilizar para representar un gráfico ponderado. Los pesos de los bordes se pueden representar como listas de
        pares. A
        continuación se muestra la representación de la lista de adyacencia del gráfico anterior.</p>
    </div>
    <div>
      <img class="graphlist-img" src='../assets/listadjacency.png' />
    </div>
    <div class='text-start mt-5 pt-2'>
      <h5 class='mb-4'>Implementación de toma de entrada para lista de adyacencia</h5>
      <GraphAdjList />
    </div>
    <div class='d-flex justify-content-center my-5 pt-5 pb-5'>
      <GraphComp />
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { mapState } from 'vuex'
import GraphComp from '@/components/GraphComp.vue'
import GraphAdjMatrix from '@/components/GraphAdjMatrix.vue'
import GraphAdjList from '@/components/GraphAdjList.vue'
export default {
  name: 'GraphView',
  components: { GraphComp, GraphAdjMatrix, GraphAdjList },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      tutorials: (state) => state.tutorials
    }),
    tutorial() {
      return this.tutorials.find((t) => t.id === 'gph')
    }
  }
}
</script>
<style scoped>
.borderbot {
  border-bottom: 0.3px solid rgba(173, 173, 173, 0.623)
}

.childInp {
  max-width: 6rem
}

.graph-img {
  max-height: 300px;
}

.graphlist-img {
  max-height: 250px;
}

.border-top-inte {
  border-color: #f0f0f0;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top: 1px solid white;
}

.code {
  color: rgb(50, 104, 204);
}
</style>
