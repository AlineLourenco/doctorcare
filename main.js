// String (textos)
// Number (números)
// Boolean (true | false)

window.addEventListener('scroll', onScroll)

// Gerenciar os diversos scrools da página
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)

}

function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo, está acima da linha?
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop


  // verificar se a base está abaixo da linha alvo
  // Onde termina a seção?
  const sectionEndsAt = sectionTop + sectionHeight

  // a base da seção está acima da linha alvo?
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine


  // limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  // querySelector: pesquisa pelo seletor; [href*=] significa procurar o href que contenha o id que peguei da seção, ele vai pegar uma string e não o objeto home
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
  
}

// Mostrar o menu de navegação ao rolar a página
function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

// Mostrar o botão de backToTop ao rolar a página
function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-estendido')
}

function closeMenu() {
  document.body.classList.remove('menu-estendido')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .estatisticas, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)


// scrollY é uma variável que recebe a posição do scroll

// a função ScrollReveal aceita como parâmetro um objeto, para criar um objeto basta colocar um par de chaves, isso é um objeto vazio.

//O acento grave na string permite que quebre a linha, se usasse as aspas não conseguiria.

// ${} isso é uma interpolação, onde colocamos algum código javascript
