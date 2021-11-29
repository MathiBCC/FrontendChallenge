import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';




@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        SidebarComponent,
        TopbarComponent,
        FooterComponent,
        LayoutComponent,
    ],
    exports: [
        SidebarComponent,
        TopbarComponent,
        FooterComponent,
        LayoutComponent,
    ],
    providers: [

    ]
})
export class LayoutModule { }
