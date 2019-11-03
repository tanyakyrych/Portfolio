import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-carousels';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';


import { NgxMaskModule } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { InfoComponent } from './pages/info/info.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminGuard } from './auth/admin.guard';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AdminComponent } from './admin/admin.component';
import { AdminBlogComponent } from './admin/admin-blog/admin-blog.component';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { AdminPortfolioComponent } from './admin/admin-portfolio/admin-portfolio.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminSubscribeComponent } from './admin/admin-subscribe/admin-subscribe.component';
import { SelectPipe } from './shared/pipes/select.pipe';
import { PhotosTitleComponent } from './pages/photos-title/photos-title.component';
import { PortfolioCategoryComponent } from './pages/portfolio-category/portfolio-category.component';
import { AdminRecentComponent } from './admin/admin-recent/admin-recent.component';
import { CarouselBootstrapComponent } from './components/carousel-bootstrap/carousel-bootstrap.component';
import { MatchValueDirective } from './directives/match-value.directive';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    InfoComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    AdminComponent,
    AdminBlogComponent,
    AdminContactComponent,
    AdminPortfolioComponent,
    AdminCategoryComponent,
    SelectPipe,
    PhotosTitleComponent,
    PortfolioCategoryComponent,
    AdminRecentComponent,
    AdminSubscribeComponent,
    CarouselBootstrapComponent,
    MatchValueDirective,
    GalleryComponent,
    AdminAboutComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    CarouselModule,
    NgbModule,
    NgbCarouselModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,

    NgxMaskModule.forRoot(),

    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
     
  ],
  providers: [AdminGuard,
   
],
  bootstrap: [AppComponent]
})

export class AppModule {

}



