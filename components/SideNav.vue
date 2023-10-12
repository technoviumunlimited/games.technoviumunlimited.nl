<template>
	<div class="navbar-menu relative z-50 group" :class="{ hidden: sidenavActive === 0 }">
		<div @click="toggleClicked" class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav id="sidenav" class="fixed translate-x-0 -translate-x-full transition duration-300 ease-out top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div class="flex items-center mb-8">
				<a href="#/" class="h-10 mr-auto" aria-current="page">
                        <img class="h-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA6CAYAAAANzi8+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAsdJREFUeNrsm7FLG1Ecx99dYhACchWkFASDndop1UWnJJub9j9IsEsnUejiIungajoXMZujl6mjl0kQqglCB0U4pwwdeqABJ+vvJ7/QItfrvUvu3Tvy+8LjJCQv7z7v93vv+8zvhGD5yoj6wddv19fgUoJW1OA+XGhdaM3rH/teImAACII4glbQcKIRSh3gNIbtKCMJpQqXb9AsTTNgEtrK9MxC4dfP85YSMBQph/TluqsIcAyA40TtwJR4757GkeKnHZjMQqxg6AvKKdxcqnFHzFpKd91S3GAsMWYyBWsoME5K78+NFQwYJofMU9rUUpFK9ZRBcWBC7djBkM1upgQKRndN2ZEAbTY4StyhljSG0oFWgYl0h+kk0umajgcbZPpGcphcfOj7vv7dzIeNEFwHWwDEN6r7u8syBtUzVEwhgDz+n3M+vb/wPxV+8A1qJ799UpEZA4D5LbM+sY9hg8dgGAyDYTAMhsEwGAbDYBgMi8EwGAbDYBgMg2EwDIbBMBgGwxo/MP3dZWtcwMjWFpfHBYwl+ZPramrB3BoZ2Y/shUwjjK6qZN8dbcBcGdLlw0W46aOg9YOi6jjCcG6yuoBxMlNi4R8VDwHCatIyAMACobb4U1qGQEoiegmuow2YtjkltkQv0npDqVId0VDc/PaJPqnUM3LiLFwtTNz6ot2u9DX7MukhYAFSUzswWD3VhrUmQdUgjTyVYDph3/h5YvYprVB0UaUmQLFV+5huaD8jMuJTbu7J15ivDFVQsHStloTBs4VEAfUleJqPuXlx9ybrKoqUSiLOl55TlKq7BTj2i9mHd/BnI6Zh4Zg2n0fKQIbKJKZHBw/ChDa094MHP8nW74jRPB7k0ZbcGCy0iYMhOGW6ST9XiqlTD6jVLRCcVUlX61E6ozu2g4AkBuYvQNazfx94AKQj0wdFkhUA2SUn6wrWaPQowAAPyLkOT2i3uwAAAABJRU5ErkJggg==" alt="logo">
                </a>
				<button @click="toggleClicked" class="navbar-close">
					<svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul>
					<li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-primary/10 hover:text-primary rounded" href="/">Home</a>
					</li>
					<li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-primary/10 hover:text-primary rounded" href="/about">Wat is Technovium Unlimited</a>
					</li>
					<li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-primary/10 hover:text-primary rounded" href="/blogs">Blogs</a>
					</li>
				</ul>
			</div>
			<div class="mt-auto">
				<div v-if="!firebaseUser" class="pt-6">
					<a class="px-4 py-6 mb-3 leading-loose text-sm text-center font-semibold leading-none bg-gray-100 hover:bg-gray-200 rounded-xl flex flex-row gap-3 items-center" href="/account">
                        <i class="fa-solid fa-user"></i><div>Account</div>
                    </a>
					<a class="px-4 py-3 mb-2 leading-loose text-xs text-center text-light font-semibold hover:text-default rounded-xl flex flex-row gap-2 items-center justify-center" href="/register">
                        <i class="fa-solid fa-right-from-bracket"></i><div>Logout</div>
                    </a>
				</div>
                <div v-else class="pt-6">
					<a class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="/login">Login</a>
					<a class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-primary hover:bg-primary/80  rounded-xl" href="/register">Register</a>
				</div>
			</div>
		</nav>
    </div>
</template>
<script setup>
    const emit = defineEmits(["clicked"]);

    const firebaseUser = useFirebaseUser();

    const props = defineProps({
        sidenavActive: Number
    });

    function toggleClicked () {
        const navElement = document.querySelector('#sidenav');
        if (navElement) {
            navElement.classList.toggle('-translate-x-full');
        }
        setTimeout(() => {
            emit('clicked');
        }, 300);
    };
</script>

<script>
export default {
  mounted() {
    // Delay the removal of the class by a few milliseconds (e.g., 300ms)
    setTimeout(() => {
      this.removeTranslateXClass();
    }, 300);
  },
  methods: {
    removeTranslateXClass() {
      // Remove the -translate-x-full class
      const navElement = document.querySelector('#sidenav');
      if (navElement) {
        navElement.classList.remove('-translate-x-full');
      }
    }
  }
}
</script>