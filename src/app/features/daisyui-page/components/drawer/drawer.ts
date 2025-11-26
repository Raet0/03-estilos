import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ThemeSwitcher } from "../../../../shared/components/theme-switcher/theme-switcher";
@Component({
  selector: 'drawer',
  imports: [RouterLink, RouterLinkActive, ThemeSwitcher],
  templateUrl: './drawer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Drawer { 

}
