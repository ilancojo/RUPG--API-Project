
export default class StorageManager {
 
    savePage(pageData) {

        localStorage.setItem("savedPage", JSON.stringify(pageData));
     }

  loadPage() {

    const storedDataPage = JSON.parse(localStorage.getItem("savedPage")); 

    if (storedDataPage === null ){
        return null
    }
    return storedDataPage;

  }
}