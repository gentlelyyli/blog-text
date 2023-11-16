export const data = JSON.parse("{\"key\":\"v-5dd253be\",\"path\":\"/done.html\",\"title\":\"It just is a test.\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1700103122000,\"contributors\":[{\"name\":\"Skillful Li\",\"email\":\"lwangluoab@163.com\",\"commits\":1}]},\"filePathRelative\":\"done.md\"}")

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
