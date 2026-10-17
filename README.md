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