<template>
  <ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
      <a class="nav-link active" data-bs-toggle="tab" href="#cpp" aria-selected="true" role="tab">C++</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" data-bs-toggle="tab" href="#java" aria-selected="false" role="tab" tabindex="-1">Java</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" data-bs-toggle="tab" href="#python" aria-selected="false" tabindex="-1" role="tab">python
        3</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" data-bs-toggle="tab" href="#cs" aria-selected="false" tabindex="-1" role="tab">C#</a>
    </li>
  </ul>
  <div id="myTabContent" class="tab-content">
    <div class="tab-pane fade active show" id="cpp" role="tabpanel">
      <div class="card border-top-inte">
        <div class="card-body">
          <pre>
                  <code>
      <span class="text-muted">#include &lt;iostream&gt;</span>
      <span class="code">using namespace</span> std;<br />
      <span class="code">int</span> main()
      {
        <span class="text-muted">// n es el número de vértices</span>
        <span class="text-muted">// m es el número de aristas</span><br/>
        <span class="code">int</span> n, m;
        <span class="code">cin</span> >> n >> m;
        <span class="code">int</span> adjMat [n + 1][n + 1];<br/>
        <span class="code">for</span> (<span class="code">int</span> i = 0; i &lt; m; <i></i>++) {
          <span class="code">int</span> u, v;
          <span class="code">cin</span> >>u >> v;
          adjacencymatrix[u][v] = 1;
          adjMat[v][u] = 1;
        }<br />
        <span class="code">return</span> 0;
      }
                  </code>
                </pre>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="java" role="tabpanel">
      <div class="tab-pane fade active show" role="tabpanel">
        <div class="card border-top-inte">
          <div class="card-body">
            <pre>
                    <code>
      <span class="code">import</span> java.util.*;<br/>
      <span class="code">public class</span> Main {
        <span class="code">public static void</span> main(String[] args)
        {
          <span class="code">Scanner</span> sc = new Scanner(System.in);
          <span class="text-muted">// n es el número de vértices</span>
          <span class="text-muted">// m es el número de aristas</span>
          <span class="code">int</span> n = sc.nextInt();
          <span class="code">int</span> m = sc.nextInt();
          <span class="code">int</span>[][] adjMat = <span class="code">new</span> int[n + 1][n + 1];<br />
          <span class="code">for</span> (<span class="code">int</span> i = 0; i &lt; m; i++) {
            int u=sc.nextInt();
            int v=sc.nextInt();
            adjMat[u][v]=1;
            adjMat[v][u]=1;
          }
        }
      }
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="python" role="tabpanel">
      <div class="tab-pane fade active show" role="tabpanel">
        <div class="card border-top-inte">
          <div class="card-body">
            <pre>
                    <code>
      <span class="code">if</span> __name__ == <span class="code">'__main__'</span>:<br />
      <span class="text-muted"># n es el número de vértices</span>
      <span class="text-muted"># m es el número de aristas</span><br/>
      n, m = <span class="code">map</span>(int, input().split())
      adjMat = [[0 <span class="code">for</span> i in <span class="code">range</span>(n)]<span class="code">for</span> j in <span class="code">range</span>(n)]
      <span class="code">for</span> i <span class="code">in range</span>(n):
        u, v = <span class="code">map</span>(int, <span class="code">input</span>().<span class="code">split</span>())
        adjMat[u][v] = 1
        adjMat[v][u] = 1
                    </code>
                  </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="cs" role="tabpanel">
      <div class="tab-pane fade active show" role="tabpanel">
        <div class="card border-top-inte">
          <div class="card-body">
            <pre>
                    <code>
      <span class="code">using </span>System;
      <span class="code">using</span> System.IO;<br />
      <span class="code">class</span> Program {
        <span class="code">static void</span> Main(string[] args)
        {
          <span class="text-muted">// n es el número de vértices</span>
          <span class="text-muted">// m es el número de aristas</span><br/>
          <span class="code">int</span> n, m;
          n = Convert.ToInt32(Console.ReadLine());
          m = Convert.ToInt32(Console.ReadLine());
          <span class="code">int</span>[, ] adjMat = <span class="code">new int</span>[n + 1, n + 1];
          <span class="code">for </span>(<span class="code">int</span> i = 0; i &lt; m; i++) {
            <span class="code">int</span> u, v; u=Convert.ToInt32(Console.ReadLine());
            v = Convert.ToInt32(Console.ReadLine());
            adjMat[u, v] = 1;
            adjMat[v, u] = 1;
          }
        }
      }
                    </code>
                  </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
export default {
  name: 'GraphAdjMatrix',
  data() {
    return {
    }
  }
}
</script>
<style scoped>
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
