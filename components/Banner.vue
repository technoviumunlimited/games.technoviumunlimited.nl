<template>
        <div class="flex flex-row items-center justify-between items-center lg:bg-primary relative">
            <div class="absolute lg:static flex-1 z-10 basis-[45%] h-full container mx-auto flex flex-col justify-end py-8 lg:py-0 lg:justify-center gap-5">
                <h2 class="text-3xl lg:text-6xl font-black uppercase">Technovium Unlimited</h2>
                <div class="flex flex-row gap-5 items-center text-sm lg:text-base">
                    <span class="font-black">VERSION 1.7.9</span>
                    <span class="text-light font-black">2023</span>
                    <span class="font-black">Top MBO Opleidingen</span>
                </div>
                <p class="hidden lg:block text-light text-sm lg:text-base">Educatieve projecten, 3D omgevingen en spellen, gemaakt door ROC studenten en docenten.</p>
                <div class="flex flex-row items-center flex-wrap gap-3 lg:gap-8 text-sm lg:text-lg">
                    <a href="#/game/bf2q1Mv7iN1Reln17pf9" class="flex flex-row items-center justify-center gap-3 h-8 w-28 lg:h-12 lg:w-36 bg-bgbuttonprimary text-buttonprimary hover:text-slate-300 rounded-xl uppercase">
                        <i class="fa-solid fa-play"></i>Play
                    </a>
                    <div class="group relative">
                        <div class="flex flex-row items-center justify-center gap-3 h-8 w-28 lg:h-12 lg:w-36 bg-bgbuttonsecondary text-buttonsecondary rounded-xl group-hover:rounded-b-none group-hover:text-primary">
                            <i class="fa-solid fa-share-nodes"></i><span>SHARE</span>
                        </div>
                        <div class="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out absolute top-full left-0 w-full rounded-b-lg -mt-2 bg-bgbuttonsecondary">
                            <div class="shadow flex flex-col gap-3 overflow-hidden items-center group-hover:mt-2 group-hover:border-t border-slate-300">
                                <div class="flex flex-col gap-3 w-fit gap-3 py-3 text-slate-800">
                                    <a class="flex flex-row items-center justify-start gap-3 hover:text-primary" href="#"><i class="fa-brands fa-facebook"></i><span>Facebook</span></a>
                                    <a class="flex flex-row items-center justify-start gap-3 hover:text-primary" href="#"><i class="fa-brands fa-twitter"></i><span>Twitter</span></a>
                                    <a class="flex flex-row items-center justify-start gap-3 hover:text-primary" href="#"><i class="fa-brands fa-pinterest"></i><span>Pinterest</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 basis-full flex items-center justify-center lg:basis-[55%] h-96 min-h-full overflow-hidden relative right-wrap object-cover">
                <video autoplay="" loop="" id="myVideo" class="xl:w-full max-w-none object-center">
                <source src="https://technoviumunlimited.nl/media/play.3dc6e4a3.mp4" type="video/mp4">
                </video>
            </div>
        </div>
</template>