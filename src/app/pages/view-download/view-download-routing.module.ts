import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDownloadPage } from './view-download.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDownloadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDownloadPageRoutingModule {}
