import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';


export const routes: Routes = [
    {path:'',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'skills',component:SkillsComponent},
    {path:'experience',component:ExperienceComponent},
    {path:'project',component:ProjectComponent},
    {path:'**',component:PageNotFoundComponent}
];
