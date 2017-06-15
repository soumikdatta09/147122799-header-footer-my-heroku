import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ProcessMonitorComponent } from './processMonitor/process-monitor.component';
import { ResourcesTrackerComponent } from './resourcesTracker/resources-tracker.component';
import { ContentComponent } from './content360/content.component';
import { CriticalPathsComponent } from './criticalPaths/critical-paths.component';
import { PatternComponent } from './pattern/pattern.component';
import { HomeContentComponent } from './home/content/homeContent.component';

 const appRoutes: Routes = [
    {
        path: 'home', component: HomeComponent, canActivate: [AuthGuard],
        children: [
            { path: 'index', component: HomeContentComponent },
            { path: 'processmonitor', component: ProcessMonitorComponent },
            { path: 'resourcestracker', component: ResourcesTrackerComponent },
            { path: 'content360', component: ContentComponent },
            { path: 'criticalpaths', component: CriticalPathsComponent },
            { path: 'patternview', component: PatternComponent },
            { path: '', redirectTo: 'index', pathMatch: 'full' }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
export const routing = RouterModule.forRoot(appRoutes);

