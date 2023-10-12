<template>
    <div>
    login
    
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input 
                v-model="Email"
                type="email" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email"
                autocomplete="false"
            >
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>    
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input 
                v-model="Password"
                type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                placeholder="*************"
            >
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        
        <button @click="signin" class="btn btn-primary">Submit</button>
        <div >
            {{ err }}
        </div>
        
    </div>
</template>

<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Email = ref("");
const Password = ref("");
const err = ref("error")
console.log(err.value);
const signin = () => {
    signInWithEmailAndPassword(getAuth(), Email.value, Password.value)
    .then((data) => {
        console.log(data)
        console.log("Successfully loggedin");
        navigateTo("/");
        //router.push('/account')
    })
    .catch((error) => {
        console.log(error.code);
        switch (error.code) {
            case "auth/invalid-email":
                err.value = "Invalid email";
                console.log(err.value);
                //alert(errMsg.value);
                break;
            case "auth/user-not-found":
                err.value = "No account with that email address";
                break;
            case "auth/wrong-password":
                err.value = "Incorrect password";
                break;
            default:
                err.value = "Email or password was incorrect";
                break;
        }
    })
}
</script>