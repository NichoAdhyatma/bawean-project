<template>
  <div id="layout" data-aos="fade-up" data-aos-delay="300">
    <header id="header">
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
  </div>
</template>

<style setup>
#layout {
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
}

#header {
  text-align: center;
}
</style>