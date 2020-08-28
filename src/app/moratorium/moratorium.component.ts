import { Component, VERSION, ChangeDetectorRef, ViewChild } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import { MatSliderChange } from "@angular/material/slider";


@Component({
  selector: "my-app",
  templateUrl: "./moratorium.component.html",
  styleUrls: ["./moratorium.component.css"]
})
export class MoratoriumComponent {

  value = 1500000;

}
