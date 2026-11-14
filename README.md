# Angular 22 Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.2.


## Installation

If you want to copy this project, head over the the [github repository](https://github.com/Hexavexagon/Angular22-Portfolio) and [fork the repository](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo) (create your own copy of it).

You may want to set up an SSH key first so you don't have to provide login details when pushing and pulling code. Check out [github's docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) about it.

You will need to have Node and NPM installed. The best way to do this is to use Node Version Manager (NVM). There are [articles online](https://medium.com/@heghine.dev357/install-nvm-node-js-on-windows-mac-and-linux-361891b54bf8) that should be able to walk you through this process. I made this using `Node 22.22.3` and `npm 10.9.8`, so for the best stability use those versions.

Once you have Node installed and the repository cloned, you can go into the repository folder and run `npm i` to install the project's dependencies. Then you can start development on it.

## Development

To make this portfolio yours, you have two options. Use the existing structure for an easier experience, or create your own structure for more customization. Both options are fairly straightforward, as the app is designed so that everything you need to change is in the `src/app/services` folder.

### Using the Existing Structure

Open the `src/app/services/data` directory, and edit the headings, titles, descriptions, lists, cards, and paragraphs in the data files. Be careful with your use of apostrophes or speech marks. You need to use the opposite kind in order to contain them in a string.

e.g. `'This is a can of soup "for my family".'`  
or `"Don't tell the US government."`.

### Creating Your Own Structure

Feel free to delete the existing files in `src/app/services/data` and create new ones using the templates in `src/app/services/templates`. You will need to rename the exported const on the last line of each template to something appropriate (ie `export const ExampleTabData`)

Open `src/app/services/data-service.ts` and add your tab to `this._tabs` in the constructor. Don't forget to also import it at the top of the file (ie `import { ExampleTabData } from './data/example-tab-data';`). You can remove all the unwanted tabs from `this._tabs` when you do this.

### Adding an Image

To add an image, place it in the `/public` folder. From here it can be used on a card tab as the 'avatar' or 'imageSrc' value just by its filename. Check the `src/app/services/data` folder for examples of this.

### Using a Link

Links are  not currently supported. That is to say if you write a URL in one of your paragraphs it will appear as plain text. It can still be copied from there and pasted into the address bar, it just isn't clickable. I am considering adding a linkify script in the future (this is a function that parses the text you give it and finds URLs then turns them into links. That's how messaging apps tend to do it).

### Changing the Footer

To change the footer text, open `src/app/components/footer/footer.html`.

### Changing the Styling

I don't recommend this, but if you really want to you can edit any of the `*.less` files. You can also change the Angular Material theme and primary/tertiary colours in `src/material-theme.scss`.

## Serving

To run the app, run `npm start` from the root directory, and open [http://localhost:4200/](http://localhost:4200/). This watches, rebuilds, and refreshes the page automatically. If you don't see your changes, check the terminal for errors.

## Deploying to Github Pages
Before doing this, it's best to check everything is working locally, as described above in the `Serving` section. Make sure it builds, can be opened in your browser, and you don't see any console errors in the terminal or in your browser's dev tools.

1. Ensure you have pushed a commit to your repository. This makes Github recognize that the repo has a branch.
2. Go to your repository and click the `Settings` tab next to `Insights`.
3. Nav to `Pages` in the `Code, planning, and automation` section.
4. Under the `Branch` heading, set the branch to `main` and folder to `/(root)`, then click save.
5. Go into `package.json` and edit the `github-build` command so that it uses your username and repository name.
6. While you're there, edit the `github-deploy` command so that it uses your root folder name. (This should probably be `dist/` then your repository's name, for simplicity).
7. Run `npm run github-build` and `npm run github-deploy`.
8. Go back to the repository settings page and change the branch from `main` to `gh-pages`, then click save.
9. Go to the URL you used in the `github-build` command (there also should be a link in the repository settings page), and check if the page is live. If it just shows the README file, it may be still processing so give it more time.
