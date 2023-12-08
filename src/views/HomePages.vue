<script setup>
import HelloWorld from "../components/HelloWorld.vue"
import Navbar from "../components/main_navbar.vue"
</script>

<template>     

  <Navbar/>

<!-- First Section -->
<section>
  <div>
    <div class="bg-cover bg-center w-full py-12" style="    background-image: linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://assets.nicepagecdn.com/d2cc3eaa/499805/images/group-business-people-having-meeting23.jpg');">
      <div class="flex flex-col items-center xl:px-32">          
        <img class="w-5/12 mt-20 sm:w-3/12 sm:mt-14 lg:w-2/12 xl:w-[12%]" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/logo-1.png"/> 
        <p class="text-white underline text-[5rem] leading-none p-8 text-center sm:mt-8 lg:text-8xl xl:text-6xl xl:mx-60">Reinvent What Your Business Could Be</p>
        <button class="bg-[#cbff00] text-[#111111] px-14 sm:px-16 py-4 sm:py-6 mt-8 sm:mt-12 xl:px-12 xl:py-3 xl:text-base text-xl rounded-lg font-bold hover:bg-white hover:text-black uppercase tracking-widest ">About Us</button>
        <span class="mt-4 text-white flex text-xl pt-4 font-semibold sm:mt-16 xl:mt-4 xl:pb-14 xl:text-base">Images From <p class="underline underline-offset-8 ml-1"> Freepik</p></span>
      </div>
    </div>
  </div>  
</section>

 <!-- second Section -->
 <section class="bg-[#cbff00] text-[#111111] pb-8">
        <div class="justify-center py-4 flex flex-col text-center sm:mx-24 lg:mx-10 xl:mx-32">
          <div class="text-4xl font-bold py-8 lg:text-6xl">What We Do</div>
          <div class="grid grid-cols-1 md:grid-cols-2 md:px-4 lg:grid-cols-4" >
           <div class="bg-white p-6 mx-8 md:mx-1 xl:mx-0 md:px-4  xl:px-2 xl:py-8 py-8  items-center flex flex-col mt-4 lg:mx-0">
            <span class=" p-4 text-center mb-6 flex justify-center w-20 h-20 lg:w-28 lg:h-28 xl:w-20 xl:h-20 bg-[#cbff00] rounded-full"> <img class="" src="data:image/png;base64,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"/></span>
            <span class="text-2xl font-bold lg:px-4 xl:text-xl">Research User Needs</span>
              <p class="pt-4 text-base font-medium px-1 lg:px-6">Discover pain points and understand user behaviour</p>
           </div>
           <div class="bg-white p-6 mx-8 md:mx-1 xl:mx-0 md:px-4  xl:px-2  xl:py-8 py-8  items-center flex flex-col mt-4 sm:mt-2 md:mt-4 lg:mx-0 ">
            <span class=" p-4 text-center mb-6 flex justify-center w-20 h-20 lg:w-28 lg:h-28 xl:w-20 xl:h-20  bg-[#cbff00] rounded-full"> <img class="" src="data:image/png;base64,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"/></span>
            <span class="text-2xl font-bold lg:px-10 xl:px-0 xl:text-xl">Business Strategy</span>
              <p class="pt-4 text-base font-medium px-1 lg:px-6">Validate ideas with an interactive prototype of your vision</p>
           </div>
           <div class="bg-white p-6 mx-8 md:mx-1 md:px-4  xl:px-2 xl:py-8 py-8  items-center flex flex-col mt-4 sm:mt-2 md:mt-2 lg:mt-4 lg:mx-0 ">
            <span class=" p-4 text-center mb-6 flex justify-center w-20 h-20 lg:w-28 lg:h-28 xl:w-20 xl:h-20  bg-[#cbff00] rounded-full"> <img class="" src="data:image/png;base64,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"/></span>
            <span class="text-2xl font-bold lg:px-10 xl:px-0 xl:text-xl ">Automation Strategy</span>
              <p class="pt-4 text-base font-medium px-1 lg:px-6">Launch an MVP with a best in class user experience</p>
           </div>
           <div class="bg-white p-6 mx-8 md:mx-1 md:px-4  xl:px-2 xl:py-8 py-8  items-center flex flex-col mt-4 sm:mt-2 md:mt-2 lg:mt-4 lg:mx-0 ">
            <span class=" p-4 text-center mb-6 flex justify-center w-20 h-20 lg:w-28 lg:h-28 xl:w-20 xl:h-20  bg-[#cbff00] rounded-full"> <img class="" src="data:image/png;base64,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"/></span>
            <span class="text-2xl font-bold lg:px-10 xl:px-0 xl:text-xl">Marketing Strategy</span>
              <p class="pt-4 text-base font-medium px-1 lg:px-6">Become a category leader using designops and UX/UI design</p>
           </div>
          </div>
        </div>
      </section>

