import { HeroService } from './services/hero.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Component, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}