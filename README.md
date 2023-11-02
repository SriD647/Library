# **Welcome to the Library**

 Library is a simple web API that allows a user to create a book, view books/book, update a book, and delete a book. Hence, this API has full CRUD functionality on the book data entity. 

---

## **How to install the app on your local machine**

Please follow the following steps to install a local copy of project:<br>

1. Copy the following SSH link of the remote repository: `git@github.com:SriD647/Library.git`<br>
  
2. Use the following command on terminal to create local directory on your computer at a location of your choice. This directory will host the local repository.
 <br><br>``mkdir filename``<br>
 
   Make sure to be in that file using the terminal command:<br><br>``cd filename `` <br>
  
3. Enter and run the following command on the terminal, using the link from step 1 (replace word link with actual link from step 1).<br><br>` git clone link `<br><br>  You should now have local copy of the project in the created directory. Please make sure to be in the project folder with the use of terminal command:<br><br> `cd Library`<br>

## **Pre-run project set up**

1. Ensure you are in the project folder as instructed in step 3 from above. Install the necesessary project dependencies in project folder using terminal command:<br><br>``npm i``<br>

2. Create a .env file and a .gitignore file in the project folder using the following terminal command:<br><br> ``touch .env .gitignore``<br><br> The purpose of the env file is to store sensitive information and git ignore prevents whatever is mentioned in it from being pushed into github.

3. Open the project on VS Code using the terminal command:<br><br> ``code .``<br>

4. In the .env file add the following. Make sure to paste the appropriate information as instructed :<br>

```
MONGO_URI= <paste here your mongoDB uri>
``````

## **Running the application in dev mode** <br>

Making sure we are still in the root directory of the project please run the following terminal command:<br><br>` npm run dev`<br>

If the app is running correctly, you will see the following messages on the terminal:<br>


``Mongodb is connected``<br>

``running on port: 3000``  <br>

The former indicates you are successfully connected to the database and the latter indicates the server is up and running.

---