import {Injectable} from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from '@angular/fire/auth';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable, of, switchMap} from 'rxjs';
import {User} from '../modelos/user/user.model';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  userData: any;
  user$: Observable<firebase.User | null>;

  constructor(private auth: Auth, private afAuth: AngularFireAuth, private afs: AngularFirestore, public router: Router) {
    this.user$ = this.afAuth.authState;
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(user));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        this.afAuth.authState.subscribe((user: any) => {
          if (user) {
            this.router.navigate(['']);
          }
        });
      })
      .catch((error) => {
        console.log('error');
      });
  }

  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
        console.log('hola');
        this.SendVerificationMail();
      })
      .catch((error) => {
        console.log('error');
      });
  }

  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u) => {
        u?.sendEmailVerification();
        this.SignOut();
      })
      .catch((err) => {})
      .then(() => {
        this.router.navigate(['/auth/verify-email-address']);
      });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/auth/login']);
    });
  }

  //register({email, password}: any) {
  //  return this.afAuth.createUserWithEmailAndPassword(email, password);
  //}
  //login({email, password}: any) {
  //  return this.afAuth.signInWithEmailAndPassword(email, password);
  //}
  //loginWithGoogle() {
  //  return this.afAuth.signInWithPopup(new GoogleAuthProvider());
  //}
}
