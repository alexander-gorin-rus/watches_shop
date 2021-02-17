import { takeLatest, put, all, call } from 'redux-saga/effects';
import { 
    GOOGLE_SIGN_IN_START, 
    EMAIL_SIGN_IN_START, 
    CHECK_USER_SESSION,
    SIGN_OUT_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_START
} from '../types';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/Firebase';
import { 
    signInSuccess, 
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure 
} from './user.action'

export function* getSnapShotFromUserAuth(userAuth, additionalData){
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        })) 
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return
        yield getSnapShotFromUserAuth(userAuth)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signOut(){
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* onSignOutStart(){
    yield takeLatest(SIGN_OUT_START, signOut);
}

export function* signInWithGoogle(){
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signUp({payload: { email, password, displayName }}){
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
        );
        yield put(signUpSuccess({ user, additionalData: { displayName } }))
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* singInAfterSignUp({ payload: { user, additionalData } }){
    yield getSnapShotFromUserAuth(user, additionalData)
}

export function* onGoogleSignInStart(){
    yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail({ payload: {email, password} }){
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotFromUserAuth(user);
    } catch (error) {
        yield put(signInSuccess(error))
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession(){
    yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignUpStart(){
    yield takeLatest(SIGN_UP_START, signUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(SIGN_UP_SUCCESS, singInAfterSignUp)
}

export function* userSagas(){
    yield all([
                call(onGoogleSignInStart), 
                call(onEmailSignInStart), 
                call(isUserAuthenticated),
                call(onSignOutStart),
                call(onSignUpStart),
                call(onSignUpSuccess),
            ])
}
