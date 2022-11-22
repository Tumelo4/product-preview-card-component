# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### Screenshot

![](./screenshot/Product_preview_card.png)


### Links

- Solution URL: [Solution URL here](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa/hub/product-preview-card-WP7iOVvte9)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

```html
<picture>
      <source media="(max-width:375px)" srcset="./images/image-product-mobile.jpg" class="image">
      <img src="./images/image-product-desktop.jpg" alt="" class="image">
 </picture>
```
```css
.button-style:hover {
  background-color: hsl(155, 84%, 12%);
}

@media (max-width: 375px) {
  .flex_Box_Container {
    flex-direction: column;
    align-items: center;
    padding: 0%;
    padding-top: 4%;
    padding-bottom: 4%;
  }

  .image {
    border-radius: 8px 8px 0px 0px;
  }

  .content {
    border-radius: 0px 0px 8px 8px;
  }
}


### Continued development

responsive web design, layout [focal point, white space and hierarchy] and advance javacript


## Author

- Website - [Tumelo](https://github.com/Tumelo4)
- Frontend Mentor - [@Tumelo4](https://www.frontendmentor.io/profile/Tumelo4)
- Twitter - [@tumelo108620031](https://www.twitter.com/tumelo108620031)


## Acknowledgments

Thanks to Frontend Mentor my skill will improve
