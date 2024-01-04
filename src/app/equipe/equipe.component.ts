import { Component } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent {
  selectedSection: string = 'COMPTABLE'; 
  menuItems = [
    { sectionId: 'COMPTABLE', Text: 'COMPTABILITÉ ET FINANCE', iconName: 'assets/Asset10.png', isActive: false },
    { sectionId: 'INGÉNIEURS', Text: 'INGÉNIERIE', iconName: 'assets/Asset9.png', isActive: false },
    {  sectionId: 'ASSISTANTES',Text: 'SECRÉTARIAT', iconName: 'assets/Asset8.png', isActive: false },
    
  ];
  showSection(sectionId: string): void {
    this.selectedSection = sectionId;
  }
}
