export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"博客首页\",\"lang\":\"zh-CH\",\"frontmatter\":{\"lang\":\"zh-CH\",\"title\":\"博客首页\",\"description\":\"only a test.\"},\"headers\":[],\"git\":{\"updatedTime\":1700144246000,\"contributors\":[{\"name\":\"Skillful Li\",\"email\":\"lwangluoab@163.com\",\"commits\":2}]},\"filePathRelative\":\"README.md\"}")

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
