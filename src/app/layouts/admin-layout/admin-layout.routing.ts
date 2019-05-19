import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'home', loadChildren: '../../pages/home/home.module#HomeModule' },
    { path: 'work-search', loadChildren: '../../pages/work-search/work-searfch.module#WorkSearchModule' },
    { path: 'announce', loadChildren: '../../pages/announce/announce.module#AnnounceModule' },
    { path: 'applicant', loadChildren: '../../pages/applicant/applicant.module#ApplicantModule' },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent }
];
            