import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ModalComponent,NgClass,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  ngOnInit(){
    document.body.setAttribute('data-theme', 'dark');
  }
}
