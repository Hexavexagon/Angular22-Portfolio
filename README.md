# Angular 22 Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.2.

---

## Development

To run the app, run `npm start` from the root directory, and open `http://localhost:4200/`. This watches, rebuilds, and refreshes the page automatically. If you don't see your changes, check the terminal for errors.

---

## Usage

To make this portfolio yours, open the `src/app/services/data` directory, and edit the headings and paragraphs in the data files. Be careful with your use of apostrophes or speech marks. You need to use the opposite kind in order to contain them in a string.

e.g.
`'This is a can of soup "for my family".'`  
or
`"Don't tell the US government."`.

To remove a tab from the tab group, open `src/app/services/data/whitelist-data.ts`, and set that tab's value to false.

To change the footer text, open `src/app/footer/footer.html`.

---

## Deploying to Github Pages

1. Ensure you have pushed a commit to your repository. This makes Github recognize that the repo has a branch.
2. Go to your repository and click the `Settings` tab next to `Insights`.
3. Nav to `Pages` in the `Code, planning, and automation` section.
4. Under the `Branch` heading, set the branch to `main` and folder to `/(root)`, then click save.
5. Go into `package.json` and edit the `github-build` command so that it uses your username and repository name.
6. While you're there, edit the `github-deploy` command so that it uses your root folder name (this will be what the folder in dist is called).
7. Run `npm run github-build` and `npm run github-deploy`.
8. Go back to the repository settings page and change the branch from `main` to `gh-pages`, then click save.
9. Go to the URL you used in the `github-build` command, and check if the page is live. If it just shows the README file, it is still processing so give it more time.