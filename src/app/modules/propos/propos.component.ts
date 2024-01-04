import { Component } from '@angular/core';

@Component({
  selector: 'app-propos',
  templateUrl: './propos.component.html',
  styleUrls: ['./propos.component.scss']
})
export class ProposComponent {
  carreauxData = [
    {
      numero: 1,
      titre: "AGILITE ET ADAPTABILITE",
        descriptionCourte: "La constante evolution de nos clients exige une approche adaptable et agile. Dans ce contexte, nous sommes toujours en mouvement, prêts à nous adapter aux nouvelles réalités.",
      descriptionComplete: '',
      showMore: false
    },
    {
      numero: 2,
      titre: 'EXPERTISE',
      descriptionCourte: "Notre savoir-faire est soutenu par une politique proactive de recrutement des meilleures compétences, de formation continue et de partage des meilleures pratiques. L’expertise est le premier engagement envers nos clients",descriptionComplete: "chargeons des tâches fastidieuses telles que la facturation, et la tenue de registres, vous permettant ainsi de vous concentrer sur ce qui compte vraiment pour votre entreprise.",
      showMore: false
    },
    {
      numero: 3,
      titre: 'SENS DU SERVICE',
      descriptionCourte: "Être au service du client est un état d’esprit. C’est également une approche organisationnelle qui place le client au cœur de notre entreprise.",
      descriptionComplete: "former, et à gérer efficacement votre personnel. Nous pouvons également vous aider à développer des politiques et des procédures RH solides pour assurer le bien-être de vos employés.",
      showMore: false
    }
    
  ];

  toggleDescription(carreau: any) {
    carreau.showMore = !carreau.showMore;
  }
  toggleActive(item: any): void {
    item.isActive = !item.isActive;
  }

}