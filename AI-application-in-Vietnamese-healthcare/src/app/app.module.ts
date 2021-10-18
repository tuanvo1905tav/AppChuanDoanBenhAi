import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './component/home/home.component'
import { ContactComponent } from './component/contact/contact.component'
import { OurTeamComponent } from './component/our-team/our-team.component'
import { FeedbackComponent } from './component/feedback/feedback.component'
import { AboutComponent } from './component/about/about.component'
import { MenuComponent } from './component/menu/menu.component'
import { FooterComponent } from './component/footer/footer.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { InfectionPredictionComponent } from './component/infection-prediction/infection-prediction.component'
import { HttpClientModule } from '@angular/common/http'
import { NzStepsModule } from 'ng-zorro-antd/steps'
import { InfectionPredictionStepComponent } from './component/infection-prediction-step/infection-prediction-step.component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzInputModule } from 'ng-zorro-antd/input'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'
import { CarouselComponent } from './component/carousel/carousel.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    OurTeamComponent,
    FeedbackComponent,
    AboutComponent,
    MenuComponent,
    FooterComponent,
    InfectionPredictionComponent,
    InfectionPredictionStepComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzStepsModule,
    NzButtonModule,
    NzInputModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
