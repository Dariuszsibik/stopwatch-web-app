import {
  NgModule
} from '@angular/core';
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
  MatListModule,
  MatSnackBarConfig,
  MAT_SNACK_BAR_DEFAULT_OPTIONS
} from '@angular/material';

const MAT_SNACK_BAR_GLOBAL_CONFIG: MatSnackBarConfig = {
  duration: 2500,
  verticalPosition: 'bottom',
  horizontalPosition: 'center'
}

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
  MatListModule,
];

@NgModule({
  exports: [...MATERIAL_MODULES],
  declarations: [],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACK_BAR_GLOBAL_CONFIG}
  ]
})
export class MaterialModule {}
