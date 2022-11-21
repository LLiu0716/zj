import { useRoute, useRouter } from 'vue-router'

export default () => {
  const route = useRoute()
  const router = useRouter()

  return {
    route,
    router
  }
}
