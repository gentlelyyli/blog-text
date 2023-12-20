export const data = JSON.parse("{\"key\":\"v-6ce48554\",\"path\":\"/contributing.html\",\"title\":\"博客首页\",\"lang\":\"zh-CH\",\"frontmatter\":{\"lang\":\"zh-CH\",\"title\":\"博客首页\",\"description\":\"only a test.\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"contributing.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
