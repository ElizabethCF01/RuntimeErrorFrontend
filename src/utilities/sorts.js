/* eslint-disable */ 
function LEFT(i) {
  return (2 * i + 1)
}

// devuelve el hijo derecho de `A[i]`
function RIGHT (i) {
  return (2 * i + 2)
}
// Función de utilidad para intercambiar dos índices en la array
function swap (array, i, j)
{
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
function heapify(array, i, size) {
  // obtener el hijo izquierdo y derecho del nodo en el índice `i`
  let left = LEFT(i) // pos del hijo izq
  let right = RIGHT(i) // pos del hijo der

  let largest = i // pos del mayor

  // compara `A[i]` con su hijo izquierdo y derecho
  // y encontrar el mayor valor
  if (left < size && array[left].rating < array[i].rating) { // si tiene hijo izq y es mayor q el
    largest = left
  }

  if (right < size  && array[right].rating < array[largest].rating) {// si tiene hijo derecho y es mayor q el mayor almacenado
    largest = right
  }

  // intercambiar con un hijo que tenga mayor valor y
  // llama a heapify-down en el hijo
  if (largest != i)
  {
    swap(array, i, largest)
    heapify(array, largest, size)
  }
}
// Función para eliminar un elemento con la prioridad más alta (presente en la raíz)
function pop(array, size)
{
  // si el heap no tiene elementos
  if (size <= 0) {
    return -1
  }

  let top = array[0]

  // reemplaza la raíz del heap con el último elemento
  // de la array
  array[0] = array[size-1]

    // llama a heapify-down en el nodo raíz
  heapify(array, 0, size - 1)

  return top
}
export const heapsort = (array, n) =>
{
  // Build-heap: llamar a heapify a partir del último interno
  // nodo hasta el nodo raíz
  let i = Math.floor((n - 2) / 2) // ultimo padre
  
  let a = array
  while (i >= 0) {
    heapify (a, i--, n)
  }

  // extrae repetidamente del heap hasta que se vacía
  while (n > 0)
  {
    a[n - 1] = pop(a, n)
    //console.log(a)
    n--
  }
}