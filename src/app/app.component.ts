import { Component } from '@angular/core';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-angular7';

  private data: any[];

  // array of currently selected entities in the data table
  selectedEntities: any[];

  constructor(public userService :ServiceService){}
  
  public setSelectedEntities($event: any) {
    this.selectedEntities = $event;
}
}
