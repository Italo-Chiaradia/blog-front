import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

export const publicRoutes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
  },
  { path: '**', redirectTo: 'posts' },
];
