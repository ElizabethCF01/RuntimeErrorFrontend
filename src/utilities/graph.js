/* eslint-disable */
export class Graph {
  // defining vertex array and
  // adjacent list
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map()
  }

  addVertex(v) {
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v, [])
    this.noOfVertices++;
  }
  removeVertex(v) {
    // initialize the adjacent list with a
    // null array
    
    let get_adj = this.AdjList.get(v)
    
    this.AdjList.delete(v)
    // iterate over the vertices
    for (var i of get_adj) {
      // great the corresponding adjacency list
      // for the vertex
      let get_values = this.AdjList.get(i)

      // iterate over the adjacency list
      // concatenate the values into a string
      for (let j of get_values) {
        if (j == v) {
          this.AdjList.set(i, this.AdjList.get(i).filter((item) => item !== v))
        }
      }
    }
    console.log(this.AdjList)
  }
  // add edge to the graph
  addEdge(v, w) {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w)

    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v)
  }
  removeEdge(v, w) {
    this.AdjList.set(v, this.AdjList.get(v).filter((item) => item !== w))

    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.set(w, this.AdjList.get(w).filter((item) => item !== v))
    console.log(this.AdjList)
  }
  // Prints the vertex and adjacency list
  printGraph() {
    // get all the vertices
    var get_keys = this.AdjList.keys()

    // iterate over the vertices
    for (var i of get_keys) {
      // great the corresponding adjacency list
      // for the vertex
      var get_values = this.AdjList.get(i)
      var conc = "";

      // iterate over the adjacency list
      // concatenate the values into a string
      for (var j of get_values)
        conc += j + " ";

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc)
    }
  }
  bfsUtil(vert, visited, ans) {
        let q = [];

        // add the starting node to the queue
        visited[vert] = true
        q.push(vert);
        ans.push(vert)
        // loop until queue is empty
        while (q.length != 0) {
          // get the element from the queue
          let curr = q[0]
          q.shift()

          // passing the current vertex to callback function
          console.log(curr)
          //ans.push(vert)

          // get the adjacent list for current vertex
          let adj = this.AdjList.get(curr)

          // loop through the list and add the element to the
          // queue if it is not processed yet
          for (let i in adj) {
            let neigh = adj[i]

            if (!visited[neigh]) {
              ans.push(neigh)
              visited[neigh] = true
              q.push(neigh)
            }
          }
        } 
  }

  // function to performs BFS
  bfs() {

    let ans = []
    let visited = {}

    let get_keys = this.AdjList.keys()

    // iterate over the vertices
    for (let i of get_keys) {
      if (!visited[i]) {
        this.bfsUtil(i, visited, ans)
      }
    }
    return ans.join(' ')
  }

  // Main DFS method
  dfs() {

    let visited = {}
    let get_keys = this.AdjList.keys()
    let ans = []
    // iterate over the vertices
    for (let i of get_keys) {
      if (!visited[i]) {
        this.DFSUtil(i, visited, ans)
        console.log(ans)
      }
    }
    return ans.join(' ');
  }

  // Recursive function which process and explore
  // all the adjacent vertex of the vertex with which it is called
  DFSUtil(vert, visited, ans) {
    visited[vert] = true
    //console.log(vert)
    ans.push(vert)
    console.log(ans)
    var get_neighbours = this.AdjList.get(vert)

    for (var i in get_neighbours) {
      var get_elem = get_neighbours[i]
      if (!visited[get_elem])
        this.DFSUtil(get_elem, visited, ans)
    }
  }
}
