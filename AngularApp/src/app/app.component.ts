import { Component, Testability } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Tea } from './Item';
//import { faHome, faBars, faUser, faGear } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  teas: Tea[] = [
    new Tea(1, 'Jade oolong', 'Oolong', 300),
    new Tea(2, 'Dragon Well', 'Green', 1500),
    new Tea(3, 'Pu-Erh Special', 'Fermented', 600),
  ]

  selectedTea?: Tea;
  onSelect(tea: Tea): void {
    this.selectedTea = tea;
  }
}