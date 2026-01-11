document.querySelectorAll("section").forEach(sec=>{
  sec.style.opacity=0
  sec.style.transform="translateY(50px)"
  sec.style.transition="1s"
})

window.addEventListener("scroll",()=>{
  document.querySelectorAll("section").forEach(sec=>{
    if(sec.getBoundingClientRect().top < window.innerHeight-100){
      sec.style.opacity=1
      sec.style.transform="translateY(0)"
    }
  })
})
