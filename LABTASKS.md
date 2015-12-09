#Lab Tasks

After you have cloned the project and set it up as specified in the Readme, complete the following tasks, answering any
questions by editing this file. 

## Part #1: exploring the project.

- Try adding new pets on the index page through the form. Try deleting entries. Observe the results. 

> Protip: You'll need to start up the server before you can play with the website.

- Click links on the navigation bar. See what happens. Note that when you move away from the page with pets, your changes to the list of pets are lost. This is because we are not storing the model in a database (this would be a part of the next lab). 
- Observe elements formatting (it's done via bootstrap). As you are working on the questions below, experiment with the project to get a better sense for what each element is. 

##### List all the files at the top level of your project (i.e. not in public) and briefly state the purpose of each one, as you understand it. You might want to postpone describing some files until you work with the project a bit more. 
##### Describe the structure of the "public" folder and its subfolders. 
##### What folders exist in your local copy that are not a part of github repository? 
##### Open the file main.controller.js in the javascript folder of public. What are the controllers there (by name)? 
##### Open the index.html view. What controller is it using? 
##### Where is the navigation bar included in the source code for index.html? 
##### How is the list of pets generated? Mention specific Angular directives and calls to functions in the controller. Add a pet to the model (in the controller), see the change on the web page (you need to reload, but not restart). 
##### How are new items added and deleted? Describe a sequence of functions that are called; where are these functions located, and how does index.html specify which functions are called? 
##### Open navbar.html view. What is its purpose? How do links to pages get into the navigation bar? What happens (in the project) when I click on a link "about"? what happens when I click on "kittens"? Refer to app.js to explain your observations. 
##### Find two instances of use of bootstrap (see above) in either navbar view or index view or both; explain what is formatted. 
##### Stop the server by pressing Ctrl-C in the terminal, type "grunt test" to run tests. Where are the tests located? What are they testing? 