<!-- Third Section -->
<section class="bg-black py-8 sm:py-14 md:py-8 lg:py-16">
  <div class="sm:mx-10 md:mx-0 lg:mx-14 lg:pb-8 xl:mx-52" >
    <div class="pt-2 flex justify-end">  
      <svg class="u-svg-content fill-[#cbff00] w-5/12 absolute mt-6 md:mt-0 sm:w-3/12 md:w-2/12 xl:w-[14%] xl:pr-10" viewBox="0 0 160 160" x="0px" y="0px" id="svg-afd0" style="enable-background:new 0 0 160 160;"><path d="M80,30c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S52.4,30,80,30 M80,0C35.8,0,0,35.8,0,80s35.8,80,80,80
  s80-35.8,80-80S124.2,0,80,0L80,0z"></path></svg>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="md:ml-6 ">
        <img class="px-12 md:px-0 w-full sm:px-20 object-cover flex relative mt-24  md:mt-20 h-[30rem]" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/group-people-working-4.jpg"/>
      </div>
      <div class="bg-white mx-12 pb-8 md:pb-0 md:pb-2 sm:mx-20 md:mx-[-2rem] md:mr-16 md:relative md:mt-20 lg:px-10 lg:mr-20 xl:mr-32 xl:px-6">
        <p class="text-4xl font-bold px-4 sm:px-6 pt-10 md:pr-12 md:pt-4 md:mt-8">Diversity, Equity, And Inclusion</p>
        <p class="pt-4 pl-4 text-xl font-normal sm:px-6 pr-10  lg:pr-6">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        <span class="mt-4 text-black flex text-lg pt-2 sm:px-6 px-4  ">Images From <p class="underline underline-offset-8 ml-1"> Freepik</p></span>
        <span class="flex pl-4 sm:px-6 items-center">
          <button class="bg-[#cbff00] text-[#111111] px-10 xl:px-10 xl:py-3 xl:text-lg xl:mt-14 xl:text-[#111111] xl:hover:text-white xl:hover:bg-[#111111]  py-4 mt-8 text-xl rounded-lg font-semibold hover:bg-[#111111] hover:text-white uppercase tracking-widest">Learn More</button>
        </span>
      </div>
    </div>
  </div>
</section>

<!-- fourth Section -->
<section class="bg-[#cbff00] py-8 sm:py-12 lg:py-20">
  <div class="flex flex-col items-center px-8 text-center block">
    <p class="text-3xl font-bold sm:text-4xl sm:px-24 md:text-6xl lg:text-7xl xl:text-5xl">Our Goal Is To Create 360° Value</p>
    <span class="text-[#6c773f] text-3xl px-10 py-1 font-bold sm:text-4xl md:text-6xl sm:px-32 lg:mt-2 lg:text-7xl xl:text-5xl">For All Our Stakeholders</span>
    <button class="uppercase tracking-widest bg-[#313329] px-14 py-4 rounded-lg  text-[#cbff00] text-3xl font-bold mt-8  sm:py-4 sm:mt-10 md:px-10 md:mt-12 lg:px-16 lg:py-6 xl:text-xl xl:px-12 xl: xl:py-4 lg:mt-14 ">Contact Us</button>
  </div>
</section>

<!-- Fifth Section -->
<section class="bg-black py-10 lg:py-32">
  <div class="pl-8 sm:pl-14 flex-col flex md:px-16 xl:mx-48">
    <span class="text-white uppercase font-normal text-lg tracking-widest lg:text-2xl lg:my-6 xl:text-xl">Our Services</span>
    <span class="text-white text-4xl font-bold pt-4 sm:text-5xl lg:mb-6 lg:text-6xl xl:text-5xl"> Learn About Our Practice Areas</span>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div class=" pr-4 md:pr-8 mt-10">
        <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Business Operation</p>
        <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
      </div>
      <div class=" pr-4 md:pr-8 mt-4 sm:mt-0 md:mt-10">
        <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Marketing</p>
        <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
      </div>
      <div class=" pr-4 md:pr-8 mt-6 sm:mt-2 lg:mt-10">
        <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Product Bootcamp</p>
        <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
      </div>
      <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
        <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Company Transformation</p>
        <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
      </div>
      <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
        <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Value Matrix</p>
        <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
      </div>
      <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
        <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Concept Design</p>
        <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
      </div>
      <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
        <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Idea Sketching</p>
        <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
      </div>
      <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
        <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Corporate Travel</p>
        <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
      </div>
      <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
        <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Digital Solutions</p>
        <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
      </div>
      <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
        <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Experience Maps</p>
        <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
      </div>
      <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
        <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Consulting</p>
        <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
      </div>
      <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
        <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Technology Solutions</p>
        <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
      </div>
    </div>
    <span class="flex items-center">
          <button class="bg-[#cbff00] text-black px-12 py-4 mt-8 text-2xl rounded-lg font-semibold hover:bg-white hover:text-black uppercase tracking-widest xl:text-base xl:px-7 xl:py-3">Learn More ➝</button>
        </span>
  </div>
