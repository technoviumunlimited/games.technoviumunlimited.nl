<template>
    <section class="form-wrapper">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-5">
                        <div class="form-div text-center">
                            <h2>Login</h2>
                            <p>Enter your account details below</p>
                            <div class="form-group mt-5">
                                <input class="form-control" type="email" v-model="Email" placeholder="Email address">
                                <input class="form-control" type="password" v-model="Password" placeholder="Password">
                            </div>
                            <div class="form-group form-check-label">
                                <label for="tarms-check">
                                <input class="d-none" type="checkbox" id="tarms-check" checked=""><span class="checkbox"></span>
                                <p>Keep me signed in </p>
                                </label>
                            </div>
                            <div class="form-group button-block text-center">
                                <button class="form-btn"  @click="signin" >Login</button>
                                <p class="sign-up-text">No account? You can <a href="/register">create</a> one.</p>
                            </div>
                            <div v-if="errMsg">
                                {{ errMsg }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
</template>

<script setup>
import {ref} from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const Email = ref("");
const Password = ref("");
const router = useRouter();
const errMsg = ref()
const signin = () => {
    signInWithEmailAndPassword(getAuth(), Email.value, Password.value)
    .then((data) => {
        console.log(data)
        console.log("Successfully loggedin");
        router.push('/account')
        
    })
    .catch((error) => {
        console.log(error.code);
        switch (error.code) {
            case "auth/invalid-email":
                errMsg.value = "Invalid email";
                break;
            case "auth/user-not-found":
                errMsg.value = "No account with that email address";
                break;
            case "auth/wrong-password":
                errMsg.value = "Incorrect password";
                break;
            default:
                errMsg.value = "Email or password was incorrect";
                break;
        }
    })
}
</script>