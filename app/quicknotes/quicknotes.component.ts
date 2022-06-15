import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddnotesComponent } from '../addnotes/addnotes.component';
export interface DialogData {
    title: string;
    description: string;
}
@Component({
    selector: 'app-quicknotes',
    templateUrl: './quicknotes.component.html',
    styleUrls: ['./quicknotes.component.css']
})
export class QuicknotesComponent {
    title: string;
    description: string;
    constructor(private dialog: MatDialog) {
        this.title='';
        this.description='';
    }

    
    openDialogBox() {
            const dialogRef = this.dialog.open(AddnotesComponent, {       
              width: '35%',
              data: {title: this.title, description: this.description},        
            });        
            dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
                    
             this.title=result.value.title;
            this.description = result.value.description;      
        });
    }
}




// import {Component, OnInit} from '@angular/core';

// export class Quicknotes {  
//     title!: String;  
//     content!: String;  }
// @Component({  
// selector: 'app-quicknotes',  
// templateUrl: './quicknotes.component.html',  
// styleUrls: ['./quicknotes.component.css']})

// export class QuicknotesComponent implements OnInit {

// titleModel: String;  
// contentModel: String;  
// todoModel: String;  
// quicknotes: Quicknotes[];  
// constructor() {    
// this.titleModel = '';    
// this.contentModel = '';    
// this.todoModel = '';    
// const defaultQuicknotes: Quicknotes = {      
// title: 'my note',      
// content: 'This is default note',        
// };    
// this.quicknotes = [defaultQuicknotes];  }  ngOnInit() {  }


//  createQuicknotes() {    
// const newQuicknotes: Quicknotes = {      
// title: this.titleModel,      
// content: this.contentModel,    
// };    
// this.quicknotes.push(newQuicknotes);      
// this.titleModel = this.todoModel = this.contentModel = '';  
// }}