
export default class StorageManager {
    constructor() {
      this.storageKey = "savedPages"
  }

 savePage(pageData) {
    const savedPages = this.getSavedPages()
    
    const fullName = pageData.mainUser.firstName + "  " +pageData.mainUser.lastName ;
    savedPages[fullName] = pageData;

    localStorage.setItem(this.storageKey, JSON.stringify(savedPages))
    return fullName
  }

  loadPage(fullName) {
    const savedPages = this.getSavedPages()

    if (!fullName || savedPages[fullName] === undefined) {
      return null
    }
    return savedPages[fullName]
  }


  getSavedPages() {
    const savedPagesString = localStorage.getItem(this.storageKey)

    if (savedPagesString === null) {
      return {}
    }
    return JSON.parse(savedPagesString)
  }

}