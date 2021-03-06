---
path: /fantastic-gatsby
title: Gatsby - a fun-static site generator and more
date: '2018-10-25'
image: /assets/img_20181017_102949_428.jpg
---
## Gatsby

  Gatsby is a static site generator build on top of react. You can easily generate static sites with as many pages just by creating few React Components.
  React Router is in built in Gatsby so, there is no need for an extra config, you just create the page you want to route to. It's simply awesome.
  Gatsby also supports many plugins which helps us to import images.
  In the development mode it gives us Hot Module Replacement.
  One of the other important feature is the integration of GraphQL, You can import data from as many source as you want.
  It is superfast and lightweight.

## File Structure

* **components** - all the individual components like header, footer
* **images** - all the images used in the site
* **pages** - all the route pages foreg for route /blog page is blog.js
* **posts** - folder to organize all the markdown files
* **templates** - template for the individual blog page

## Netlify

Netlify is a tool for Continuous Deployment of your project.
It will automatically deploy latest versions of your site when any change is pushed to the repository

## Deploying site to Netlify

Deploying gatsby sites to netlify is very easy. Gatsby is a ststic site generator which generates all your HTML Pages, with Netlify the advantage is that we can automate this deployment.
This site itself is deployed to Netlify. It gives all this for free. Yes that's true, you can deploy your site as a subdomain of netlify, another cool feature is that you can name your project (eg: my-awesome-app.netlify.com)
In order to deploy it to Netlify all you need is a github repo.
Push your project to a github repo.

* Go to [Netlify](https://www.netlify.com/) 
* Login via Github
* Select the repository where your project resides
* It will automatically get the configuration for the build process, in this case it will be gatsby build
* It will deploy the site automatically

The best part is that, whenever you push a new code to github, or add a new blog through netlify cms, it will automatically build again and publish, within a couple of minutes the site will be published
