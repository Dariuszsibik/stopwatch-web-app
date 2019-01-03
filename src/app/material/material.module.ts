import { NgModule } from '@angular/core';
import {
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule} from '@angular/material';


const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule
];

@NgModule({
  exports: [...MATERIAL_MODULES],
  declarations: []
})
export class MaterialModule { }
