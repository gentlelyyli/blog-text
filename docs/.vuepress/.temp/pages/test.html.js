export const data = JSON.parse("{\"key\":\"v-953546a4\",\"path\":\"/test.html\",\"title\":\"text\",\"lang\":\"zh-CH\",\"frontmatter\":{\"lang\":\"zh-CH\",\"title\":\"text\",\"description\":\"It is s test!\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"test.md\"}")

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
