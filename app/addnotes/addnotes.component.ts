import { Component, Inject,EventEmitter,Output} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MatCard } from '@angular/material/card';
// import { NotesService } from '../services/notes.service';

export interface DialogData {
  title: string;
  description : string;
}

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})

export class AddnotesComponent {
  AddnotesForm: FormGroup;
  constructor (private formBuilder: FormBuilder, private dialogRef:MatDialogRef<AddnotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    // private notesService: NotesService
    )
  {
    this.AddnotesForm=this.formBuilder.group({
      title:new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

 ngOnInit() {

   }
}
