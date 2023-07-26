import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { ReelsComponent } from './components/reels/reels.component';

const routes: Routes = [
    {
        path: 'posts',
        component: PostsComponent,
    },
    {
        path: 'reels',
        component: ReelsComponent,
    },
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProfileRoutingModule {}
