import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarItem } from 'src/app/app.component';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
    @Input('sidebarItems') sidebarItems: SidebarItem[] = [];
    activeUrl: string = '';

    constructor(private readonly router: Router) {}

    onSidebarNavigation(sidebarItem: SidebarItem) {
        this.activeUrl = sidebarItem.link;
        this.router.navigateByUrl(sidebarItem.link);
    }
}
