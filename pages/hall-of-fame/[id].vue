<template>
    <div class="relative h-full flex items-center justify-center">
      <!-- Gray background -->
      <div class="absolute left-0 top-0 h-full w-2/5 bg-gray-300"></div>
  
      <!-- No background -->
      <div class="absolute right-0 top-0 h-full w-3/5"></div>
  
      <!-- Content container -->
      <div class="flex items-center w-full z-10">
        <!-- Text container -->
        <div class="w-2/5 text-black bg-transparent">
          <div class="px-24">
            <p><strong>Worked on:</strong></p>
            <p>{{ person.role }}</p>
          </div>
        </div>
  
        <!-- Image overlay with padding -->
        <div class="w-1/4 py-40">
          <img :src="person.logo" alt="Your Image" class="w-full h-full object-cover">
        </div>
  
        <!-- Text container -->
        <div class="w-3/5 bg-transparent p-16">
          <p class="pl-4"><strong>{{ person.name }}</strong></p>
          <p class="text-sm mb-4 pl-4">{{ person.position }}</p>
          <p class="text-sm text-light" v-html="person.description"></p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const route = useRoute();
  const id = route.params.id;
  </script>
  
  <script>
  export default {
    computed: {
      person() {
        const personId = this.$route.params.id;
        const people = [
          { id: 1, logo: '/img/book.png', name: 'Juul van Tilburg', position: 'Software Developer', role: 'Frontend', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' },
          { id: 2, logo: '/img/book.png', name: 'Iris Reijnen', position: 'Software Developer', role: 'Backend', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' },
          { id: 3, logo: '/img/book.png', name: 'Iris Reijnen', position: 'Software Developer', role: 'Frontend', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' },
          {
            id: 4,
            logo: '/img/book.png',
            name: 'Daan Klever',
            position: 'Bouwkundige',
            role: 'Modelleur',
            description: 'Hallo, ik ben Daan Klever, een gepassioneerde bouwkundige die zijn vaardigheden heeft ingezet als modelleur voor TechnoviumUnlimited. Mijn tijd bij dit geweldige project was een ongelooflijke reis vol uitdagingen en creatieve hoogtepunten.<br/><br/>Mijn voornaamste taak was het vertalen van conceptuele ideeën naar gedetailleerde bouwmodellen. Met behulp van geavanceerde software heb ik bijgedragen aan het vormgeven van innovatieve en duurzame architectuur. Mijn focus lag op het perfectioneren van de virtuele representatie van projecten, zodat het bouwproces soepel en efficiënt kon verlopen.<br/><br/>Wat deze ervaring zo uniek maakte, was de nauwe samenwerking met een team van getalenteerde professionals. Samen werkten we aan het realiseren van inspirerende en vooruitstrevende projecten. Het was geweldig om te zien hoe onze gezamenlijke inspanningen resulteerden in virtuele omgevingen die niet alleen functioneel waren, maar ook een esthetisch statement maakten.<br/><br/>Mijn favoriete aspect van dit werk was de constante zoektocht naar innovatieve oplossingen. Het was niet alleen een technische uitdaging, maar ook een artistieke ontdekkingsreis. Elk project bracht nieuwe kansen en ik genoot ervan om mijn creativiteit de vrije loop te laten.<br/><br/>Kortom, mijn tijd als modelleur voor TechnoviumUnlimited was niet alleen een professionele groei, maar ook een persoonlijke reis van ontdekking en prestatie. Ik ben trots op mijn bijdrage aan het creëren van virtuele omgevingen die een blijvende impact hebben. Ik kijk met veel voldoening terug op deze periode vol uitdagingen, teamwork en creativiteit.'
          },
          {
            id: 5,
            logo: '/img/book.png',
            name: 'Piet Leest',
            position: 'Bouwkundige',
            role: 'Modelleur',
            description: "Hallo, ik ben Piet Leest, een enthousiaste bouwkundige die zijn expertise heeft ingezet als modelleur bij TechnoviumUnlimited. Mijn tijd bij dit boeiende project was gevuld met uitdagingen en bijzondere ervaringen.<br/><br/>Als modelleur heb ik me vooral toegelegd op het omzetten van abstracte ideeën naar gedetailleerde bouwmodellen. Door geavanceerde software te gebruiken, heb ik bijgedragen aan het creëren van innovatieve en duurzame architectuur. Mijn focus lag op het nauwkeurig modelleren van projecten, waardoor het bouwproces efficiënt en gestroomlijnd verliep.<br/><br/>Wat deze ervaring zo uniek maakte, was de intense samenwerking met een getalenteerd team van professionals. Gezamenlijk hebben we inspirerende projecten gerealiseerd die niet alleen functioneel waren, maar ook esthetisch indrukwekkend.<br/><br/>Wat mij het meest aansprak in mijn rol was de constante zoektocht naar vernieuwende oplossingen. Het was niet alleen een technische uitdaging, maar ook een creatieve ontdekkingsreis. Elk project bood nieuwe mogelijkheden om mijn creativiteit te uiten en mijn vaardigheden verder te ontwikkelen.<br/><br/>Kortom, mijn periode als modelleur voor TechnoviumUnlimited was niet alleen een professionele groeifase, maar ook een persoonlijk avontuur. Ik ben trots op mijn bijdrage aan het vormgeven van innovatieve bouwprojecten. Terugkijkend op deze tijd, herinner ik me een periode vol teamwork, uitdagingen en bovenal, creatieve voldoening."
          },
          {
            id: 6,
            logo: '/img/book.png',
            name: 'Marije Rein',
            position: 'Mediavormgever',
            role: 'Designer',
            description: "Hallo, ik ben Marije Rein, een gepassioneerde mediavormgever die haar creativiteit heeft ingezet als designer bij TechnoviumUnlimited. Mijn tijd bij dit inspirerende project was gevuld met boeiende ontwerpopdrachten en uitdagende projecten.<br><br>Als designer lag mijn focus op het visualiseren van concepten en het creëren van aantrekkelijke mediavormgeving. Met oog voor detail en een passie voor design, heb ik bijgedragen aan het vormgeven van de visuele identiteit van verschillende projecten.<br><br>Wat deze ervaring zo bijzonder maakte, was de samenwerking met getalenteerde collega's. Samen hebben we gewerkt aan het ontwikkelen van visueel aantrekkelijke en effectieve communicatiemiddelen. Het was fascinerend om te zien hoe design een essentiële rol speelde in het overbrengen van boodschappen en het creëren van een blijvende indruk.<br><br>Mijn favoriete aspect van mijn rol was de mogelijkheid om mijn creativiteit te uiten en te experimenteren met verschillende ontwerpstijlen. Elk project bood nieuwe uitdagingen en kansen om innovatieve visuele oplossingen te verkennen.<br><br>Kortom, mijn tijd als designer voor TechnoviumUnlimited was niet alleen een professionele groeifase, maar ook een artistieke ontdekkingsreis. Ik ben trots op mijn bijdrage aan het ontwikkelen van impactvolle visuele concepten. Terugkijkend herinner ik me een periode vol inspiratie, teamwork en creatieve voldoening.<br>"
          },
          // Add more people as needed
        ];
        return people.find(person => person.id === parseInt(personId));
      },
    },
  };
  </script>