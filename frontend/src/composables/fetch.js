import { ref } from 'vue'

export function useFetch(path = '/') {
  const data = ref(null)
  const error = ref(null)
  fetch(import.meta.env.VITE_BACKEND_API + path)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))
  return { data, error }
}
