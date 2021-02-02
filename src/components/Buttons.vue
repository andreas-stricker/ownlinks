<template>
  <div class="max-w-4xl w-full px-5 mx-auto">
    
    <div class="button flex rounded-lg mb-7 ml-3">
      <div class="imgWrap -ml-3 mt-2 shadow-2xl">
        <img src="/src/assets/img/blogpost.png" alt="Blogpost" />
      </div>
      <div class="text flex-auto text-left p-4">
        <h2 class="text-white font-semibold text-md">Hier steht eine Headline</h2>
        <p class="description text-sm font-normal">Hier steht die Beschreibung</p>
      </div>
      <a href="#" target="_blank" rel="noopener"></a>
      <div class="linkArrow">
        <i>ARROW</i>
      </div>
    </div>

    <div class="button flex rounded-lg mb-7 ml-3">
      <div class="imgWrap -ml-3 mt-2 shadow-2xl">
        <img src="/src/assets/img/blogpost.png" alt="Blogpost" />
      </div>
      <div class="text flex-auto text-left p-4">
        <h2 class="text-white font-semibold text-md">Hier steht eine Headline</h2>
        <p class="description text-sm font-light">Hier steht die Beschreibung</p>
      </div>
      <a href="#" target="_blank" rel="noopener"></a>
      <div class="linkArrow">
        <i>ARROW</i>
      </div>
    </div>
    
    
  </div>
</template>

<script>
</script>

<style lang="scss">
.button {
  background-color: #2d2f39;

  .imgWrap {
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
  
  .description{
    color:#a9b4c1;
  }
}
</style>
