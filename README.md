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
4. [Backend](#backend)
	1. [Database](#database)
	2. [Utilities](#utilities)
		1. [Technologies used](#technologies-used)
		2. [Softwares used](#softwares-used)
5. [Frontend](#frontend)
	1. [User's actions and React components](#user-s-actions-and-react-components)
	2. [Interface (visuals and mockups)](#interface_visuals_and_mockups)
	3. [Utilities](#utilities)
		1. [Technologies used](#technologies-used)
		2. [Softwares used](#softwares-used)




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


### Utilities

#### Technologies used

- body-parser (v1.20.3)
- concurrently (v9.1.0)
- cors (v2.8.5)
- express (v4.21.1)
- MongoDB (v6.11.0)
- mongoose (v8.8.3)
- nodejs (v10.8.1)
- nodemon (v3.1.7)

#### Softwares used

- MongoDBCompass
- ThunderClient (in the beginning)
- Postman (then I changed)
- Visual Studio Code




## Frontend


### Structure for now

#### assets

Fonts and images can be found here. In the images, there are only icons, but they are arranged according to their use in the site (navbar, luthier, restorers...).

#### features

Components are organized into features. 
For the moment, there is only the “Exhibitor” feature, which contains the following components:
 - **AddExhibitor**: adds a new exhibitor to the database
 - **ExhibitorInfos**: display all the informations (and emails) about this exhibitor and individuals related.
 	- props: thisExhibitor.
	- this component use "IdentityItem" and "AccordionItem".
 - **ExhibitorList**: lists all exhibitor and some of their informations (such as name, specialty, icon...) following 2 different formats: div (for the listPage) or li (for the mapPage). There is also props about filtering, sorting and ordering the exhibitors.
	- props : format, defineFilter, defineSort, defineOrder.
	- this component use "ExhibitorName" and "LastEmail" in the format div.
 - **ExhibitorName**: display some informations about an exhibitor (icon, name of the business and the name of the contact person).
	- props: thisExhibitor.
 - **ExhibitorSearchBar**: search field and sorting, filtering and ordering options.
	- in construction, no props yet.
 - **ExhibitorSteps**: monitors the progress of a contract with an exhibitor (see class "steps" in the [database section](#database))
	- in construction, no props yet.
 - **IdentityItem**: display some informations about an exhibitor.
	- props: thisExhibitor.
	- this component use "ExhibitorName". 
 - **LastEmail**: display the object of the last email, so I remember the last exchanges with an exhibitor.
	- in construction, no props yet.
 
There will be other features concerning the emails, the interactive map, the committee and the editions. 
I'm thinking of reorganizing the exhibitor feature anyway, because the information display components could clearly be more optimized and less "bushy".

#### pages

Note: The ConnexionPage will be use as a welcome screen to go to a version of the site with festival exhibitor data (for the admin) or one with fake data (for visitors like you).

|Pages|Mockups|Visuals (for now)|
|-----|-------|-----------------|
|**ArchivePage**|
|**CommitteePage**|
|**ConnexionPage**|
|**ExhibitorPage**|
|**ListPage**|
|**MapPage**|
|**NotFoundPage**|

#### services

These are all the fetches, one for each collection of the database.

#### shared

The components contained in this folder are transversal to the entire website.


### Visuals and mockups
(mockups)
J'ai d'abord réfléchi ce site web sur la fusion des outils Excel et boîte mail: La première page "exposants" recense tous les exposants dont j'ai les contacts. En cliquant sur un item de la liste, j'ai toutes ses informations, ainsi qu'une boîte mail attribuée. J'aurai des modèles de mail prêts sur le côté, que je pourrai personnaliser dans le mail directement avant de l'envoyer. Je pourrai modifier en double cliquant sur chaque information.
J'aurai une page "carte" allouée aux emplacements. J'aurai donc une liste condensée de chaque exposant avec des informations comme son stand "préféré" à côté de la carte du site du festival, et je pourrai drag and drop chaque exposant. 
Etant donné que j'ai aussi à échanger les autres membres du comité, j'aurai une page "comité" allouée aux mails avec le comité, avec une liste des documents sur le côté (ordre du jour des réunions, procès verbaux des anciennes réunion, documents de la trésorerie…) avec possibilité de les organiser selon leur importance.
La page "archive" me permet d'avoir accès à toutes les informations données par édition : liste des exposants enregistrés et leur emplacement, mails échangés, procès verbaux des réunions, etc. etc. La solution la plus simple serait de faire un simple export de base de données, je pourrais aussi faire en sorte de montrer ces informations sur le site web et je pourrais donc naviguer dessus. Je n'ai pas encore décidé car cette fonction viendra vers la fin, mais je pense que je me dirige vers un simple export d'informations.


### Utilities

#### Technologies used

- axios (v1.7.7)
- classnames (v2.5.1)
- react (v18.3.1)
- react-router-dom (v6.27.0)
- react-select (v6.27.0)
- swr (v2.2.5)

#### Softwares used

- Adobe Illustrator (for the "step" icons)
- Balsamiq
- Figma
- Visual Studio Code
- Firefox
- Google Chrome
- Microsoft Edge