</section>

 <!-- Sixth Section -->
 <section class="bg-[#cbff00] py-12 sm:pb-52 md:py-16 block max-w-full  lg:py-24 xl:px-36 xl:py-8 ">
        <div>
            <div class="px-12 mb-20 sm:px-28 md:px-28 md:pl-16 lg:px-20">
                <div class="flex justify-end">
                    <svg class="u-svg-content fill-white w-4/12 md:w-3/12 absolute lg:mt-2 lg:mr-20 xl:w-2/12 xl:mr-60 xl:pr-10" viewBox="0 0 160 160" x="0px" y="0px" id="svg-e858" style="enable-background:new 0 0 160 160;"><path d="M80,30c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S52.4,30,80,30 M80,0C35.8,0,0,35.8,0,80s35.8,80,80,80s80-35.8,80-80S124.2,0,80,0L80,0z"></path></svg>
                </div>
                <div class="">
                    <img class="flex relative mt-12 sm:mt-16 rounded-full xl:w-7/12 xl:ml-40" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/two-happy-men-working-together-new4.jpg" />
                </div>
                <div class="bg-white h-28 w-28 sm:w-40 sm:h-40 xl:w-44 xl:h-44 absolute rounded-full mt-[-3.9rem] sm:mt-[-9.5rem] ml-8 md:ml-2 lg:mt-[-15.5rem] xl:mt-[-10rem] xl:ml-36 lg:ml-10"></div>
            </div>
            <div class="flex md:grid-cols-3 grid md:mt[-20rem] ">
                <div class="flex justify-center mb-8 ml-10 sm:ml-32 sm:absolute sm:mt-[33rem] md:mt-[16rem] lg:mt-24 xl:mt-8 md:relative md:col-span-1">
                    <svg class="u-svg-content fill-white w-2/12 sm:w-5/12 md:w-9/12 lg:w-6/12 xl:ml-36 xl:px-4"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve"  viewBox="0 0 160 160" x="0px" y="0px" id="svg-a0bf" style="enable-background:new 0 0 160 160;"><path d="M80,30c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S52.4,30,80,30 M80,0C35.8,0,0,35.8,0,80s35.8,80,80,80s80-35.8,80-80S124.2,0,80,0L80,0z"></path></svg>
                </div>
                <div class="bg-[#1a1a1a] text-white mx-8 py-10 flex flex-col justify-end sm:mx-16 sm:ml-40 sm:py-12 md:col-span-2 md:relative md:ml-[70px] md:mt-[-260px] md:mb-[110px] xl:mb-[40px] block md:w-10/12 lg:w-9/12 lg:py-20 xl:py-8 xl:w-7/12" >
                    <p class="text-2xl font-bold pl-6 sm:pl-8 pt-2 sm:text-4xl sm:pr-20 sm:leading-relaxed md:text-6xl md:pr-16 md:pb-6 lg:pr-10 xl:text-4xl xl:pr-16 xl:pb-2">How To Get Consulting Clients</p>
                    <p class="text-lg  pl-6 sm:pl-8 pr-12 sm:pr-8 mt-8 sm:text-xl md:pr-20 md:text-2xl lg:pr-20 xl:text-lg xl:pr-24">Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla.</p>
                    <span class="mt-4 text-white flex text-lg pt-2 pl-6 sm:pl-8 sm:text-2xl md:text-xl md:mt-8 xl:mt-2 xl:text-base">Images From <p class="underline underline-offset-8 ml-1"> Freepik</p></span>
                    <span class="flex pl-6 sm:justify-start sm:pl-8 items-center sm:mt-4">
                    <button class="bg-[#cbff00] text-black px-14 py-4 xl:px-10 xl:py-3 xl:mt-4 xl:text-lg mt-8 text-2xl rounded-lg font-bold hover:bg-white hover:text-black uppercase tracking-widest">Learn More</button>
                    </span>
                </div>  
            </div>
        </div>
      </section>


