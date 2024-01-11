<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <div class="bg-white">
            <div class="flex flex-row justify-between items-center py-6 font-bold container mx-auto">
                <div class="flex-1 flex flex-row gap-16 items-center justify-between md:justify-start">
                    <a href="#/" class="h-10" aria-current="page">
                        <img class="h-full" src="/img/logo.svg" alt="logo">
                    </a>
                    <button @click="toggleClicked" class="block md:hidden" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars-staggered"></i>
                    </button>
                    <div class="hidden md:block" id="navbarNavDropdown">
                        <ul class="flex flex-row gap-8 items-center">
                            <li class="nav-item hover:text-primary"><a href="/" class="router-link-active router-link-exact-active nav-link" aria-current="page">Home</a>
                            </li>
                            <li class="nav-item hover:text-primary">
                                <a class="nav-link" href="/about">Wat is Technovium Unlimited</a>
                            </li>
                            <li class="nav-item hover:text-primary">
                                <a class="nav-link" href="/blogs">Blogs</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="group relative hidden md:block">
                    <div class="flex flex-row items-center gap-3 justify-end group-hover:text-primary"><i class="fa-solid fa-user"></i><span>My Account</span></div>
                    <div class="block absolute pt-5 right-0 top-full min-width-[160px] z-20 transition-[opacity,margin] duration group-hover:opacity-100 opacity-0 min-w-[15rem] z-30">
                        <div v-if="firebaseUser" class="bg-bgdefault shadow-lg rounded-lg py-4 px-2 flex flex-col gap-2">
                            <NuxtLink to="/account" class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-gray-800 hover:bg-bgsecondary focus:ring-2 focus:ring-primary">
                                Account 
                            </NuxtLink>
                            <NuxtLink to="/logout" class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-gray-800 hover:bg-bgsecondary focus:ring-2 focus:ring-primary">
                                Logout 
                            </NuxtLink>
                        </div>

                        <div v-else class="bg-bgdefault shadow-lg rounded-lg py-4 px-2 flex flex-col gap-2">
                            <NuxtLink to="/register" class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-gray-800 hover:bg-bgsecondary focus:ring-2 focus:ring-primary">
                                Register 
                            </NuxtLink>
                            <NuxtLink to="/login" class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-gray-800 hover:bg-bgsecondary focus:ring-2 focus:ring-primary">
                                Login 
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script setup>
    const emit = defineEmits(["clicked"]);

    const firebaseUser = ref(useFirebaseUser());

    function toggleClicked () {
        emit('clicked');
    };
</script>