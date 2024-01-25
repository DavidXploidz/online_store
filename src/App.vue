<template>
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue';

  export default {
    components: {
      HeaderComponent,
    },
    data() {
      return {
        // Datos del componente
      };
    },
    methods: {
      // Métodos del componente
    },
  };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap');

:root{
  --fuentePrincipal: 'Open Sans', sans-serif;
  --font-titles: 'Oswald', sans-serif;
  --white: #FAFAFA;
  --red: #710000;
  --red-secondary: #ffdddd;
  --black: #272932;
  --black-secondary: #353845;
  --gray: #A3A3A3;
  --gray-500: #999999;
  --gray-light: #F2F2F2;
  --purple: #6c5ce7;
  --purple-alt: #e2e4fd;

  --primary: #FDF500;
  --primary-400: #faff0d;
  --primary-alt: #fcffe7;
  --secondary: #cb1dcd;
  --secondary-alt: #fde7ff;
  --tertiary: #37EBF3;
  --tertiary-alt: #ecfffe;

  --step--3: clamp(0.5763rem, 0.5796rem + -0.0043vw, 0.5788rem);
  --step--2: clamp(0.6944rem, 0.6855rem + 0.0446vw, 0.72rem);
  --step--1: clamp(0.8331rem, 0.8099rem + 0.1163vw, 0.9rem);
  --step-0: clamp(1rem, 0.9565rem + 0.2174vw, 1.125rem);
  --step-1: clamp(1.2rem, 1.1283rem + 0.3587vw, 1.4063rem);
  --step-2: clamp(1.44rem, 1.3293rem + 0.5533vw, 1.7581rem);
  --step-3: clamp(1.7281rem, 1.5649rem + 0.8163vw, 2.1975rem);
  --step-4: clamp(2.0738rem, 1.8396rem + 1.1707vw, 2.7469rem);
  --step-5: clamp(2.4881rem, 2.1594rem + 1.6435vw, 3.4331rem);
  --step-6: clamp(2.9863rem, 2.5323rem + 2.2696vw, 4.2913rem);
}

/* apply a natural box layout model to all elements, but allowing components to change */
html {
  box-sizing: border-box;
  }
  *, *:before, *:after {
  box-sizing: inherit;
}
*{
  margin: 0;
  padding: 0;
  font: inherit;
}
body{
  font-size: 16px;
  font-family: var(--fuentePrincipal);
  min-height: 100vh;
  background-color: var(--white);
}
img, picture, svg, video{
  display: block;
  max-width: 100%;
}
input, textarea, button, select{
  font: inherit;
}
a{
  text-decoration: none;
}
p{
  text-wrap: pretty;
}
hr{
  margin: 1rem 0;
  color: var(--gray-light);
}
/* Utilidades */
.section{
  padding-block: 2rem;
}
.main-title{
  text-align: center;
  font-size: var(--step-3);
  color: var(--black);
  margin-bottom: 2rem;
  font-weight: 600;
  text-wrap: balance;
}
.grid-list{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  list-style: none;
}
/* The mobile-first pre-defined media queries: */
/* xs */
/* @media (min-width: 475px) {} */

/* sm */
/* @media (min-width: 640px) {} */

/* md */
/* @media (min-width: 768px) {} */

/* lg */
/* @media (min-width: 1024px) {} */

/* xl */
/* @media (min-width: 1280px) {} */

/* 2xl */
/* @media (min-width: 1536px) {} */

/* The desktop-first pre-defined media queries: */
/* 2xl */
@media (max-width: 1536px) {}

/* xl */
@media (max-width: 1280px) {}

/* lg */
@media (max-width: 1024px) {}

/* md */
@media (max-width: 768px) {}

/* sm */
@media (max-width: 640px) {}

/* xs */
@media (max-width: 475px) {}

/* Mobile container utility class: */
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

/* xs */
@media (min-width: 475px) {
  .container {
    max-width: 475px;
  }
}

/* sm */
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

/* md */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

/* lg */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

/* xl */
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

/* 2xl */
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

/* Desktop container utility class: */
.container {
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

/* 2xl */
@media (max-width: 1536px) {
  .container {
    max-width: 1280px;
  }
}

/* xl */
@media (max-width: 1280px) {
  .container {
    max-width: 1024px;
  }
}

/* lg */
@media (max-width: 1024px) {
  .container {
    max-width: 768px;
  }
}

/* md */
@media (max-width: 768px) {
  .container {
    max-width: 640px;
  }
}

/* sm */
@media (max-width: 640px) {
  .container {
    max-width: 475px;
  }
}

/* xs */
@media (max-width: 475px) {
  .container {
    width: 100%;
  }
}
</style>
