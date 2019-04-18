import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RentalComponent } from './rental.component';

const routes: Routes = [
    {
        path: 'rentals',
        component: RentalComponent
    }
];

@NgModule({
    declarations: [
        RentalComponent
    ],
    imports: [
        CommonModule,
  	    RouterModule.forChild(routes),
        HttpClientModule,
    ],
    providers: [

    ]
})

export class RentalModule {}