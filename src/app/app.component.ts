import { Component } from "@angular/core";
import { testDecorator } from "./testDecorator";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
@testDecorator({name:"ghoul"})
export class AppComponent {
  title = "app";

  constructor() {
    console.log("test", this['name']());
  }
}
