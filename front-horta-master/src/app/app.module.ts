import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InscrevaSeComponent } from './inscreva-se/inscreva-se.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { CadastroCultivoComponent } from './cadastro-cultivo/cadastro-cultivo.component';
import { DetalhesColheitaComponent } from './detalhes-colheita/detalhes-colheita.component';
import { InspiracaoComponent } from './inspiracao/inspiracao.component';
import { LoginComponent } from './login/login.component';
import { MarcaComponent } from './marca/marca.component';
import { OqueehComponent } from './oqueeh/oqueeh.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilDaPlantaComponent } from './perfil-da-planta/perfil-da-planta.component';
import { PlantasComponent } from './plantas/plantas.component';
import { PorqueusarComponent } from './porqueusar/porqueusar.component';
import { PragasComponent } from './pragas/pragas.component';
import { PrivacidadeComponent } from './privacidade/privacidade.component';
import { SobreComponent } from './sobre/sobre.component';
import { TermosComponent } from './termos/termos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MinhasPlantasComponent } from './plantas/minhas-plantas/minhas-plantas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscrevaSeComponent,
    MinhaContaComponent,
    CadastroCultivoComponent,
    DetalhesColheitaComponent,
    InspiracaoComponent,
    LoginComponent,
    MarcaComponent,
    OqueehComponent,
    PerfilComponent,
    PerfilDaPlantaComponent,
    PlantasComponent,
    PorqueusarComponent,
    PragasComponent,
    PrivacidadeComponent,
    SobreComponent,
    TermosComponent,
    HeaderComponent,
    FooterComponent,
    MinhasPlantasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
