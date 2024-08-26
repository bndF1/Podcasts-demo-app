import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiRoot } from "@taiga-ui/core";

@Component({
  standalone: true,
  imports: [RouterModule, TuiRoot],
  selector: 'app-root',
  template: `<router-outlet />`,
})
export class AppComponent {}
