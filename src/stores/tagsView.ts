import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { RouteLocationNormalized, RouteRecordName } from 'vue-router'

export const useTagsView = defineStore('tags', () => {
  const visitedViews = ref<any[]>([])
  const addView = (view: any) => {
    if (visitedViews.value.some((v) => v.path === view.path)) return void 0
    visitedViews.value.push(
      Object.assign({}, view, {
        title: view.meta?.title || 'tag-name'
      })
    )
    addCachedView(view)
  }

  const delView = (view: any) => {
    const i = visitedViews.value.indexOf(view)
    if (i > -1) {
      visitedViews.value.splice(i, 1)
    }
    delCachedView(view)
  }

  const cachedViews = ref<RouteRecordName[]>([])
  const addCachedView = (view: RouteLocationNormalized) => {
    if (cachedViews.value.includes(view.name!)) return
    if (!view.meta.noCache) {
      // 需要缓存
      cachedViews.value.push(view.name!)
    }
  }
  const delCachedView = (view: RouteLocationNormalized) => {
    // 删除缓存
    const index = cachedViews.value.indexOf(view.name!)
    index > -1 && cachedViews.value.splice(index, 1)
  }

  const delAllView = () => {
    visitedViews.value = visitedViews.value.filter((tag) => tag.meta.affix)
    cachedViews.value = []
  }

  const delOthersViews = (view: RouteLocationNormalized) => {
    visitedViews.value = visitedViews.value.filter(
      (tag) => tag.meta.affix || tag.path === view.path
    )
    cachedViews.value = cachedViews.value.filter((name) => name !== view.name)
  }

  return {
    cachedViews,
    addCachedView,
    delCachedView,
    visitedViews,
    addView,
    delView,
    delAllView,
    delOthersViews
  }
})
