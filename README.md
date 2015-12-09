# CSCI 3601 Lab #3 - Angular
In this lab you will learn to use AngularJS. 


Your specific tasks for this lab can be found in the [LABTASKS.md](LABTASKS.md) file in this repository.

#Setup:
Install dependencies with npm and bower by running:
```
npm install && bower install
```
> npm is generally used to manage server and development dependencies, whereas bower is generally used to manage client side dependencies

#Running Your Project:
To serve your project, run:
```
grunt serve
``` 
> Grunt is a task runner that helps automate all that stuff you had to type during the last lab. Right now, ``grunt serve`` is set up to run nodemon, which will automatically
restart your node server whenever it detects changes to your project.

Served projects should be available on localhost:9000 by default.

>If you get an error something along the lines of ``bash: grunt: command not found`` you probably don't have grunt installed correctly. Please let a professor or DM know about this. 

#Testing Your Project

To run your tests, run:
```
grunt test
```
> If this doesn't work, please let a professor or DM know about it.

You can also run your tests through the webstorm karma run configuration (right click karma.conf.js, etc.) If you're interested in setting this up talk to Professor KK or a lab assistant.

##Resoures
#####Bootstrap Components:
http://getbootstrap.com/components/

#####Getting started with grunt:
http://gruntjs.com/getting-started

#####Tutorial for testing with jasmine
http://jasmine.github.io/2.0/introduction.html



