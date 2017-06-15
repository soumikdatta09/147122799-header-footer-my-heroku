import { NgModule, APP_INITIALIZER, Injectable }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslationModule, LocaleService, TranslationService } from 'angular-l10n';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import {MdCardModule} from '@angular/material';
import { AuthGuard } from './guards/auth.guard';
import { ContentComponent } from './content360/content.component';
import { CriticalPathsComponent } from './criticalPaths/critical-paths.component';
import { ProcessMonitorComponent } from './processMonitor/process-monitor.component';
import { HomeComponent } from './home/home.component';
import { ResourcesTrackerComponent } from './resourcesTracker/resources-tracker.component';
import { LoginComponent } from './login/login.component';
import { LoginService} from './login/login.service';
import { PatternComponent } from './pattern/pattern.component';
import { RouterLinkStubDirective } from './testing/router-stubs';
import { RouterOutletStubComponent } from './testing/router-stubs';
import { ProcessMonitorService } from './processMonitor/process-monitor.service';
import { HomeContentComponent } from './home/content/homeContent.component';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

@Injectable() export class LocalizationConfig {

    constructor(public locale: LocaleService, public translation: TranslationService) { }

    load(): Promise<void> {
        this.locale.addConfiguration()
            .addLanguages(['en', 'it'])
            .setCookieExpiration(30)
            .defineLanguage('en');

        this.translation.addConfiguration()
            .addProvider('./assets/locale-');

        return this.translation.init();
    }
}

// AoT compilation requires a reference to an exported function.
export function initLocalization(localizationConfig: LocalizationConfig): Function {
    return () => localizationConfig.load();
}

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing,
                MaterialModule,
                BrowserAnimationsModule, MdCardModule, TranslationModule.forRoot()],
    declarations: [AppComponent, HomeContentComponent, ContentComponent, CriticalPathsComponent, ProcessMonitorComponent,
                    HomeComponent, ResourcesTrackerComponent, LoginComponent, PatternComponent,
                    RouterLinkStubDirective, RouterOutletStubComponent],

    providers: [AuthGuard, LoginService, ProcessMonitorService, LocalizationConfig,
        {
            provide: APP_INITIALIZER,
            useFactory: initLocalization,
            deps: [LocalizationConfig],
            multi: true
        } ],

    bootstrap: [AppComponent]
})

export class AppModule { }
