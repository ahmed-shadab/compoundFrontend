import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoundsViewComponent } from './compounds-view/compounds-view.component';
import { CompoundViewIdComponent } from './compound-view-id/compound-view-id.component';

const routes: Routes = [
  { path: '', component: CompoundsViewComponent },
  { path: 'compound/:id', component: CompoundViewIdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
