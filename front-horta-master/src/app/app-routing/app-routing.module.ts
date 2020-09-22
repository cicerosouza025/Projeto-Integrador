import { PlantasComponent } from './../plantas/plantas.component';
import { LoginComponent } from './../login/login.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PragasComponent } from '../pragas/pragas.component';
import { InscrevaSeComponent } from '../inscreva-se/inscreva-se.component';
import { OqueehComponent } from '../oqueeh/oqueeh.component';
import { PorqueusarComponent } from '../porqueusar/porqueusar.component';
import { InspiracaoComponent } from '../inspiracao/inspiracao.component';
import { SobreComponent } from '../sobre/sobre.component';
import { MarcaComponent } from '../marca/marca.component';
import { TermosComponent } from '../termos/termos.component';
import { PrivacidadeComponent } from '../privacidade/privacidade.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'plantas', component: PlantasComponent},
  { path: 'pragas', component: PragasComponent},
  { path: 'inscreva-se', component: InscrevaSeComponent},
  { path: 'oqueeh', component: OqueehComponent},
  { path: 'porqueusar', component: PorqueusarComponent},
  { path: 'inspiracao', component: InspiracaoComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'marca', component: MarcaComponent},
  { path: 'termos', component: TermosComponent},
  { path: 'privacidade', component: PrivacidadeComponent},
  

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
