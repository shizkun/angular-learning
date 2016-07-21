import {Component, Input} from '@angular/core';
import {Hero} from 'app/models/hero/hero';
@Component({
    selector: 'my-hero-detail',
    templateUrl: '/app/hero-detail/hero-detail.component.html'
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
} 