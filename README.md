# Sass Deployment with Shopify CLI

This is a test for Sass deployment in Shopify Dawn Theme using Shopify CLI.

---

## 1. DEPLOY USING LIVE SASS COMPILER EXT.

Method: Use Live Sass Compiler ext. to compile and watch Sass

**TEST RESULT**: Successful :grin:

> Note: You will need to remove any sub-directories and put all the files in assets folder

---

## 2. DEPLOY USING GULP

### Step 1: Create a node project

```
npm init
```

### Step 2: Install gulp packages

```
npm install gulp
```

> Do make sure that the node module is not included in gitignore

### Step 3: Install gulp Sass

```
npm install node-sass gulp-sass
```

### Step 4: Install Sass

```
npm install sass
```

### Step 5: Add gulpfile.js

```
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
    return gulp.src('styles/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('assets'))
});

gulp.task('watch', function() {
    gulp.watch('styles/**/*.scss', gulp.series('sass'));
})
```

Run command: `gulp sass` to compile and `gulp watch` to monitor

**TEST RESULT**: Successful :grin:

---

## 3. GULP TROUBLESHOOTING

**gulp: command not found**

To solve the error "gulp: command not found", install the gulp-cli package globally by running `npm install -g gulp-cli` and restart your terminal
Check if the directory is correct
`npm root -g`

- On PC, it might be `C:\Users\YOURNAME\AppData\Roaming\npm\node_modules`
- On Mac, it might be `/usr/local/lib/node_modules/`
  For Mac users, if the root command returns a directory like /Users/YOURNAME/node_modules then this will cause the command not founderror.
  To fix it, you can change what your npm root folder is set to by running: `npm config set prefix /usr/local`

Read more [here](https://coder-coder.com/fix-gulp-command-not-found-error/)

**Error: EACCES: permission denied, access '/usr/local/lib/node_modules'**

`mkdir ~/.npm-global`
Configure npm to use the new directory path:
`npm config set prefix '~/.npm-global'`
In your preferred text editor, open or create the ~/.profile file and add this line:
`export PATH=~/.npm-global/bin:$PATH`
On the command line, update your system variables:
`source ~/.profile`

Read More: [link](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally#manually-change-npms-default-directory)

**gulp.series doesn't work**

Update your gulp version to at least 4.0.0 or to the latest version
Update dependencies

```
"dependencies": {
  "gulp": "^4.0.0"
}
```

You can also update the command-line interface using `npm i gulp-cli -g`</br>
To check the installation, enter `gulp -v` at the command line

Read more [here](https://www.sitepoint.com/how-to-migrate-to-gulp-4/)
