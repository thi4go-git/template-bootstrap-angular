import { AfterViewInit, Component } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {

  /*
  ->Aqui configuraos a ação do botão que está no header:
      <!-- Sidebar Toggle (Topbar) -->
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
        <i class="fa fa-bars"></i>
    </button>
  
    ao clicar nesse botão, esse código abaixo adicionará um CSS de classe no body = sidebar-toggled
    e adicionará no MENU que está no componente de menu:
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    adicionará nesse MENU o CSS: toggled
    .sidebar.toggled {
    width: 0 !important;
    overflow: hidden
}
esse CSS fechará o menu.

  */


  href: string | undefined;

  ngAfterViewInit(): void {
    (($) => {
      "use strict";
      // será execultado ao clicar no menu superior (Header)
      $("#sidebarToggleTop").on("click", function (e: { preventDefault: () => void; }) {
        e.preventDefault();
        // Adiciona o CSS sidebar-toggled no (BOODY lá no index) ao clicar no 
        //botão sidebarToggleTop lá no Componente HEADER
        $("body").toggleClass("sidebar-toggled");

        // Adiciona o CSS toggled no ul (Componente MENU) ao clicar no 
        //botão sidebarToggleTop lá no Componente HEADER.
        $("ul").toggleClass("toggled");
      });

      // será execultado ao clicar no menu inferior (Final do Menu)
      $("#sidebarToggle").on("click", function (e: { preventDefault: () => void; }) {
        e.preventDefault();
        // Adiciona o CSS sidebar-toggled no (BOODY lá no index) ao clicar no 
        //botão sidebarToggle lá no Componente MENU.
        $("body").toggleClass("sidebar-toggled");

        // Adiciona o CSS toggled no ul (Componente MENU) ao clicar no 
        //botão sidebarToggle lá no Componente MENU.
        $("ul").toggleClass("toggled");
      });
    })($);
  }

}
