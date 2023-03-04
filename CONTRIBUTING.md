# Contributing to the extension

_Note: Documentation isn't complete yet, but I'm currently working on it to provide full documentation and guidelines for anyone who wants to contribute in this extension._

**// in Progress ...**

### How to start / run

First clone the project via the command below to your desired folder:

```bash
git clone https://github.com/mmhlego/VsCodeforces.git
```

Then install all of the required dependencies using the command below:

```bash
npm install
```

After that you are ready to run the project. To run the project on your local machine, press `F5` to open a new window with your extension loaded.

### Different Folders and Packages

- **.vscode**: This folder contains the configuration and extensions needed for the development process.
- **app**: Contains all the logic and UI designs implemented in reactJs which contains different packages:
  - **api**:
  - **assets**:
  - **components**:
  - **context**:
  - **model**:
  - **pages**:
  - **routes**:
  - **index.tsx**:
- **media**: Contains all of image and video files used in the docs or other assets like extension logo and etc.
- **src**:
- **test**: Contains all the tests which run automatically when the extension runs.
- _out_: Contains all the generated compiled extension files.
- _node_modules_: Contains all dependencies required for the development process.

### Config Files

- `/app/tsconfig.json`:
- `/tsconfig.json`:
- `/webpack.config.js`:
