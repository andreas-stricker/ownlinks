<template>
  <div class="mb-10 pt-6 max-w-xl mx-auto">
    <img
      id="profileImg"
      class="m-auto rounded-full w-full mb-5"
      alt="Andreas Stricker Image"
      src="../assets/img/profile.jpg"
    />
    <h1 class="text-xl text-white font-bold">Andreas Stricker</h1>
    <p class="profileDescription">web developer | ux/ui designer</p>
    <ul id="socialIcons" class="flex justify-center mt-2">
      <li>
        <a
          href="https://facebook.com/andreas.stricker.webdev"
          target="_blank"
          rel="noopener"
          >
          <fa :icon="['fab', 'facebook-square']" />
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/andy.webdev"
          target="_blank"
          rel="noopener"
          >
          <fa :icon="['fab', 'instagram']" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/andreas-stricker/"
          target="_blank"
          rel="noopener"
          >
          <fa :icon="['fab', 'linkedin']" />
        </a>
      </li>
      <li>
        <a
          href="https://dev.to/andreas-stricker"
          target="_blank"
          rel="noopener"
          >
          <fa :icon="['fab', 'dev']" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/andreas-stricker"
          target="_blank"
          rel="noopener"
          >
          <fa :icon="['fab', 'github']" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
</script>


<style scoped lang="scss">
#profileImg {
  max-width: 8rem;
}
.profileDescription {
  color: #7f8d9e;
}

#socialIcons{
  li a{
    font-size:1.45rem;
    color:rgb(30, 169, 255);
    padding:.5rem;
    transition:color .25s ease-in-out;
    &:hover{
      color:#fff;
    }
  }
}
/* import 'font-awesome/css/font-awesome.css' */
</style>