import { Component, OnInit, Output } from '@angular/core';
import { UtilsService } from '../utils/utils.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Output() updateTable = new EventEmitter<any[]>();
  FILE_SYSTEM_FILES_COUNTER = 3; //using simple fs capabilities n/a in angular
  nodes : any[];  

  constructor(private _utilsService: UtilsService) {}  

  ngOnInit() {
      this.getFullTree();       
  }

  onFolderClick($event){
    let files : any[] = $event.node.data.files;
    this.updateTable.emit(files);
  }

  getFullTree(){
    let foldersCounter = 0;
    let childrenFileCount = this.FILE_SYSTEM_FILES_COUNTER;
    this._utilsService.getJSON("./src/app/data/server.json")
    .subscribe((rootData: any[]) => {      
      rootData.forEach(node => {        
        this.populateChildren(node, rootData, childrenFileCount, foldersCounter);        
      });      
    },
    error => console.log(error))
    foldersCounter++;
  }

  populateChildren(node, rootData, childrenFileCount, foldersCounter){    
      if(node.hasChildren){        
        this._utilsService.getJSON("./src/app/data/" + node.id + ".json")
        .subscribe((childrenData: any[]) => {       
          node.children = childrenData;
          node.children.forEach(grandNode => {
            this.populateChildren(grandNode, rootData, childrenFileCount, foldersCounter);                       
            if(childrenFileCount==foldersCounter){
              this.nodes = rootData;
            }
          });          
        },
        error => console.log(error));
        foldersCounter++;
      }    
  }
  
}