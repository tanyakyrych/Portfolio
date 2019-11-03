import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PhotosTitleComponent } from './pages/photos-title/photos-title.component';
import { InfoComponent } from './pages/info/info.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AdminComponent } from './admin/admin.component';
import { AdminBlogComponent } from './admin/admin-blog/admin-blog.component';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { AdminRecentComponent } from './admin/admin-recent/admin-recent.component';
import { AdminPortfolioComponent } from './admin/admin-portfolio/admin-portfolio.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminSubscribeComponent } from './admin/admin-subscribe/admin-subscribe.component';
import { AdminGuard } from './auth/admin.guard';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/:category.name/:title', component: PhotosTitleComponent },
  { path: 'info', component: InfoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  {
    path: 'admin', component: AdminComponent, canActivate:[AdminGuard], children: [
      { path: '', redirectTo: 'all-photos', pathMatch: 'full' },
      { path: 'recent', component: AdminRecentComponent },
      { path: 'categories', component: AdminCategoryComponent },
      { path: 'all-photos', component: AdminPortfolioComponent },
      { path: 'contacts', component: AdminContactComponent },
      { path: 'subscribes', component: AdminSubscribeComponent },
      { path: 'blogs', component: AdminBlogComponent },
      { path: 'about', component: AdminAboutComponent },

    ],
  },
  { path: '**', redirectTo: '/home' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
  providers: [AdminGuard]
})
export class AppRoutingModule {
}
