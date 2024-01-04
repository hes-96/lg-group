import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title = 'angular-text-search-highlight';
  searchText = '';
  services = [
    'Comptabilité et finance',
    'Ingénierie',
    'Secrétariat',
    'Gestion de la paie',
    'Gestion des ressources humaines',
    'Support administratif',
    'Support informatique'
  ]

  isListVisible: boolean = false;

  toggleListVisibility() {
    this.isListVisible = !this.isListVisible;
  }



  isMenuOpen: boolean = false;


  searchTerm: string = '';
  isScrolled: boolean = false;
  servicesDropdownOpen: boolean = true;
  madDropdownOpen: boolean = true;
  toggleMADDropdown() {
    this.madDropdownOpen = !this.madDropdownOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Cette fonction sera exécutée lorsqu'il y a un événement de défilement de la fenêtre
    if (window.scrollY > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  toggleServicesDropdown() {
    this.servicesDropdownOpen = !this.servicesDropdownOpen;
  }

  constructor(private router: Router) { }

  onSearch(service: string) {
    const searchMappings: { [key: string]: string } = {
      'comptabilité et finance': '/equipe', // ajustez les mappings selon vos besoins
      'ingénierie': '/equipe',
      'secrétariat': '/equipe',
      'gestion de la paie': '/support',
      'gestion des ressources humaines': '/support',
      'support administratif': '/support',
      'support informatique': '/support'
    };

    const lowerCaseService = service.toLowerCase();
    if (searchMappings.hasOwnProperty(lowerCaseService)) {
      const destinationPath = searchMappings[lowerCaseService];
      this.router.navigate([destinationPath]);
    } else {
      console.log(`No matching page found for service: ${service}`);
    }
  }
}
