import { Component ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule],
   templateUrl: './panier.html',    
  styleUrls: ['./panier.css'] 
})
export class Panier {
 @Input() nombreArticles: number = 0;
  @Input() articles: string[] = [];

  ajouterArticle(nomProduit: string) {
    this.articles.push(nomProduit);
    this.nombreArticles = this.articles.length;
  }
}