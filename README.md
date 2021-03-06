
# Welcome to Gatsby Blog Starter

  

Hi! This is a small scale project targetting blog authors, they can quickly start with a minimalistic template designed in styled components

  
  

## Packages/Plugins used

- styled-components

- @fortawesome/react-fontawesome

- @fortawesome/fontawesome-svg-core

- @fortawesome/free-solid-svg-icons

- gatsby-transformer-remark

  
  

## File Structure

  

-  **components** - all the individual components like header, footer

-  **images** - all the images used in the site

-  **pages** - all the route pages foreg for route /blog page is blog.js

-  **posts** - folder to organize all the markdown files

-  **templates** - template for the individual blog page

  

## Create files and folders

  

The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.

  

## Clone this repo

  

Clone this repo and start editing to create a minimalistice blogging static site where you can add content from netlify cms

  

Navigate into your new site’s directory and start it up.

  

  

```sh

  

cd gatsby-minimalistic-blog-template/

  

gatsby develop

  

```

  
  

Your site is now running at `http://localhost:8000`!

*Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data.


## Deploy the site to Netlify

- In order to deploy to netlifywe need to push it to github first
- So first create a repository and push the code
- Go to Netlify
- Sign in with Github
- Click new site from Git
- Authorize Netlify to access Github data
- Select the repository
-  Netlify will automatically build and deploy

The cool thing about Netlify is that whenever we make any changes and push it to github, it will re-run the build command and deploy.
The deployment will take a couple of minutes, after that the changes get reflected in the live site