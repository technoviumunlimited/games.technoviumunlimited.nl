<template>
    <div class="bg-white">
        <div class="flex flex-row justify-between items-center py-6 font-bold container mx-auto">
            <div class="flex-1 flex flex-row gap-16 items-center justify-between md:justify-start">
                <a href="#/" class="h-10" aria-current="page">
                    <img class="h-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA6CAYAAAANzi8+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAsdJREFUeNrsm7FLG1Ecx99dYhACchWkFASDndop1UWnJJub9j9IsEsnUejiIungajoXMZujl6mjl0kQqglCB0U4pwwdeqABJ+vvJ7/QItfrvUvu3Tvy+8LjJCQv7z7v93vv+8zvhGD5yoj6wddv19fgUoJW1OA+XGhdaM3rH/teImAACII4glbQcKIRSh3gNIbtKCMJpQqXb9AsTTNgEtrK9MxC4dfP85YSMBQph/TluqsIcAyA40TtwJR4757GkeKnHZjMQqxg6AvKKdxcqnFHzFpKd91S3GAsMWYyBWsoME5K78+NFQwYJofMU9rUUpFK9ZRBcWBC7djBkM1upgQKRndN2ZEAbTY4StyhljSG0oFWgYl0h+kk0umajgcbZPpGcphcfOj7vv7dzIeNEFwHWwDEN6r7u8syBtUzVEwhgDz+n3M+vb/wPxV+8A1qJ799UpEZA4D5LbM+sY9hg8dgGAyDYTAMhsEwGAbDYBgMi8EwGAbDYBgMg2EwDIbBMBgGwxo/MP3dZWtcwMjWFpfHBYwl+ZPramrB3BoZ2Y/shUwjjK6qZN8dbcBcGdLlw0W46aOg9YOi6jjCcG6yuoBxMlNi4R8VDwHCatIyAMACobb4U1qGQEoiegmuow2YtjkltkQv0npDqVId0VDc/PaJPqnUM3LiLFwtTNz6ot2u9DX7MukhYAFSUzswWD3VhrUmQdUgjTyVYDph3/h5YvYprVB0UaUmQLFV+5huaD8jMuJTbu7J15ivDFVQsHStloTBs4VEAfUleJqPuXlx9ybrKoqUSiLOl55TlKq7BTj2i9mHd/BnI6Zh4Zg2n0fKQIbKJKZHBw/ChDa094MHP8nW74jRPB7k0ZbcGCy0iYMhOGW6ST9XiqlTD6jVLRCcVUlX61E6ozu2g4AkBuYvQNazfx94AKQj0wdFkhUA2SUn6wrWaPQowAAPyLkOT2i3uwAAAABJRU5ErkJggg==" alt="logo">
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