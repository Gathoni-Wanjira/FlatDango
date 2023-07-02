## INTRODUCTION.  
 --- 

  - You are required to create a movie vending app, `FlatDango`, where you can be able to see the list of available movies, purchase a movie and even remove a movie from the profile.
  - You will use a local API and build out the frontend for our app.

### DESCRIPTION .     
 ----   
  - This project is a web application designed for users to see the first movie's details, including its **poster, title, runtime, showtime, and available tickets** when the page loads. The number of
   available tickets will need to be derived by subtracting the number of
   `tickets_sold` from the theater's `capacity`.  
     - You will need to make a GET request to the endpoint to retrieve the film data:

    - See a menu of all movies on the left side of the page in the `ul#films` element when the page loads.    

    - Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should
   see the number of available tickets decreasing on the frontend. I should not
   be able to buy a ticket if the showing is sold out (if there are 0 tickets
   available). **No persistence is needed for this feature**. 


- The frontend consists of HTML, CSS, and JavaScript. It utilizes DOM manipulation to dynamically generate the pet cards and handle user interactions like buying a ticket and deleting movies from the profile. Event listeners are attached to the buy ticket buttons and remove buttons to trigger the corresponding actions.  

 

### REQUIREMENTS.   
 ---

  - Fetch data from a local server running `JSON DB` server.

 ### PROJECT SETUP & PRE-REQUISITE  DATA.  
 ---  

  - In your project directory, create a db.json file.
  - Run this command to get the backend started: `json-server --watch db.json`
  - Test your server by visiting this route in the browser:` http://localhost:3000/films`


## AUTHORS . 
 ---

- [Gathoni Wanjira .](https://github.com/GATHONI-WANJIRA)

## LICENSE .   
 ---

 - Released under the [MIT](https://opensource.org/license/mit/) License.