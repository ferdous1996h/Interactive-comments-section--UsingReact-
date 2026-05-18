# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9).

## Table of contents

* [Overview](#overview)

  * [The challenge](#the-challenge)
  * [Screenshot](#screenshot)
  * [Links](#links)
* [My process](#my-process)

  * [Built with](#built-with)
  * [What I learned](#what-i-learned)


## Overview

### The challenge

Users should be able to:

* View the optimal layout for the app depending on their device's screen size
* See hover states for all interactive elements on the page
* Create, Read, Update, and Delete comments and replies
* Upvote and downvote comments
* **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
* **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot
|App Screenshoot|
|---------------|
|![Screenshoot](./public/images/screenshoot/Screenshot%20.png)|


### Links

* Live Site URL: [Add live site URL here](https://interactive-comments-section-using-tawny.vercel.app/)

## My process

### Built with

* Semantic HTML5 markup
* CSS custom properties
* Flexbox
* CSS Grid
* Mobile-first workflow
* [React](https://reactjs.org/) - JS library


### What I learned

- helper function can be use as js not jsx because it doesn't contain any render content , just calculation
- If new value depend on previous value or state always use functional update
> Example==>
  ```javascript
  setData(prev => {
      const newComment = deleteByID(prev.comments, deleteData);
      return {
        ...prev,
        comments: newComment,
      };
    })
  ```
- Using crypto.randomUUID() for better and secure random ID
- use **useCallback** prevent unnecessary creation of function in each render & memoize the function work  .And dependency change create again this function. Also using empty dependency as this function is not depend on data ,result or anyState
- use **useMemo** so that in every render context provider doesn't provide new object , which causes consumers to rerender also
