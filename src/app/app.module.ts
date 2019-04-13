import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryComponent} from './recipes/category/category.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesItemComponent} from './recipes/recipes-list/recipes-item/recipes-item.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipesDetailComponent } from './recipes/recipes-list/recipes-detail/recipes-detail.component';
import { DropDownDirectiveDirective } from './directives/drop-down-directive.directive';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,            
    RecipesComponent,
    RecipesListComponent,
    RecipesItemComponent,
    HeaderComponent,
    CategoryComponent,
    RecipesDetailComponent,
    DropDownDirectiveDirective,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
