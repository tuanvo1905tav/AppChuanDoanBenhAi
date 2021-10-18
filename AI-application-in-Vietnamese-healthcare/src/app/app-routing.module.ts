import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './component/about/about.component'
import { ContactComponent } from './component/contact/contact.component'
import { FeedbackComponent } from './component/feedback/feedback.component'
import { HomeComponent } from './component/home/home.component'
import { InfectionPredictionStepComponent } from './component/infection-prediction-step/infection-prediction-step.component'
import { InfectionPredictionComponent } from './component/infection-prediction/infection-prediction.component'
import { OurTeamComponent } from './component/our-team/our-team.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'infection-prediction', component: InfectionPredictionComponent },
  {
    path: 'infection-prediction-step', component: InfectionPredictionStepComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
