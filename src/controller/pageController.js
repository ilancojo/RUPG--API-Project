
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
            console.log("No page data to save")
            return
        }
        this.storageManager.savePage(this.currentPageData)
        console.log("Page saved successfully")
    }
  

    loadSavedPage() {
        const savedPage = this.storageManager.loadPage()

        if (savedPage === null) {
            console.log("No saved page found")
            return
        }
        this.currentPageData = savedPage
        this.renderer.renderPage(savedPage)
    }
}
