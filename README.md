# ownlinks
## linktree clone – link in bio for instagram social media

If you use Instagram, you surely know the problem: You post something and want to put a link to your store or your blog article there. Unfortunately, this is not possible. So you only have the possibility to put the one link in bio.
There are several services like linktree and liiink.me, but they are also very limited in the free version.
As a developer, you also don't want to link to a ready-made service with its branding, so I built a separate "button" page. From there you can place several links to pages.
## Stack:
- [VueJS 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/) 
- [Tailwind CSS](https://tailwindcss.com)
- [FontAwesome](https://fontawesome.com)
- [Storyblok](https://www.storyblok.com)

## Headless CMS
To manage the links easily, I use Storyblok as a headless CMS and fetch the data via GraphQL.
In Storyblok I have created three folders for three categories:
- Buttons
- Recommendations
- Coupons 

The fields structure looks like that:
- title
- description
- image
- link (url)


If you want your ownlinks page for instagram, just clone my project, change the profile text and image, create a free storyblok account and build up the thre folders and button fields and put in your content. Don't forget to rate my repo ;)

### Development Server:
`npm run dev`

### Production Build:
`npm run build`

### Run production build:
`npm run serve`

______________________

Built by [Andreas Stricker](https://www.andreas-stricker.at)