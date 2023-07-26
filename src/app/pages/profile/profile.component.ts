import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface TabItem {
    title: string;
    icon: string;
    link: string;
}

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    tabItems: TabItem[] = [
        {
            title: 'Posts',
            icon: 'table',
            link: 'posts',
        },
        {
            title: 'Reels',
            icon: 'videocam',
            link: 'reels',
        },
        {
            title: 'Saved',
            icon: 'bookmarks',
            link: 'saved',
        },
        {
            title: 'Tagged',
            icon: 'account_circle',
            link: 'tagged',
        },
    ];

    constructor(private readonly router: Router) {}

    onTabChange(selectedIndex: number) {
        this.router.navigate(['/profile', this.tabItems[selectedIndex].link]);
    }
}
