import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bienvenue } from './bienvenue/bienvenue';
import { Produit } from './produit/produit';
import { Utilisateur } from './utilisateur/utilisateur';
import { Panier } from './panier/panier';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Bienvenue, Produit, Utilisateur, Panier],
  templateUrl: './app.html',   
  styleUrls: ['./app.css'] 
})
export class App {
   title = 'Mon Application';
  articlesPanier: string[] = []; 

  onProduitAjoute(nomProduit: string) {
    console.log('🟢 APP - Événement reçu:', nomProduit);
    this.articlesPanier.push(nomProduit);
    console.log('🟢 APP - Panier après ajout:', this.articlesPanier);
    console.log('🟢 APP - Nombre d\'articles:', this.articlesPanier.length);
    this.articlesPanier = [...this.articlesPanier];
  }

  // Méthode pour obtenir le nombre d'articles
  getNombreArticles(): number {
    return this.articlesPanier.length;
  }
}