#Lab Tasks

After you have cloned the project and set it up as specified in the Readme, complete the following tasks, answering any
questions by editing this file. 

## Part #1: exploring the project.

- Try adding new pets on the index page through the form. Try deleting entries. Observe the results. 

> Protip: You'll need to start up the server before you can play with the website.

- Click links on the navigation bar. See what happens. Note that when you move away from the page with pets, your changes to the list of pets are lost. This is because we are not storing the model in a database (this would be a part of the next lab). 
- Observe elements formatting (it's done via bootstrap). As you are working on the questions below, experiment with the project to get a better sense for what each element is. 

##### List all the files at the top level of your project (i.e. not in public) and briefly state the purpose of each one, as you understand it. You might want to postpone describing some files until you work with the project a bit more. 
##### List the folders in the public folder and describe what their purposes are for each.
##### Open the file main.controller.js in the javascript folder of public. What are the controllers there (by name)? 
##### Open the index.html view. What controller is it using? 
##### Where is the navigation bar included in the source code for index.html? 
##### Add a pet to the array, data (in the controller). See the change on the web page (you need to reload, but not restart). 
##### How are new items added and deleted through the web page? (i.e. - What functions from the main controller are used, and what Angular directives allow them to interact with the view?)
##### Open navbar.html view. What is its purpose? How would you go about adding links to the navigation bar? 
##### Find two instances of use of bootstrap (see above) in either navbar view or index view or both; explain what is formatted. 

>Protip: Bootstrap is awesome. Start using it. Seriously. This allows you to do fancy things with styling (CSS) with very little effort. Think back to lab 1. http://getbootstrap.com/components/ <- Regular Bootstrap. https://angular-ui.github.io/bootstrap/ <- Angular Bootstrap. These offer separate functionality and both can be used simultaneously.

##### Stop the server by pressing Ctrl-C in the terminal, type "grunt test" to run tests. Where are the tests located?

## Part #2: modifying the project.

- Set up Travis CI and add the build status icon to your project's README.
  - This should have been done as part of the setup.

- Currently clicking on "kittens" returns the "page under construction" message. Using the view about.html as a sample, add a page that has a navigation bar. Add an image of your choice to the page (be aware of copyright rules) and a div that describes the image). 
- Explore bootstrap by changing formatting of the page (for instance, position of the image and text). It doesn't have to look nice, just different from what it currently is. 

## Part #3: adding the GPA calculator.
- Your goal is to add a page with a form that allows a student to add their courses (course name, number of credits, and letter grade) and displays their GPA. The GPA changes as courses are added or removed. As before, letter grades are A, B, C, D, and F only. 
- The controller for the GPA needs to be added to main.controller.js. Think of what needs to be in its scope. 
- Add the necessary view, include the navbar into it, and then add the GPA calculator. Add one feature at a time, make sure everything is working as it should. 
- As before, use TDD for all the helper functions (you may reuse the tests from the previous lab). Now they will all be located in public (client-side). No need to modify karma files since it's already testing client-side javascript. 
- Use different color for displaying the GPA, depending on whether it is below 2.0, between 2.0 and 3.0, and 3.0 and above. Use your own CSS or bootstrap. 
- Perform simple data validation (add the corresponding function to the controller) so that invalid entries (invalid grades or wrong number of credits) are not added to the model. An error message needs to be displayed to the user). 


