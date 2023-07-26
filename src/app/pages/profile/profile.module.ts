import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { ReelsComponent } from './components/reels/reels.component';
import { ProfileComponent } from './profile.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
    declarations: [PostsComponent, ReelsComponent, ProfileComponent],
    imports: [CommonModule, ProfileRoutingModule, MaterialModule],
})
export class ProfileModule {}
