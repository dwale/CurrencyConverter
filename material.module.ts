import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule, MatProgressSpinnerModule, MatCardModule, MatButtonModule,
  MatIconModule, MatSelectModule, MatProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule , MatInputModule, MatProgressSpinnerModule, MatCardModule,
    MatIconModule, MatSelectModule , MatProgressSpinnerModule, MatProgressBarModule],
  exports: [MatButtonModule , MatProgressSpinnerModule, MatCardModule, MatIconModule,
    MatSelectModule, MatInputModule, MatProgressSpinnerModule, MatProgressBarModule]
})
export class MaterialModule { }
