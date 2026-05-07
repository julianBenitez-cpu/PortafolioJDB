import { Routes } from '@angular/router';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Proyectos } from './proyectos/proyectos';
import { Contactos } from './sobre-mi/contactos/contactos';
import { Certificaciones } from './sobre-mi/certificaciones/certificaciones';

export const routes: Routes = [
    {path: "sobre-mi", component:SobreMi,
        children:[
            {path:"contactos",component:Contactos},
            {path:"certificaciones",component:Certificaciones}
        ]
        
    },
    {path: "proyectos", component:Proyectos,}
];
