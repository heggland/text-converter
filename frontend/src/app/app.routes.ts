import { Routes } from '@angular/router';
import {ConvertComponent} from './pages/convert/convert.component';
import {DocsComponent} from './pages/docs/docs.component';

export const routes: Routes = [
  {path: '', component: ConvertComponent},
  {path: 'docs', component: DocsComponent},
];
