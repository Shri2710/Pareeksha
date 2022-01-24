import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';
import { NormaluserGuard } from './guards/normaluser.guard';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { LoadQuizComponent } from './pages/normaluser/load-quiz/load-quiz.component';
import { NormalDashboardComponent } from './pages/normaluser/normal-dashboard/normal-dashboard.component';
import { PreStartComponent } from './pages/normaluser/pre-start/pre-start.component';
import { StartComponent } from './pages/normaluser/start/start.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    canActivate:[LoginGuard]
  },
  {
    path:'login',
    component:LoginUserComponent,
    pathMatch:'full'
  },
  {
    path:'register',
    component:RegisterUserComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:AdminDashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'categories',
        component:ViewCategoryComponent,
      },
      {
        path:'add-category',
        component:AddCategoryComponent,
      },
      {
        path:'quizzes',
        component:ViewQuizzesComponent
      },
      {
        path:'add-quizz',
        component:AddQuizComponent
      },
      {
        path:'quizzes/:qid',
        component:UpdateQuizComponent
      },
      {
        path:'view-questions/:qid/:title',
        component:ViewQuestionsComponent
      },
      {
        path:'add-question/:qid/:title',
        component:AddQuestionComponent
      },
    ]
  },
  {
    path:'normal',
    component:NormalDashboardComponent,
    canActivate:[NormaluserGuard],
    children:[
      {
        path:':catid',
        component:LoadQuizComponent
      },
      {
        path:'instruction/:qid',
        component:PreStartComponent
      }
    ]
  },
  {
    path:'start/:qid',
    component:StartComponent,
    canActivate:[NormaluserGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
