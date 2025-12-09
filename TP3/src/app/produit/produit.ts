import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './produit.html',
  styleUrls: ['./produit.css']
})
export class Produit {
  @Input() nomProduit: string = 'Produit sans nom';
  @Output() produitAjoute = new EventEmitter<string>();

  @Input() imageUrl: string = 'assets/indisponible.jpg'; 
  @Input() prix: number = 29.99;
  enStock: boolean = true;
  description: string = 'Un produit de qualité supérieure';

  ajouterAuPanier() {
   if (this.enStock) {
      alert(`Produit "${this.nomProduit}" ajouté au panier !`);
      this.produitAjoute.emit(this.nomProduit);
      
      console.log('🟡 PRODUIT - Événement émis:', this.nomProduit);
    } else {
      console.log('🟡 PRODUIT - Produit hors stock, événement non émis');
    }
  }

  basculerStock() {
    this.enStock = !this.enStock;
  }

  getStatutStock(): string {
    return this.enStock ? 'En stock' : 'Rupture de stock';
  }

  getCouleurStatut(): string {
    return this.enStock ? '#28a745' : '#dc3545';
  }
}



