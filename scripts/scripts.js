/** Criando uma função de mudança de Cores */
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const imageTag = html.querySelector("#profile img")
  const imageAltTag = html.querySelector("#profile")

  if (html.classList.contains("light")) {
    imageTag.setAttribute("src", "./assets/avatarLight.png")
    imageAltTag.setAttribute(
      "alt",
      "Official Photo by Developer LutekDev in Toggle Light"
    )
  } else {
    imageTag.setAttribute("src", "./assets/avatarDark.png")
    imageAltTag.setAttribute(
      "alt",
      "Official Photo by Developer LutekDev in Toggle Dark"
    )
  }
}

/** 
 * Criando uma condição "toggle" para verificar se está "light" ou "dark"
 * 
 * const html = document.DocumentElement
 * 
 * if (html.classList.contains("light")) { 
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
 */
