# FestivalFlow


This website has been designed to help me in my voluntary work as an exhibitor manager for a small festival in Wallonia.

This job consists of making or renewing contact with exhibitors, often known for a long time, and monitoring the contractualization and follow-up of payments for the upcoming edition. 

Without this website, I'd use Excel spreadsheets (to draw up a list of exhibitors and their contact details, to have a summary of the follow-up to their commitment for the coming edition, notes to remind me of certain things, etc.), a mailbox of course (for exchanging messages with exhibitors but also with the rest of the organizing committee), the files in my office (for all documents, mail templates and archives), and a map of the festival site by the use of I allocate emplacements. 

I wanted to centralize all these tools into one, in the hope of being able to automate certain tasks (typically reminder emails for contract signature and payment). 
In terms of data construction, I organize the *prioritization of functionalities* as follows:
1. Enable contact to be made
2. Organize and save data
3. Make the data communicate with each other 

Having started during my frontend developer training, I'd do a lot of things differently if I had to do it again: One of the big mistakes I made was to put the backend and frontend on the same git. I'd also simplify the server because what I've been using is disproportionate to my needs (but it's allowed me to practice express and mongoose). All the things I'd like to continue and improve are detailed [below, in the conclusion section](#Conclusion).




## Table of Contents

1. [Needs analysis](#needs-analysis)
	1. [Job details and tasks](#job-details-and-tasks)
	2. [List of requirements](#list-of-requirements)
	3. [Prioritization of website functionalities](#prioritization-of-website-functionalities)

2. [Utilities](#utilities)
   	1. [Technologies used](#technologies-used)
	2. [Softwares used](#softwares-used)

3. [Backend](#backend)
	1. [Database](#database)

4. [Frontend](#frontend)
   	1. [Structure for now](#structure-for-now)
		1. [assets](#assets)
		2. [features](#features)
		3. [pages (with visuals and mockups)](#pages)
		4. [services](#services)
		5. [shared](#shared)




## Needs analysis


### Job details and tasks

The festival in question has around 30 emplacements allocated to exhibitors. Firstly, restaurateurs provide festival-goers with food and drink. Secondly, luthiers are part of the festival's history, from a festival of musicians to a festival of dancers. Despite this evolution, the lutherie stands hold an important place, both for the identity of the festival, but also for many festival-goers who come to buy and/or repair musical instruments. Thirdly, the other exhibitors provide a variety of offerings to liven up the festival, in addition to the dancing and music.

To prepare for this, the exhibitor manager contacts exhibitors from previous years, taking care to maintain a good balance between restorers, luthiers and other exhibitors. In particular, she must ensure that restorers do not compete with each other. If she doesn't have enough exhibitors registered in total, or for part of the offering (for example, there are no exhibitors offering dancing shoes, which is still a good thing to have for a dance festival), she contacts new people.

In the registration process, she first asks if the exhibitor is interested in returning this year. If not, she asks if it's for this year only or in general. If yes, she sends the contract and potentially details the information if it's a new exhibitor. The possibility of having an advertising frame on the festival website is possible, for an additional charge. To complete registration, the contract must be signed and payment made. This may require several reminders. Following this, the exhibitor is expected at the festival, potentially with a personal welcome if the exhibitor is new. After the festival, the exhibitor manager is responsible for ensuring that deposits are reimbursed, in conjunction with the treasury department.

A number of items of information need to be passed on to other members of the organizing committee:

- Information concerning the list of exhibitors (number of festival passes, etc.) is forwarded to the secretariat.

- Information concerning pitches (number of pieces of furniture required, voltage for electrical appliances, etc.) is passed on to infrastructure and site management. 

- Information concerning the list of exhibitors and the amounts expected to be paid is forwarded to the treasury department.

- Information on exhibitors who have opted to pay for advertising on the festival website is forwarded to the communications manager.

Because coordination between managers is important, and major decisions concerning the festival as a whole are made collegially, a committee meeting is held monthly. Agendas and minutes are exchanged. The Exhibitor Manager must therefore also follow up on this point.


### List of requirements

- Receive and send e-mails to one or more recipients
- Organize e-mails according to recipients
- Read saved recipient information
- Add, delete and modify recipients
- In general, manage data for each recipient (especially exhibitors)
- List and sort exhibitor recipients by various criteria 
- Retrieve attachments and centralize them
- In certain cases (meeting minutes), concatenate and synthesize the content of attachments
- Reuse e-mail templates, and modify them before sending
- View exhibitor locations on a map
- Add, modify and delete exhibitor locations via an interactive map


### Prioritization of website functionalities

1. Enable contact to be made

2. Organize and save data

3. Make the data communicate with each other 


## Utilities


### Technologies used

#### In the backend:

- body-parser (v1.20.3)
- concurrently (v9.1.0)
- cors (v2.8.5)
- express (v4.21.1)
- MongoDB (v6.11.0)
- mongoose (v8.8.3)
- nodejs (v10.8.1)
- nodemon (v3.1.7)

#### In the frontend:

- axios (v1.7.7)
- classnames (v2.5.1)
- react (v18.3.1)
- react-router-dom (v6.27.0)
- react-select (v6.27.0)
- swr (v2.2.5)


### Softwares used

#### In the backend:

- MongoDBCompass
- ThunderClient (in the beginning)
- Postman (then I changed)
- Visual Studio Code

#### In the frontend:

- Adobe Illustrator (for the "step" icons)
- Balsamiq
- Figma
- Visual Studio Code
- Firefox
- Google Chrome
- Microsoft Edge



## Backend


### Database

|Class Diagram|
|-------------|
|![FestivalFlow Class Diagram](https://github.com/user-attachments/assets/11fc46b8-b4ac-41b9-8786-f66a5cd98e3e)|
| _made with Umbrello in UML_ |


Each class above corresponds to a collection in the database. 


I exchange e-mails with exhibitors and committee members. As the stakes are not the same, I have differentiated my speakers in these two categories. “Individual” is a collection in its own right for two reasons: The first is that some former committee members have become exhibitors, and I was interested in having a record of this should it happen again. The second reason is that exhibitors can be individuals or legal entities, and having a table that differentiates between an individual and a business gave me greater flexibility. For example, the members of an organization can also change while I'm still doing business with the organization. Plus, the rgpd is different for an individual or a legal entity and this data organization allows me to differentiate the treatment of their data. 

The “individual” object is either a committee member or an exhibitor, but cannot be both at the same time.

If an exhibitor is interested in taking part in the festival, he can accept a service contract. I had called the class “application” because, when I was making the database, I thought that, as not all requests resulted in a contract, it might be confusing. Now that I'm making the documentation, given that the theoretical purpose of any exhibitor's application is to be contracted, it makes much more sense to call it a contract directly, even if it doesn't result in a contract. 

For each contract, one or two spaces are assigned to an exhibitor (two spaces because he has a double stand). Here too, the class is misnamed and should be called “location” or "space".

As a contract is signed for a single edition but can be renewed to a next edition, the exhibitor can eventually have several contracts. On the other hand, he can only commit to one edition at a time. An edition brings together several exhibitors, this class summarizes the list of exhibitors who participated that year, as well as th relating contract and the e-mails exchanged.



## Frontend


### Structure for now

#### assets

Fonts and images can be found here. In the images, there are only icons, but they are arranged according to their use in the site (navbar, luthier, restorers...).

#### features

Components are organized into features. 
For the moment, there is only the “Exhibitor” feature, which contains the following components:
|name of the component|description|props|children|
|---------------------|-----------|-----|--------|
|**AddExhibitor**|adds a new exhibitor to the database| _no props_ | _no children_ |
|**ExhibitorInfos**|display all the informations (and emails) about this exhibitor and individuals related|thisExhibitor|IdentityItem, AccordionItem
|**ExhibitorList**|lists all exhibitor and some of their informations (such as name, specialty, icon...) following 2 different formats: div (for the listPage) or li (for the mapPage). There is also props about filtering, sorting and ordering the exhibitors|format, defineFilter, defineSort, defineOrder|ExhibitorName (in div format), LastEmail (in div format)|
|**ExhibitorName**|display some informations about an exhibitor (icon, name of the business and the name of the contact person)|thisExhibitor| _no children_ |
|**ExhibitorSearchBar**|search field and sorting, filtering and ordering options| _in construction, no props yet_ | _in construction, no children yet_ |
|**ExhibitorSteps**|monitors the progress of a contract with an exhibitor (see class "steps" in the [database section](#database))| _in construction, no props yet_ | _in construction, no children yet_ |
|**IdentityItem**|display some informations about an exhibitor|thisExhibitor|ExhibitorName|
|**LastEmail**|display the object of the last email, so I remember the last exchanges with an exhibitor| _in construction, no props yet_ | _in construction, no children yet_ |
 
There will be other features concerning the emails, the interactive map, the committee and the editions. 
I'm thinking of reorganizing the exhibitor feature anyway, because the information display components could clearly be more optimized and less "bushy".

#### pages

The list page lists all the exhibitors whose contacts I have. By clicking on an item in the list, I get all its information, as well as an assigned mailbox in the exhibitor page. I'll have mail templates ready on the side, which I can personalize in the mail directly before sending it. I'll be able to edit by double-clicking on each piece of information.
I'll have a map page allocated to locations. So I'll have a condensed list of each exhibitor with information like their “favorite” booth next to the festival site map, and I'll be able to drag and drop each exhibitor. 
As I also have to exchange information with other committee members, I'll have a committee page allocated to emails with the committee, with a list of documents on the side (meeting agendas, minutes of past meetings, treasury documents...) with the possibility of organizing them according to their importance.
The archives page gives me access to all the information given by edition: list of registered exhibitors and their location, e-mails exchanged, minutes of meetings, etc. etc. The simplest solution would be to make a simple database export. The simplest solution would be to do a simple database export, but I could also arrange for this information to be displayed on the website, so I could browse through it. I haven't decided yet, as this function will come towards the end, but I think I'm heading for a simple information export.
I decided this late (maybe too late): The connexion page will be use as a welcome screen to go to a version of the site with festival exhibitor data (for the admin) or one with fake data (for visitors like you).

|Pages|Mockups|Visuals (for now)|
|-----|-------|-----------------|
|**ArchivesPage**|![mockup for the ArchivesPage](https://github.com/user-attachments/assets/3fa52c2a-c499-4117-8d9d-0403aa2aea53)|![visual of the ArchivesPage](https://github.com/user-attachments/assets/1b5614e1-a734-4f3e-aa29-2592f7edc7cc)|
|**CommitteePage**|![mockup for the CommitteePage](https://github.com/user-attachments/assets/3c338baf-d3e7-4d16-9c3f-e80e47010a3a)|![visual of the CommittePage](https://github.com/user-attachments/assets/304fb804-955c-421a-b57c-71fd2516933c)|
|**ConnexionPage**|||
|**ExhibitorPage**|![mockup for the ExhibitorPage](https://github.com/user-attachments/assets/f4ef9692-8fce-425d-8de4-658a39aa63c9)|![visual of the ExhibitorPage](https://github.com/user-attachments/assets/46e6c875-9700-4a23-a255-f886404d05c8)|
|**ListPage**|![mockup for the ListPage](https://github.com/user-attachments/assets/e9e5f65c-6d26-4586-8d4d-d926c06694c6)|![visual of the ListPage](https://github.com/user-attachments/assets/aa28b025-4d1b-4f9f-ba73-69b5bee1b047)|
|**MapPage**||![visual of the MapPage](https://github.com/user-attachments/assets/39ae06ce-fc78-4803-8fd4-2e43b68cc841)|
|**NotFoundPage**|||

#### services

These are all the fetches, one for each collection of the database.

#### shared

The components contained in this folder are transversal to the entire website:
|name of the component|description|props|
|---------------------|-----------|-----|
|**AccordionItem**|accordion with a title and a content, I tried my best to make it look nice and I am fond of the result|thisExhibitor, title, content|
|**Error**|error message and a retry button|message, onRetry|
|**Footer**|a simple footer that returns a paragraph| _no props_ |
|**FormItem**|an item that allows you to modify only one value by double-clicking on it|inputName, serverDataValue, inputType, tabIndex _in construction_ |
|**Header**|two components here: The NavBar and the ProgressBar. The progress bar allows me to see on all the pages where I'm at with the completion of the festival site allocations|_in construction, no props yet_|
|**IsLoading**|a loader or a spinner and a little message|message|
|**SelectEmplacementItem**|displays all the locations of "emplacement" in the database, in a <select> html element and sorted by area with the <optgroup> html element| _no props_ |
|**utils**|for now, just a js function to slugify strings in order to have a clean and readable url|string|



