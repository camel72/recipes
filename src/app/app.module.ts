import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryComponent} from './recipes/category/category.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesItemComponent} from './recipes/recipes-list/recipes-item/recipes-item.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,            
    RecipesComponent,
    RecipesListComponent,
    RecipesItemComponent,
    HeaderComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
