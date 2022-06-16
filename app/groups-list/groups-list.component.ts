import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { GroupsComponent } from '../groups/groups.component';
import { Group } from './group';
import { GroupService } from './groupService';




@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit, OnDestroy {
  // id!: String;
  // title!: String;
  // description!: String;
  sub!: Subscription;
  groupList: Group[] = [];

  constructor(public dialog : MatDialog, private api: ApiService, private groupService: GroupService) { }

  ngOnInit(): void {
    this.sub= this.groupService.getGroups().subscribe({
      next: groups=> {
        this.groupList= groups;
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
}

  openDialogBox()  
  {
    const dialogRef = this.dialog.open(GroupsComponent, {
      width: '35%'
    });

    dialogRef.afterClosed().subscribe(result => {
      const currentGroup={
      id: '',
      title: result.value.title,
      description: result.value.description  
      }
      this.groupList.push(currentGroup);  
    });
   }

  //  newGuid() {
  //   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  //     var r = Math.random() * 16 | 0,
  //       v = c == 'x' ? r : (r & 0x3 | 0x8);
  //     return v.toString(16);
  //   });
  // }
}
