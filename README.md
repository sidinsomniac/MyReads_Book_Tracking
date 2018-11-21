# MyReads Project

## Description
This project is a bookshelf app, that lets you organize books based on whether you have read them or not, or if it's in your wishlist. The purpose of this project was to implement my knowledge and skills on React to develop the app based on the requirements of the Project Rubric and best practices.

## How to run this app

* You can download the ZIP file or [clone this repository](https://github.com/sidinsomniac/MyReads_Book_Tracking) with the command `git clone` in your terminal
* Then install all project dependencies with `npm install`
* Finally, start the development server with `npm start`

**TL;DR** _Run the following lines of code in your terminal:_
```
git clone https://github.com/sidinsomniac/MyReads_Book_Tracking
npm install
npm start
```
* A new browser window will automatically open, displaying the MyReads app.

## How does the app work

* There are three shelves containing a few books each:
i. Currently reading
ii. Want to read
iii. Read
* To change the location of a book from one shelf to another, simply click on the **green dropdown button** on the cover, and select the shelf category.
* To search for more books, click on the *green button with a '+' symbol below*, and then enter your query into the search input bar. Similar to the previous step, you can select your shelf category with the **green dropdown button**. You can go back with the arrow button beside the search bar.

#### Note
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

***

## Acknowledgements
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).  
* Also, the project starter template is from [this Udacity repo](https://github.com/udacity/reactnd-project-myreads-starter).
* This is the [Project Rubric](https://review.udacity.com/#!/rubrics/918/view) specifying each feature of the app.