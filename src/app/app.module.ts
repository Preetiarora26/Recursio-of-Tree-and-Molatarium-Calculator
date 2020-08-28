import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RouterModule } from "@angular/router";
import { TreeComponent } from './tree/tree.component';
import { MoratoriumComponent } from './moratorium/moratorium.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports:[ BrowserModule, BrowserAnimationsModule, FormsModule, MaterialModule ,RouterModule,
      RouterModule.forRoot([
      { path: "tree", component: TreeComponent },
      { path: "moratorium", component: MoratoriumComponent },
    ])],
    providers: [
      {
provide: APP_BASE_HREF,
useValue: '/'
}
  ],    
  declarations: [ AppComponent, TreeComponent, MoratoriumComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { } 