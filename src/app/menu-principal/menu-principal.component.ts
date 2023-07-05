import { Component } from '@angular/core';

@Component({
  selector: 'menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent {
  

  traerMenu(){
    let menuMobile = document.getElementById("menuMobile");
    let iconoMenu = document.getElementById("iconoMenu");
    let flag = false;
    iconoMenu?.addEventListener("click",() => {
      if (menuMobile != undefined && 
          menuMobile.style.top == "50px" &&
          flag == false) {
            menuMobile.style.top = "-2000px";
            flag = true;
      }
      if (menuMobile != undefined && 
          menuMobile.style.top != "50px" &&
          flag == false) {
            menuMobile.style.top = "50px";
            flag = true;
      }
      
    })
  }

  scroll(){
    let pagina = document.getElementById("pagina")
    let imgLogoCss = document.getElementById("imgLogo")?.style;
    let cabeceraCss = document.getElementById("cabecera")?.style;
    let y = pagina?.scrollTop;

    pagina?.addEventListener("scroll", () => {
      if (imgLogoCss != undefined && 
          cabeceraCss != undefined &&
          (y != undefined && y != 0  && y >= 300) ){
        imgLogoCss.width = "10vh";
        imgLogoCss.height = "10vh";
        cabeceraCss.height = "7vh";
      }
      if (imgLogoCss != undefined && 
          cabeceraCss != undefined && 
          (y != undefined && y < 200) ){
        imgLogoCss.width = "30vh";
        imgLogoCss.height = "30vh";
        cabeceraCss.height = "15vh"
      }

      if (pagina != undefined && pagina != null) {
        setTimeout(function(){
          if (pagina != null) {
            pagina.onscroll = function() { 
              console.log("scrolled!");
            }
      }}, 0);
      }
    })
  }



}
