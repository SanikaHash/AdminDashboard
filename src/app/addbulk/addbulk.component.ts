import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-addbulk',
  templateUrl: './addbulk.component.html',
  styleUrl: './addbulk.component.css'
})
export class AddbulkComponent {
  onSubmit = signal<any | null>(null);

}
