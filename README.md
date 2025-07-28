# Expense Tracker

A simple web application to record and visualize your expenses and income.

## Features

- Add income and expense movements.
- View a list of movements with type, name, and value.
- Delete movements easily.
- Switch movement type using keyboard or mouse.
- Responsive and modern UI.
- **All data is stored locally in your browser (no server required).**

## Project Structure

```bash
index.html
package.json
src/
  img/
    close-icon.png
  js/
    controller.js
    helpers.js
    model.js
    view.js
  sass/
    _base.scss
    _components.scss
    _country.scss
    _form.scss
    _main-header.scss
    _movements.scss
    main.scss
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/daxhoDev/expense-tracker.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Project

Start the development server with Parcel:

```bash
npm run start
```

Then open the local server URL in your browser to use the app.

## Technologies

- HTML, CSS (Sass)
- JavaScript (ES6)
- Parcel (bundler)
- No external frameworks

## License

This project is licensed under the MIT License.