<!-- seventh Section -->
<section class="bg-black text-white py-10 px-12 sm:px-16 md:py-16 md:px-10 lg:px-24 xl:px-72 xl:py-14">
  <div>
      <div class="grid grid-cols-1 md:grid-cols-2 " >
      <div>
      <div class="">
          <div class="bg-[#ccff00] h-24 w-24 sm:h-36 sm:w-36  md:h-28 md:w-28 lg:h-28 lg:w-28 xl:w-24 xl:h-24 rounded-full "></div>
      </div>
      <div class="mt-10 lg:pr-8">
          <p class="text-3xl font-bold sm:text-4xl lg:pr-20 xl:text-2xl">We Build Adjacent Businesses To Optimize Our Areas Of Expertise</p>
          <p class="text-xl pt-8 xl:pt-4 [word-spacing:5px] sm:text-2xl md:text-xl lg:pr-20 xl:text-base">Elit sed vulputate mi sit amet mauris. Arcu odio ut sem nulla pharetra. Nisi scelerisque eu ultrices vitae. Dapibus ultrices in iaculis nunc sed augue lacus. Laoreet non curabitur gravida arcu ac. Eget velit aliquet sagittis id consectetur purus ut. Sit amet luctus venenatis lectus magna fringilla urna. Dolor morbi non arcu risus quis varius quam. Aenean sed adipiscing diam donec adipiscing tristique risus.</p>
          <span class="mt-4  text-white flex text-lg pt-2 xl:pt-0 sm:text-2xl xl:text-base">Images From <p class="underline underline-offset-8 ml-1"> Freepik</p></span>
          <span class="flex justify-center sm:justify-start items-center">
          <button class="bg-[#cbff00] text-black px-10 py-4 xl:px-8 xl:text-base xl:py-3 sm:py-6  mt-8 sm:mt-12 text-2xl rounded-lg font-bold hover:bg-white hover:text-black uppercase tracking-widest">Learn More ➝</button>
          </span>
      </div>
  </div>
      <div class="flex flex-col justify-end xl:justify-self-start xl:justify-center justify-self-center xl:mt-40">
          <div class="">
              <img class="flex relative mt-24 md:mt-4 rounded-full  w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[300px] xl:h-[300px] object-cover" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/rtrr9.jpg" />
          </div>
          <div class="flex justify-end pt-10 md:pt-0">
          <div class="bg-[#ccff00] h-24 w-24 sm:w-36 sm:h-36 md:mt-28 md:w-28 md:h-28 xl:w-24 xl:h-24 xl:mt-16  rounded-full justify-end flex"></div>
      </div>
  </div>
      </div>
  </div>
</section>

<!-- Eightth Section -->
<section class="bg-[#e5e5e5] py-8 block">
  <div>
  <div class="flex flex-col text-center justify-center px-8 py-8">
      <span class="text-3xl font-bold"> Testimonials</span>
      <p class="text-lg pt-4 font-normal sm:px-10 md:px-60">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .</p>
  </div>
      <div class="grid sm:mx-14 md:mx-32 lg:mx-24 lg:grid-cols-2 xl:mx-64">
          <div class="bg-white mx-6 px-4 py-6 md:px-8 ">
              <div class="flex">
              <div class="flex">
                  <span class="relative text-[#ccff00] text-9xl ">❝</span>
                  <p class="text-2xl font-bold absolute mt-8 ml-6 xl:text-xl">Celia Almeda</p>
              </div>
              <div class="flex justify-end w-full">
                  <img class=" rounded-full w-[80px] h-[80px] object-cover mt-4" src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/a0bcd585bf555805ae3be2fc/pexels-mark-john-hilario-12771773.jpg" />
              </div>
              </div>
              <p class="text-md font-medium pr-0 text-[#111111] leading-loose px-1">Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. </p>
          </div>
          <div class="bg-white mx-6 px-4 py-6 mt-4 md:px-8 lg:mt-0 lg:py-10">
              <div class="flex">
              <div class="flex">
                  <span class="relative text-[#ccff00] text-9xl">❝</span>
                  <p class="text-2xl font-bold absolute mt-8 ml-6 xl:text-xl">Frank Kinney</p>
              </div>
              <div class="flex justify-end w-full">
                  <img class="  rounded-full w-[80px] h-[80px] object-cover mt-4" src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/2f248f404ef3524196fe32c4/pexels-jeandaniel-francoeur-12842811.jpg" />
              </div>
              </div>
              <p class="text-md font-medium pr-0 text-[#111111] leading-loose px-1">Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. </p>
          </div>
      </div>
  </div>
</section>

<HelloWorld/>

</template>

