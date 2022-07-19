import { Routes } from '@angular/router';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';

export const projectRoutes: Routes = [
    { path: '', redirectTo: 'applications', pathMatch: 'full' },
    { path: 'getting-started', component: GettingStartedComponent },
    { path: 'applications', loadChildren: () => import('../applications/applications.module').then(m => m.ApplicationsModule) },
    { path: 'tools', loadChildren: () => import('../tools/tools.module').then(m => m.ToolsModule) }
]