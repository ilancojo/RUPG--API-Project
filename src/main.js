import { getAllPageData } from "./models/apiManager.js"
import Renderer from "./view/renderer.js"
import PageController from "./controller/page-controller.js"

// שים לב: כאן עדיין אין לנו class ל-apiManager,
// אז נעטוף את הפונקציה בתוך object פשוט זמנית
const apiManager = {
  getAllPageData: getAllPageData
}

const renderer = new Renderer()
const pageController = new PageController(apiManager, renderer)

const generateButton = document.getElementById("btn-generate")

generateButton.addEventListener("click", function () {
  // לקרוא ל-generatePage דרך ה-controller
})

// אפשר גם להציג משתמש ראשון מיד כשהדף נטען
// pageController.generatePage()