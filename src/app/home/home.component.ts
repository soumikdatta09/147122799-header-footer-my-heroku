import { Component, OnInit } from '@angular/core';
import { Language } from 'angular-l10n';

@Component({
    templateUrl : 'home.component.html',
    styleUrls : ['home.component.css']
})

export class HomeComponent implements OnInit {
    @Language() lang: string;
    public data: string;
    public role: string;

    ngOnInit() {
        if (window.sessionStorage.getItem('currentUser')) {
            this.data = JSON.parse(window.sessionStorage.getItem('currentUser')).name;
            this.role = JSON.parse(window.sessionStorage.getItem('currentUser')).role;
        }
    }

    toggleNavs() {
        alert('hi');
        // sidenav.toggle();
        // if (sidenav.closed == true)
        //     sidenav.align = end;
        // else
        //     sidenav.align = start;
        // sidenav2.toggle();
        // if (sidenav2.closed == true)
        //     sidenav2.align = end;
        // else
        //     sidenav2.align = start;
    }
}

