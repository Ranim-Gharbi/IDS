import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-utilisateur',
  imports: [FormsModule,CommonModule],
  templateUrl: './utilisateur.html'
  
})
export class Utilisateur {
   nom: string = '';
}
