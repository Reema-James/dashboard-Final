import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  getData() {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }

// getAll(){
//   return this.groups;
// }

// get(id:number){
//   return this.groups[id];
// }

// getId(grp:Group){
//   return this.groups.indexOf(grp);
// }

// add(grp:Group){
//   let newLength= this.getGroups.push(grp);
//   let index=newLength-1;
//   return index;
// }

// update(id:number, title:string, description:string){
//   let grp= this.groups[id];
//   grp.title= title;
//   grp.description=description;
// }

// delete(id:number){
//   this.getGroups.splice(id,1);
// }

  getdata(){
    return this.http.get("http://localhost:3000/getData")
  }

  postdata(data:any){
    return this.http.post<any>("http://localhost:3000/group",data)
  }


getGroups(){
  return this.http.get("http://localhost:3000/groups")
}

getNotes(){
  return this.http.get("http://localhost:3000/notes")
}

getFavourites(){
  return this.http.get<any>("http://localhost:3000/favourites")

}
}