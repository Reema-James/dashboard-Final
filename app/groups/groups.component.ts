import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../api.service';

export interface DialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html', 
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent {
  addGroupForm: FormGroup;
  display= true;
  constructor(private formBuilder: FormBuilder, private dialogRef:MatDialogRef<GroupsComponent>)  
  {
        this.addGroupForm = this.formBuilder.group({
        title: new FormControl('', Validators.required),
        description: new FormControl('')
          })
  }

  // addGroup()
  // {
  //   this.api.postdata(this.addGroupForm.value).subscribe();
  // }
// private api: ApiService,
  onNoClick(): void {
    this.dialogRef.close();
  }
}

//@Inject(MAT_DIALOG_DATA) public data: DialogData