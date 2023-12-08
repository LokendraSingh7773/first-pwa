<script setup>
 import HelloWorld from "../components/HelloWorld.vue"
 import Navbar from "../components/main_navbar.vue"

// export default {
//   name: "pink-navbar",
//   data() {
//     return {
//       showMenu: false
//     }
//   },
//   methods: {
//     toggleNavbar: function(){
//       this.showMenu = !this.showMenu;
//     }
//   }
// }
</script>

<template>
  <!-- navbar -->
  <navbar/>


  <!-- first section -->
  <section class="bg-[#ccff00] pb-16 xl:pb-4">
    <div class="">
      <img class="h-[390px] md:h-[510px] object-cover object-[15%] w-full" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/3333.jpg"/>
    </div>
    <div class="bg-[#111111] mx-10 px-4 py-16  text-white mt-8 relative mt-[-8rem] lg:mt-[-12rem] min-[450px]:w-[380px]  min-[450px]:py-10  min-[450px]:px-8 sm:ml-20 lg:ml-40 xl:ml-80">
      <p class="tracking-widest text-base font-medium ">OUR TEAM</p>
      <p class="py-6 text-5xl underline underline-offset-4">Who We Are</p>
      <p class="text-sm font-medium py-3">Images From <a class="underline underline-offset-4 font-semibold "> Freepik</a></p >
      <button class=" bg-[#ccff00] text-black px-14 py-3 mt-6 rounded-lg text-xl font-semibold tracking-widest">ABOUT US</button>
    </div>
  </section>

