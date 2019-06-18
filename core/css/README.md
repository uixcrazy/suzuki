# Structure CSS

> jss, css, bootstrap



## table of contents

 -    [write by CSS-in-JS](https://cssinjs.org )
 -    [Bootstrap ⇢ use reboot, breakpoint, variables](https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints)
 -    [Layout with Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) ::: [original docs](https://www.w3schools.com/css/css3_flexbox.asp)



## css architecture

  [like itcss](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)

  We have:

    1. CSS reset
      - variables, fonts, colors definitions, ...
      - [bootstrap-reboot] reset and/or normalize styles, box-sizing definition, ...
      - [maybe at reset|preset|reboot] bare HTML elements (like H1, A, etc.)
    2. Libraries CSS
    3. React Components

          +----------------+
          |                |
          |                |
          |   css-reset    |
          |                |
          |                |
          +--------+-------+
                   |
                   |
                   |
          +----------------+
          |                |
          |                |
          |   libraries    |
          |                |
          |                |
          +--------+-------+
                   |
                   |
                   |
          +----------------+
          |                |
          |                |
          |   React Cmps   |
          |                |
          |                |
          +--------+-------+

  ##### ***Notes: index style tag (indexCounter)

  | React-JSS | -Number.MAX_SAFE_INTEGER |
  |---        |---|
  | libraries | -Number.MAX_SAFE_INTEGER - 10 |
  | reboot    | -Number.MAX_SAFE_INTEGER - 20 |

  ##### ***Please don't use `require('./styles.css')`
  because it isn't removed when React-Component unmount. (still live forever)



## how to use

- at root app | modules | workspaces: we'll wrap by Provider
- at react-component: `import withStyles from 'react-jss' // withStyles(styles)(App)`
- if we want to include CSS files to react-components: `import injectCSS from '**/injectCSS'`



## test case

 - [x] add style preset + @font-face (... all basic things for a module)
 - [x] add specifics CSS files for a react-component AND remove if cpms unmount
 - [x] don't define Provider

*** Expected:

 - [x] we don't duplicate <style data-jss ...>



## write storybook
 - [ ] show demo for css-variables (làm sao dùng js load hết 1 lần)
 - [ ] làm demo for responsive vs breakpoints
 - [ ] ---
 - [ ] isolate dc #root -> tức là ở roots nó sẽ dc reset lại
