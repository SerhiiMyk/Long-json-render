import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageListPageComponent } from './pages/image-list-page/image-list-page.component';
import { ImageDetailsPageComponent } from './pages/image-details-page/image-details-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'image-list', pathMatch: 'full' },
  { path: 'image-list', component: ImageListPageComponent },
  { path: 'item-details/:id', component: ImageDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
