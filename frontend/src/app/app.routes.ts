import { Routes } from '@angular/router';
import {ConvertComponent} from './convert/convert.component';
import {DocsComponent} from './docs/docs.component';

export const routes: Routes = [
  {path: '', component: ConvertComponent},
  {path: 'docs', component: DocsComponent},
];
