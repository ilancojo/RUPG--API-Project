
export default class PageController {

  constructor(apiManager, renderer,storageManager){
   
    this.apiManager = apiManager;
    this.renderer = renderer;
    this.storageManager = storageManager;
    this.currentPageData = null;
    }

  generatePage() {

        const pageData = this.apiManager.getAllPageData();
        this.currentPageData = pageData ;
        this.renderer.renderPage(pageData);
   }
    saveCurrentPage() {
        if (this.currentPageData === null) {
            this.renderer.renderMessage("No page data to save")
            return
        }
        this.storageManager.savePage(this.currentPageData)
        this.renderer.renderMessage("Page saved successfully")
    }
  

    loadSavedPage() {
        const savedPage = this.storageManager.loadPage()

        if (savedPage === null) {
            this.renderer.renderMessage("No saved page found")
            return
        }
        this.currentPageData = savedPage
        this.renderer.renderPage(savedPage)
        this.renderer.renderMessage("Saved page loaded successfully")
    }
}
