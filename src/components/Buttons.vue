<template>
     
    <div v-for="button in buttons" class="button flex rounded-lg mb-7 ml-3">
      <div class="imgWrap -ml-3 mt-2 shadow-2xl">
        <img src="/src/assets/img/blogpost.png" alt="Blogpost" />
      </div>
      <div class="text flex-auto text-left p-4">
        <h2 class="text-white font-semibold text-md">{{button.title}}</h2>
        <p class="description text-sm font-normal">{{button.description}}</p>
      </div>
      <a href="{{button.link}}" target="_blank" rel="noopener"></a>
      <div class="linkArrow">
        <i>ARROW</i>
      </div>
    </div>
    
</template>

<script>

export default{
  data(){
    return{
      buttons: [{
        id:1,
        title:'Hier steht eine Headline',
        description:'Hier steht die Beschreibung',
        img:'',
        link:'#'
      },
      {
        id:2,
        title:'Hier steht eine Headline',
        description:'Hier steht die Beschreibung',
        img:'',
        link:'#'
      }]
    }
  }
}

</script>

<style lang="scss" scoped>
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
