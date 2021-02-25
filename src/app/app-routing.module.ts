import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./Components/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./Components/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./Components/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },  {
    path: 'assessment',
    loadChildren: () => import('./components/assessment/assessment.module').then( m => m.AssessmentPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./components/quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'experiments',
    loadChildren: () => import('./components/experiments/experiments.module').then( m => m.ExperimentsPageModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./components/skills/skills.module').then( m => m.SkillsPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./components/contactus/contactus.module').then( m => m.ContactusPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
