
export default class PageController {

  constructor(apiManager, renderer) {
    this.apiManager = apiManager
    this.renderer = renderer
    this.currentPageData = null
  }

  generatePage() {
    const pageData = this.apiManager.getAllPageData()

    this.currentPageData = pageData
    this.renderer.renderPage(pageData)
  }
}