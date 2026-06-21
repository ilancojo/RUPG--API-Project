
export default class PageController {

  constructor(apiManager, renderer,storageManager){
   
    this.apiManager = apiManager;
    this.renderer = renderer;
    this.storageManager = storageManager;
    this.currentPageData = null;
    }

   async generatePage() {
        try{
            const pageData = await this.apiManager.getAllPageData();
            this.currentPageData = pageData ;
            this.renderer.renderPage(pageData);
        } catch (error) {
                console.error("Failed to generate page:", error)
                this.renderer.renderMessage("Could not generate page")
        }
    }
   
    saveCurrentPage() {
        try{
            if (this.currentPageData === null) {
                this.renderer.renderMessage("No page data to save")
                return
            }
            this.storageManager.savePage(this.currentPageData)
            this.renderer.renderMessage("Page saved successfully")
        } catch(error){
            console.error(error)
            this.renderer.renderMessage("Could not save page")
        }
    }

    loadSavedPage() {
        try {
            const savedPage = this.storageManager.loadPage()

            if (savedPage === null) {
                this.renderer.renderMessage("No saved page found")
                return
            }
            
            this.currentPageData = savedPage
            this.renderer.renderPage(savedPage)
            this.renderer.renderMessage("Saved page loaded successfully")
        } catch (error) {
            console.error(error)
            this.renderer.renderMessage("Could not load saved page")
        }
    }
}
