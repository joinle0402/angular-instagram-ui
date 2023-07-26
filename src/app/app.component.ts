import { Component } from '@angular/core';

export interface SidebarItem {
    title: string;
    icon: string;
    link: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    sidebarItems: SidebarItem[] = [
        {
            title: 'Home',
            icon: 'home-outline',
            link: '',
        },
        {
            title: 'Search',
            icon: 'search',
            link: '/search',
        },
        {
            title: 'Explore',
            icon: 'explore',
            link: '/explore',
        },
        {
            title: 'Reels',
            icon: 'videocam',
            link: '/reels',
        },
        {
            title: 'Message',
            icon: 'chat',
            link: '/messages',
        },
        {
            title: 'Notification',
            icon: 'favorite',
            link: '/notifications',
        },
        {
            title: 'Create',
            icon: 'add_circle',
            link: '/create',
        },
        {
            title: 'Profile',
            icon: 'person',
            link: '/profile',
        },
    ];
}
