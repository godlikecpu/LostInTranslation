# Lost In Translation :notebook_with_decorative_cover:

Lost in translation is a web application based on React.js where the user can translate English words and short sentences to American sign language.

## Features:

<b>Startup page:</b> which is also the Login page. The user can enter his name and login to the main page. The name is stored in the local-storage.

<b>Translation page:</b> the user can input Englis words or short sentences to translate to American sign language. The user can save up to 10 translations. If there is already 10 translations in the local storage the oldest translation is replaced with the new one. 

In the translation box the corresponding Sign language characters appear. The user can navigate to the profile page after saving the translations. There is a limit of 50 characters for the user input.

<b>Profile page:</b> it displays the 10 translations with text and the corresponding Sign characters that are stored in the local storage. The user can delete all the translations from the local storage. The user can logout and in that case the user will be redirected to the Login page and the username will be deleted from the local storage.

## Author
Dan Tomicic

Hunor Vadasz-Perhat

# Getting Started with Lost in translation app

After cloning the repository run `npm install` to install the necessary dependencies. 
Afterwards application can run by using `npm start` command from root folder of the project.




