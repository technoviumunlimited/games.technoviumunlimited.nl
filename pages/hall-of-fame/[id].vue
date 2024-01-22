<template>
    <div class="relative h-full flex items-center justify-center">
        <!-- White background -->
        <div class="absolute left-0 top-0 h-full w-2/5 bg-gray-300"></div>

        <!-- Black background -->
        <div class="absolute right-0 top-0 h-full w-3/5"></div>

        <!-- Content container -->
        <div class="flex items-center w-full z-10">
            <!-- Text container -->
            <div class="w-2/5 text-black bg-transparent p-8">
                <p>Worked on:</p>
                <p>Frontend</p>
            </div>

            <!-- Image overlay with padding -->
            <div class="w-1/4 py-40">
                <img src="../../public/img/book.png" alt="Your Image" class="w-full h-full object-cover">
            </div>

            <!-- Text container -->
            <div class="w-3/5 bg-transparent p-8">
                <p>Naam</p>
                <p>Positie</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </p>
            </div>
        </div>
    </div>
</template>