<!-- Second Section -->
  <section class="bg-[#ccff00] px-10  text-black py-10 sm:px-14 md:px-10 xl:px-40 min-[1400px]:px-72 ">
    <p class="flex justify-center py-8 text-4xl font-bold text-center sm:text min-[520px]:text-5xl sm:px-20 md:px-24 xl:text-6xl xl:px-0">Our Leadership And People</p>
    <div class="min-[570px]:grid-cols-2 grid  md:grid-cols-3 lg:grid-cols-4">
      <div class="py-4 " style="text-align: -webkit-center;">
        <img class="w-56 h-56 xl:w-44 xl:h-44 mt-8 object-cover" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/4.jpg"/>
        <p class="text-3xl font-semibold pt-4 xl:text-xl">Jeffrey Brown</p>
        <p class="pt-2 font-semibold xl:text-sm">Worldwide Partner</p>
        <div class="mt-4 ">
        <i class="fi fi-brands-facebook px-2 text-lg"></i>
        <i class="fi fi-brands-instagram px-2 text-lg"></i>
        <i class="fi fi-brands-linkedin px-2 text-lg"></i>
      </div>
      </div>
      <div class="py-1 min-[570px]:pt-6" style="text-align: -webkit-center;">
        <img class="w-56 h-56 xl:w-44 xl:h-44 object-cover mt-6  " src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/woman4.jpg"/>
        <p class="text-3xl font-semibold pt-4 xl:text-xl">Ann Richmond</p>
        <p class="pt-2 font-semibold xl:text-sm">Creative Leader</p>
        <div class="mt-4 ">
        <i class="fi fi-brands-facebook px-2 text-lg"></i>
        <i class="fi fi-brands-instagram px-2 text-lg"></i>
        <i class="fi fi-brands-linkedin px-2 text-lg"></i>
      </div>
      </div>
      <div class="py-1 md:mt-5 " style="text-align: -webkit-center;">
        <img class="w-56 h-56 xl:w-44 xl:h-44 object-cover mt-6" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/bbef6c67-d065-15d8-00f7-04c4574b8bd9.jpg"/>
        <p class="text-3xl font-semibold pt-4 xl:text-xl">Jennie Roberts</p>
        <p class="pt-2 font-semibold xl:text-sm">Chairman</p>
        <div class="mt-4 ">
        <i class="fi fi-brands-facebook px-2 text-lg"></i>
        <i class="fi fi-brands-instagram px-2 text-lg"></i>
        <i class="fi fi-brands-linkedin px-2 text-lg"></i>
      </div>
      </div>
      <div class="py-1 lg:mt-5 " style="text-align: -webkit-center;">
        <img class="w-56 h-56 xl:w-44 xl:h-44 object-cover mt-6" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/5mant.jpg"/>
        <p class="text-3xl font-semibold pt-4 xl:text-xl">Alex Greenfield</p>
        <p class="pt-2 font-semibold xl:text-sm">Partner</p>
        <div class="mt-4 ">
        <i class="fi fi-brands-facebook px-2 text-lg"></i>
        <i class="fi fi-brands-instagram px-2 text-lg"></i>
        <i class="fi fi-brands-linkedin px-2 text-lg"></i>
      </div>
      </div>
      <div class="py-1 " style="text-align: -webkit-center;">
        <img class="w-56 h-56 xl:w-44 xl:h-44 object-cover mt-6" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg"/>
        <p class="text-3xl font-semibold pt-4 xl:text-xl">Walter Lilly</p>
        <p class="pt-2 font-semibold xl:text-sm">Partner</p>
        <div class="mt-4 ">
        <i class="fi fi-brands-facebook px-2 text-lg"></i>
        <i class="fi fi-brands-instagram px-2 text-lg"></i>
        <i class="fi fi-brands-linkedin px-2 text-lg"></i>
      </div>
      </div>
      <div class="py-1 " style="text-align: -webkit-center;">
        <img class="w-56 h-56 xl:w-44 xl:h-44 object-cover mt-6" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/woman4.jpg"/>
        <p class="text-3xl font-semibold pt-4 xl:text-xl">Monica Pouliot</p>
        <p class="pt-2 font-semibold xl:text-sm">Associate Partner</p>
        <div class="mt-4 ">
        <i class="fi fi-brands-facebook px-2 text-lg"></i>
        <i class="fi fi-brands-instagram px-2 text-lg"></i>
        <i class="fi fi-brands-linkedin px-2 text-lg"></i>
      </div>
      </div>
      <div class="py-1 " style="text-align: -webkit-center;">
        <img class="w-56 h-56 xl:w-44 xl:h-44 object-cover mt-6" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/53.jpg"/>
        <p class="text-3xl font-semibold pt-4 xl:text-xl">Alex Green</p>
        <p class="pt-2 font-semibold xl:text-sm">Associate Partner</p>
        <div class="mt-4 ">
        <i class="fi fi-brands-facebook px-2 text-lg"></i>
        <i class="fi fi-brands-instagram px-2 text-lg"></i>
        <i class="fi fi-brands-linkedin px-2 text-lg"></i>
      </div>
      </div>
      <div class="py-1 " style="text-align: -webkit-center;">
        <img class="w-56 h-56 xl:w-44 xl:h-44 object-cover mt-6" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/woman7.jpg"/>
        <p class="text-3xl font-semibold pt-4 xl:text-xl"> Mila Parker</p>
        <p class="pt-2 font-semibold xl:text-sm">Partner</p>
        <div class="mt-4 ">
        <i class="fi fi-brands-facebook px-2 text-lg"></i>
        <i class="fi fi-brands-instagram px-2 text-lg"></i>
        <i class="fi fi-brands-linkedin px-2 text-lg"></i>
      </div>
      </div>
      <div class="py-1 " style="text-align: -webkit-center;">
        <img class="w-56 h-56 xl:w-44 xl:h-44 object-cover mt-6" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/5.jpg"/>
        <p class="text-3xl font-semibold pt-4 xl:text-xl">James Oliver</p>
        <p class="pt-2 font-semibold xl:text-sm">Partner</p>
        <div class="mt-4 ">
        <i class="fi fi-brands-facebook px-2 text-lg"></i>
        <i class="fi fi-brands-instagram px-2 text-lg"></i>
        <i class="fi fi-brands-linkedin px-2 text-lg"></i>
      </div>
      </div>
      <div class="py-1 " style="text-align: -webkit-center;">
        <img class="w-56 h-56 xl:w-44 xl:h-44 object-cover mt-6" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/ddddddd.jpg"/>
        <p class="text-3xl font-semibold pt-4 xl:text-xl">Steve Weaver</p>
        <p class="pt-2 font-semibold xl:text-sm">Partner</p>
        <div class="mt-4 ">
        <i class="fi fi-brands-facebook px-2 text-lg"></i>
        <i class="fi fi-brands-instagram px-2 text-lg"></i>
        <i class="fi fi-brands-linkedin px-2 text-lg"></i>
      </div>
      </div>
      <div class="py-1 " style="text-align: -webkit-center;">
        <img class="w-56 h-56 xl:w-44 xl:h-44 object-cover mt-6" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/6.jpg"/>
        <p class="text-3xl font-semibold pt-4 xl:text-xl">Peter Howard</p>
        <p class="pt-2 font-semibold xl:text-sm">Partner</p>
        <div class="mt-4 ">
        <i class="fi fi-brands-facebook px-2 text-lg"></i>
        <i class="fi fi-brands-instagram px-2 text-lg"></i>
        <i class="fi fi-brands-linkedin px-2 text-lg"></i>
      </div>
      </div>
      <div class="py-1 " style="text-align: -webkit-center;">
        <img class="w-56 h-56 xl:w-44 xl:h-44 object-cover mt-6" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/5man.jpg"/>
        <p class="text-3xl font-semibold pt-4 xl:text-xl">Samuel Payne</p>
        <p class="pt-2 font-semibold xl:text-sm">Partner</p>
        <div class="mt-4 ">
        <i class="fi fi-brands-facebook px-2 text-lg"></i>
        <i class="fi fi-brands-instagram px-2 text-lg"></i>
        <i class="fi fi-brands-linkedin px-2 text-lg"></i>
      </div>
      </div>
    </div>
  </section>

  <section class="bg-[#111111] text-white py-10 flex justify-center flex-col md:px-20 lg:px-36 min-[1210px]:px-56 xl:px-80 xl:py-16" >
    <div class=" justify-center flex-col text-center px-10" >
    <p class="py-4 text-4xl font-bold sm:text-5xl">Submit Your Resume</p>
    <p class="text-2xl py-2 sm:text-3xl xl:text-2xl xl:px-24">Talented? Resourceful? Known to add value wherever you work? We want to hear from you.</p>
    <button class=" bg-[#ccff00] text-black px-8  py-3 xl:text-base xl:font-bold mt-6 rounded-lg text-xl font-semibold tracking-widest py-2">APPLY NOW ➝</button>
  </div>
  </section>
  
  <!-- footer -->
  <HelloWorld/>

</template>


