import { getAllPageData } from "./models/apiManager.js"
import Renderer from "./view/renderer.js"
import PageController from "./controller/pageController.js"


const apiManager = {
  getAllPageData: getAllPageData
}

const renderer = new Renderer()

const pageController = new PageController(apiManager, renderer)

const generateButton = document.getElementById("btn-generate")

generateButton.addEventListener("click", function () {
  pageController.generatePage()
})

pageController.generatePage()