<template>
    <section class="form-wrapper">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-5">
                        <div class="form-div text-center">
                            <h2>Register</h2>
                            <p>Enter your account details below</p>
                            <div class="form-group mt-5">
                                <input class="form-control" type="email" v-model="Email"  placeholder="Email address">
                                <input class="form-control" type="password" v-model="Password" placeholder="Password">
                            </div>
                            <div class="form-group form-check-label">
                                <label for="tarms-check">
                                <input class="d-none" type="checkbox" id="tarms-check" checked=""><span class="checkbox"></span>
                                <p>I agree to the <a href="term.html"> Terms &amp; Condition </a></p>
                                </label>
                            </div>
                            <div class="form-group button-block text-center">
                                <button class="form-btn"  @click="register">register</button>
                                <p class="sign-up-text">Already have an account?<a href="/login">Log in</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
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
        <button @click="register" class="btn btn-primary">Submit</button>
    
</template>

<script setup>
import {ref} from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const Email = ref("");
const Password = ref("");
const router = useRouter();
const register = () => {
    createUserWithEmailAndPassword(getAuth(), Email.value, Password.value)
    .then((data) => {
        console.log(data)
        console.log("Successfully registered");
        router.push('/account')
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
    })
}
</script>