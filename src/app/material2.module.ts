import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({

  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule, MatIconModule,
    MatSidenavModule, MatToolbarModule, MatListModule, MatTooltipModule, MatTabsModule,
    MatTableModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSnackBarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule, MatIconModule,
    MatSidenavModule, MatToolbarModule, MatListModule, MatTooltipModule, MatTabsModule,
    MatTableModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSnackBarModule]
})
export class Material2Module { }
