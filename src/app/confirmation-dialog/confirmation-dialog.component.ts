import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.css'
})
export class ConfirmationDialogComponent {

}
