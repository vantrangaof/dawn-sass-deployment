# Sass Deployment with Shopify CLI

This is a test for Sass deployment in Shopify Dawn Theme using Shopify CLI.

---

## DEPLOY USING LIVE SASS COMPILER

Method: Use Live Sass Compiler ext. to compile and watch Sass

**TEST RESULT**: Successful :grin:

> Note: You will need to remove any sub-directories and put all the files in assets folder

---

## DEPLOY USING GULP

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

Run command: `gulp sass` to compile and `gulp watch` to monitor

**TEST RESULT**: Gulp install bash issue (checking...)
