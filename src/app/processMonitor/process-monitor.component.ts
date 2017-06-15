import { Component } from '@angular/core';
import { Language } from 'angular-l10n';


@Component({
  selector: 'process-monitor',
  templateUrl: './process-monitor.component.html'
})
export class ProcessMonitorComponent {
  @Language() lang: string;
}
