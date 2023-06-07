<template>
    login
    
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="Email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>    
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="Password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div v-if="errMsg">
            {{ errMsg }}
        </div>
        <button @click="signin" class="btn btn-primary">Submit</button>
    
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