<script setup>
/* eslint-disable */
import { reactive, ref } from "vue";
import { defineConfigs } from "v-network-graph";
import { Graph } from "@/utilities/graph";

const Nodes = {
  node1: { name: "N1" },
  node2: { name: "N2" },
  node3: { name: "N3" },
};

const Edges = {
  edge1: { source: "node1", target: "node2" },
  edge2: { source: "node2", target: "node3" },
};

const Layouts = {
  nodes: {
    node1: { x: 50, y: 0 },
    node2: { x: 0, y: 75 },
    node3: { x: 100, y: 75 },
  },
};

const configs = defineConfigs({
  node: {
    selectable: 2, // up to 2 nodes
  },
  edge: {
    selectable: true,
    normal: {
      width: 3,
    },
  },
});
const g = new Graph(3);
const graph = ref(g);

const nodes = reactive(Nodes);
const edges = reactive(Edges);
const nextNodeIndex = ref(Object.keys(nodes).length + 1);
const nextEdgeIndex = ref(Object.keys(edges).length + 1);

const selectedNodes = ref([]);
const selectedEdges = ref([]);

graph.value.addVertex("N1");
graph.value.addVertex("N2");
graph.value.addVertex("N3");

graph.value.addEdge("N1", "N2");
graph.value.addEdge("N2", "N3");

const ini = ref("");
const tour = ref("");

function addNode() {
  const nodeId = `node${nextNodeIndex.value}`;
  const name = `N${nextNodeIndex.value}`;
  nodes[nodeId] = { name };
  graph.value.addVertex(name);
  nextNodeIndex.value++;
}

function removeNode() {
  const n = selectedNodes.value[0];
  graph.value.removeVertex(`N${n.slice(-1)}`);
  for (const nodeId of selectedNodes.value) {
    delete nodes[nodeId];
  }
}

function addEdge() {
  if (selectedNodes.value.length !== 2) return;
  const [source, target] = selectedNodes.value;
  const edgeId = `edge${nextEdgeIndex.value}`;
  edges[edgeId] = { source, target };
  graph.value.addEdge(`N${source.slice(-1)}`, `N${target.slice(-1)}`);
  console.log(graph.value);
  nextEdgeIndex.value++;
}

function removeEdge() {
  const e = selectedEdges.value[0];
  const ed = edges[e];
  console.log(ed);
  graph.value.removeEdge(`N${ed.source.slice(-1)}`, `N${ed.target.slice(-1)}`);

  for (const edgeId of selectedEdges.value) {
    delete edges[edgeId];
  }
}
</script>

<template>
  <div class="d-flex flex-column">
    <div class="demo-control-panel flex-row row">
      <div class="col-6 mb-2">
        <label>Nodo:</label>
        <button @click="addNode" class="btn btn-primary btn-sm mx-2">
          adicionar
        </button>
        <button class="btn btn-secondary btn-sm" :disabled="selectedNodes.length == 0" @click="removeNode">
          eliminar
        </button>
      </div>
      <div class="col-6 mb-2">
        <label>Arista:</label>
        <button class="btn btn-primary btn-sm mx-2" :disabled="selectedNodes.length != 2" @click="addEdge">
          adicionar
        </button>
        <button class="btn btn-secondary btn-sm" :disabled="selectedEdges.length == 0" @click="removeEdge">
          eliminar
        </button>
      </div>
    </div>
    <v-network-graph v-model:selected-nodes="selectedNodes" v-model:selected-edges="selectedEdges" :nodes="nodes"
      :edges="edges" :layouts="Layouts" :configs="configs" class="graph" />
    <p class="text-muted">
      Nota: Pulsa <kbd>shift</kbd> para seleccionar dos objetos a la vez
    </p>
    <div class="mt-5">
      <div class="mb-3 d-flex flex-row justify-content-center">
        <button @click="tour = graph.bfs()" class="btn btn-primary mx-2" type="button">
          BFS
        </button>
        <button @click="tour = graph.dfs()" class="btn btn-primary mx-2" type="button">
          DFS
        </button>
      </div>
      <div class="d-flex flex-row justify-content-center mt-2">
         <div v-for="(x, i) in tour.split(' ')" :key="i" class="mx-1">
          <span v-if="x != ''" class="badge bg-success rounded-pill">{{
              x
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.graph {
  border: 1px solid rgb(196, 193, 193);
  height: 40vh;
  width: 50vw;
  border-radius: 5px;
}
</style>
