import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntegerDisplayComponent } from './integer-display/integer-display.component';
import { ArrayDisplayComponent } from './array-display/array-display.component';
import { ComboDisplayComponent } from './combo-display/combo-display.component';
import { UserInputFormComponent } from './user-input-form/user-input-form.component';

const routes: Routes = [
  { path: 'integer', component: IntegerDisplayComponent },
  { path: 'array', component: ArrayDisplayComponent },
  { path: 'combo', component: ComboDisplayComponent },
  { path: 'user-input', component: UserInputFormComponent },
  { path: '', redirectTo: '/integer', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
