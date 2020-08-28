import { Component, VERSION, ChangeDetectorRef, ViewChild } from "@angular/core";
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { Router } from "@angular/router";
import { MatSidenav } from "@angular/material/sidenav";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class FileNode {
  children?: FileNode[];
  name: string;
}
const data = [
  {
    id: 6,
    name: "Job1",
    parentId: 0,
    chainJob: "ONDCDVOZHRAVACO",
    index: 1,
    external: false,
    children: null
  },
  {
    id: 7,
    name: "Job2",
    parentId: 6,
    chainJob: "WUPVMXKCRYRUVNR",
    index: 1,
    external: false,
    children: null
  },
  {
    id: 8,
    name: "Job3",
    parentId: 7,
    chainJob: "QNGGVKICRDNUFAD",
    index: 2,
    external: false,
    children: null
  },
  {
    id: 10,
    name: "Job6",
    parentId: 8,
    chainJob: "OCYUAHUJBCADYYD",
    index: 3,
    external: false,
    children: null
  },
  {
    id: 9,
    name: "Job4",
    parentId: 6,
    chainJob: "WWFLTFYNTEBVHYQ",
    index: 1,
    external: false,
    children: null
  },
  {
    id: 10,
    name: "Job6",
    parentId: 9,
    chainJob: "OCYUAHUJBCADYYD",
    index: 2,
    external: false,
    children: null
  }
];
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // nestedTreeControl: NestedTreeControl<FileNode>;
  // nestedDataSource = new MatTreeNestedDataSource<FileNode>();
  // recursive: boolean = false;
  @ViewChild('sidenav') sidenav: MatSidenav;
   public selectedItem : string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));


  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
    constructor(
    private _ChangeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}
  ngOnInit() {
    // const treeData: FileNode[] = this.treeNode();
    // console.log(treeData);
    // this.nestedTreeControl = new NestedTreeControl<FileNode>(
    //   node => node.children
    // );
    // this.nestedDataSource.data = treeData;
    this.router.navigate(["tree"]);
  }
  // hasNestedChild = (_: number, node: FileNode) =>
  //   !!node.children && node.children.length > 0;

  // treeNode() {
  //   let root = [],
  //     object = {},
  //     node;
  //   data.forEach((item, i) => {
  //     object[item.id] = i;
  //     item.children = [];
  //     node = item;
  //     if (node.parentId !== 0) {
  //       data[object[node.parentId]]["children"].push(node);
  //     } else {
  //       root.push(node);
  //     }
  //   });
  //   return root;
  // }
    closeSideNav() {
  if (this.sidenav.mode=='over') {
    this.sidenav.close();
  }
}
}
