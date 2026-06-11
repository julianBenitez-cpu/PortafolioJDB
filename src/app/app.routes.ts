import { Routes } from '@angular/router';
import { Projects } from './dynamics/projects/projects';
import { Home } from './statics/home/home';
import { AboutMe } from './dynamics/about-me/about-me';
import { Contacts } from './dynamics/about-me/contacts/contacts';
import { Documents } from './dynamics/about-me/documents/documents';

export const routes: Routes = [
    {path: "about-me", component:AboutMe,
        children:[
            {path:"contacts",component:Contacts},
            {path:"documents",component:Documents}
        ]
        
    },
    {path: "projects", component:Projects,},
    {path: "", component: Home,},
];
