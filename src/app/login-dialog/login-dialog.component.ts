import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormGroupDirective, NgForm, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/** Error when invalid control is dirty, touched, or submitted. */
export class UvsItyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  loginForm = new FormGroup({
    nameFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),

    passwordFormControl: new FormControl('', [
      Validators.required
    ]),
  });

  matcher = new UvsItyErrorStateMatcher();

  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  dialogOff(): void {
    this.dialogRef.close();
  }

  onSubmit() {

    console.log("FORM SEND");
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);

    if (this.loginForm.valid) {
      // this._snackBar.open('Invalid credientials!!', '', {
      //   panelClass: 'ValidationErr'
      // });
    } else {
      // this._snackBar.open('Invalid credientials!!', '', {
      //   panelClass: 'ValidationErr'
      // });
    }

  }

}
