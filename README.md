QUIZROOM

This app was created for the use of students in a classroom to be able to create questions for other students in the same classroom to take; to help
prepare them for an upcoming exam or test.

HOW THE APP WORKS

-       Users can register and login into the app
https://www.dropbox.com/s/dsy6owe275yjqw4/registration%26loginpart1.mp4?dl=0
-       Anyone can create a classroom and anyone can register into a classroom
-       Creators of a classroom can create topics for the classroom
https://www.dropbox.com/s/2rx1pxqte9o0j8v/InstructorsCreateQuestion.mp4?dl=0
-       Instructors and students can create questions for each topic unles topic was created to have instructor created questions only
https://www.dropbox.com/s/ybnz9mkkbqshow9/userCreatesClassroomAndTopic.mp4?dl=0
https://www.dropbox.com/s/jwqz8hi5ivu3gio/Student%20CreatingQuestion.mp4?dl=0
-       Creators of a classroom can also manage students in their classroom, such as upgrade them to TAs, remove, and view their scores
https://www.dropbox.com/s/34b9zx1ovj7vm7u/instructorUpgradeStudents.mp4?dl=0
-       Anyone can take a quiz, quizzes are are based on each topic 
https://www.dropbox.com/s/2men406irkm7nty/StudentQuizAndProfile.mp4?dl=0
-       Instructors can upgrade students to TAs and downgrade TAs to students https://www.dropbox.com/s/34b9zx1ovj7vm7u/instructorUpgradeStudents.mp4?dl=0
https://www.dropbox.com/s/jjjjwr1571zwl5m/TAnavigationOf%20The%20App.mp4?dl=0
-       Instructors and TAs can review questions students submitted to check if they are appropriate
https://www.dropbox.com/s/ohsdck1cesdg1w4/ReviewQuestionsAndSendMessage.mp4?dl=0
-       Students recieve message from question reviewed by instructors and fix the question
https://www.dropbox.com/s/sagrls2p233d5dg/studentrecievemessage.mp4?dl=0


                                                      HANDOVER
                                                      
                                                    NATIVESCRIPT
	This project was created using Nativescript, Angular and Firebase.  To make changes to this project the developer needs to have Node.js, npm, Nativescript (npm plugin) and typescript (optional) installed on their system. Nativescript converts typescript to js before converting it to native code for each device. To copy this project simply clone the repository on their local repository, opening the project in their code editor and running the project. This project uses a variety of plugins installed via npm to make it work, they can be found in ‘node_modules’ in the ‘app’ directory. This project also interacts with Google’s Firebase API, this serves as the database storage also. 
	The files where the project interacts with firebase can be found in the ‘Services’ folder in the ‘firebase.service.ts’ and firebase.service.1.ts’ files. These two files are responsible for the handling of data from and to the firebase API; they also make asynchronous calls to the database, meaning any changes made to the database is automatically shown in the app. The file ‘Backend.service.ts’ stores cookies for each user that login into the app, this is to prevent constant calls to firebase to retrieve information.  These files mainly have the add methods which add to firebase based on the node path you give to it. The other very important methods are the get functions, these use ‘onvaluechange’ events meaning it makes asynchronous change. Get functions will also call other functions, these functions will usually have ‘snapshot’ in their name, these functions serve as a filter like a query.
	Lastly, navigation can be edited if you are familiar with angular routing, in the app-routing.ts contains the navigation names to all the modules in the app. As for the sidedrawer, you can change the contents in the ‘app/shared/shared-item’ folder.
  
  
                                                      FIREBASE
	Firstly, I would suggest doing the tutorial on nativescript and firebase by Eddy Verbruggen. You should receive the login information for firebase from your supervisor. Here, you can view all the data stored in the ‘RealTime Database’. Data is stored in nodes rather than tables, and each node will have children.  
  To create a new database for testing the best thing to do is create a new project in the firebase console. Then add you want to add an ios and android app, give them the same name/id so when the app runs on different platforms the data they access is the same. When creating an app for android download the ‘Google-Services.JSON’ the correspondant for ios is ‘GoogleService-info.plist’. Add the plist file to app/App_Resources/IOS and for the json file add it to ‘app/App_Resources/Android’ and also add it to ‘Platforms/Android’. Next thing is to make the project name in the project match the one you created in the firebase console. Using your text editor change the ‘projectname’ in the package.JSON file to the one that was created on the console. Then navigate to ‘app/App_Resources/Android/app.gradle’ and change the applicationId to the name created on the firebase console. Lastly change the ‘storage Bucket’ variable which stores a link to the storage bucket as a string this can be found in app/main.ts; to get the storage bucket link in the firebase console go to ‘develop/storage’ and the link can be found on the upper-left corner of the table. Then run the app and it should successfully connect to your firebase Realtime Database.
  To conclude, I would greatly suggest reaching out to the nativescript community via github if you wish to add a new feature and your are having troubles.



