import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';

import { ButtonComponent } from './components/button/button.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [ButtonComponent],
    imports: [
        CommonModule,
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatListModule,
    ],
    exports: [
        MatInputModule,
        MatCardModule,
        ButtonComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatListModule,
    ],
    providers: [
        // TODO: Add services here
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpRequestInterceptor,
            multi: true,
        },
    ],
})
export class SharedModule {}
