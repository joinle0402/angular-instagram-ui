import { Component } from '@angular/core';

export interface Post {
    image: string;
    likeCount: number;
    commentCount: number;
}

@Component({
    selector: 'app-profile-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
    posts: Post[] = [
        {
            image: 'https://images.unsplash.com/photo-1690112019146-46c54fa4f738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
            likeCount: 5,
            commentCount: 10,
        },
        {
            image: 'https://images.unsplash.com/photo-1690068867652-3fd1be61f856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            likeCount: 9,
            commentCount: 30,
        },
        {
            image: 'https://images.unsplash.com/photo-1689874638283-b44e644b3e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
            likeCount: 10,
            commentCount: 9,
        },
    ];
}
