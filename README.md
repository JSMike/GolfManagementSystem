Final Project
=============

Final project for Villanova CSC8490 by Michael Cebrian.

For this project we had to design an ER model. Convert the model into a 3NF
Relational Model. Create the appropriate DDL and DML calls using Oracle to
create the database and populate each table. Then create a program that could
read and modify the data. The program requirement was not include all of
functionality that one might expect in an application which was using this ER
model, except to demonstrate our ability to read from the database and manipulte
the data, and using some programing language. I was able to do this very
efficiently with Node.js by creating a web server and API with Express Server
and then using Angular to display the data and interact with the API. I spent
in total about 8 hours building what is available here as an example of working
with Oracle in Node.js, it is not a functional Golf League Management system
which should be used by a golf league. On the other hand this may contain good
examples for learning how to work with an Oracle Database in Node.js, and how
to set up a single page application using Node.js, Express server, and Angular.


To run this application you must have node.js, npm and bower installed.
If you have node.js and npm installed but not bower you can run the following:

npm install -g bower

Then to install the modules and libraries used by this application run:

npm install
bower install


Note: One of the dependencies is the strong-oracle modeule, this will require
a C++ compiler, either GCC for linux or Microsoft Visual Studio in windows.
Strong-oracle also requires libraries from oracle instant client in order to
compile. See the instructions on their npm page:
https://www.npmjs.com/package/strong-oracle

After these modeules and libraries are installed use the following to run the
application:

node server.js
