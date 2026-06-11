import { Routes } from '@angular/router';
import { SobreMi } from './dynamics/sobre-mi/sobre-mi';
import { Projects } from './dynamics/projects/projects';
import { Contactos } from './dynamics/sobre-mi/contactos/contactos';
import { Certificaciones } from './dynamics/sobre-mi/certificaciones/certificaciones';
import { Home } from './statics/home/home';

export const routes: Routes = [
    {path: "sobre-mi", component:SobreMi,
        children:[
            {path:"contactos",component:Contactos},
            {path:"certificaciones",component:Certificaciones}
        ]
        
    },
    {path: "projects", component:Projects,},
    {path: "", component: Home,},
];
