import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { TesteComponent } from './teste/teste.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'caracteres', component: CharactersComponent},
  {path: 'cliente', component: TesteComponent},
  {path: 'tabelas', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
