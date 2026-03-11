import {
  AsyncPipe,
  NgClass,
  NgComponentOutlet,
} from '@angular/common';
import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

import { NavbarComponent as BaseComponent } from '../../../../app/navbar/navbar.component';
import { slideMobileNav } from '../../../../app/shared/animations/slide';
import { ThemedUserMenuComponent } from '../../../../app/shared/auth-nav-menu/user-menu/themed-user-menu.component';
import { HostListener } from '@angular/core';

/**
 * Component representing the public navbar
 */
@Component({
  selector: 'ds-themed-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
  animations: [slideMobileNav],
  standalone: true,
  imports: [
    AsyncPipe,
    NgbDropdownModule,
    NgClass,
    RouterLink,
    NgComponentOutlet,
    ThemedUserMenuComponent,
    TranslateModule,
  ],
})
export class NavbarComponent extends BaseComponent {
  isInstitutionalOpen = false;

toggleInstitutionalDropdown(event?: Event): void {
  event?.preventDefault();
  event?.stopPropagation();
  this.isInstitutionalOpen = !this.isInstitutionalOpen;
}

closeInstitutionalDropdown(): void {
  this.isInstitutionalOpen = false;
}
@HostListener('document:click')
onDocumentClick(): void {
  this.closeInstitutionalDropdown();
}
}
