import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddnotesComponent } from '../addnotes/addnotes.component';
import { Note } from './notes';


@Component({
  selector: 'app-quicknotes',
  templateUrl: './quicknotes.component.html',
  styleUrls: ['./quicknotes.component.css']
})
export class QuicknotesComponent implements OnInit {

  title!: String;
  description!: String;

  noteList: Note[] = [];

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openDialogBox()  
  {
    const dialogRef = this.dialog.open(AddnotesComponent, {
      width: '35%',
      data: {title: this.title, description: this.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      const currentNote={
      title: result.value.title,
      description: result.value.description  
      }
      this.noteList.push(currentNote);  
    });
   }
}