# Setting up Api

<p>This project is working with edamam's recipe api.</p>

<p>If you don't have an edamam account, head over to <a href="https://www.edamam.com/">Edamam's website</a> and create a free account choosing Recipe Search API as your option.</p>

<p>Once you've created your account and logged in, head over to <a href='https://developer.edamam.com/admin/applications'>Applications</a> and click on the <b>Create a new application</b> button and follow the steps</p>

<p>Once done, you should see a panel with your <b>App ID</b> and <b>Api key</b>. They are crusial for running this project.</p>

# Running project

Running this project is simple. Once you've cloned the repo, run `npm install` to intall all the packages.

<br/>

Once that's done, create a `.env` file in the root of your project with the following details:

```dosini
VITE_EDAMAM_APP_ID = The APP ID
VITE_EDAMAM_API_KEY= The API KEY
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
