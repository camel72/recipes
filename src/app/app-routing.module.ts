import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from  "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesDetailComponent } from "./recipes/recipes-list/recipes-detail/recipes-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
    {path: '', redirectTo:'/recipes', pathMatch:'full'},
    {path: 'recipes', component: RecipesComponent, children:[
        {path: '', component: RecipeStartComponent},
        {path: 'new', component:RecipeEditComponent},
        {path:':id',component: RecipesDetailComponent},  
        {path: 'new/:id', component:RecipeEditComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {


}