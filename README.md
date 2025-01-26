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
3. [Text to sub-heading](#text-of-the-subheading)
	1. [Text to sub-heading](#text-of-the-subheading)
	2. [Text to sub-heading](#text-of-the-subheading)
		1. [Text to sub-heading](#text-of-the-subheading)
		2. [Text to sub-heading](#text-of-the-subheading)
4. [Text to sub-heading](#text-of-the-subheading)
	1. [Text to sub-heading](#text-of-the-subheading)
	2. [Text to sub-heading](#text-of-the-subheading)
	3. [Text to sub-heading](#text-of-the-subheading)
	4. [Text to sub-heading](#text-of-the-subheading)
		1. [Text to sub-heading](#text-of-the-subheading)
		2. [Text to sub-heading](#text-of-the-subheading)
5. [Text to sub-heading](#text-of-the-subheading)
6. [To conclude](#to-conclude)
     - [What remains to be done and what needs to be improved](#what-remains-to-be-done-and-what-needs-to-be-improved)

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

### Data Base
(class diagramm)
(schéma relationnel DB)
(schéma entité-association)

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
- Postman (dans un second temps)
- ThunderClient (dans un premier temps)
- VS Code

## Frontend

### User's journey's
(DIAGRAMME DES FLUX :)
- Quand j'envoie un mail de rappel à un exposant;
- Quand Débo me transfère le contact d'un nouvel exposant;

### Interface
(mockups)
J'ai d'abord réfléchi ce site web sur la fusion des outils Excel et boîte mail: La première page "exposants" recense tous les exposants dont j'ai les contacts. En cliquant sur un item de la liste, j'ai toutes ses informations, ainsi qu'une boîte mail attribuée. J'aurai des modèles de mail prêts sur le côté, que je pourrai personnaliser dans le mail directement avant de l'envoyer. Je pourrai modifier en double cliquant sur chaque information.
J'aurai une page "carte" allouée aux emplacements. J'aurai donc une liste condensée de chaque exposant avec des informations comme son stand "préféré" à côté de la carte du site du festival, et je pourrai drag and drop chaque exposant. 
Etant donné que j'ai aussi à échanger les autres membres du comité, j'aurai une page "comité" allouée aux mails avec le comité, avec une liste des documents sur le côté (ordre du jour des réunions, procès verbaux des anciennes réunion, documents de la trésorerie…) avec possibilité de les organiser selon leur importance.
La page "archive" me permet d'avoir accès à toutes les informations données par édition : liste des exposants enregistrés et leur emplacement, mails échangés, procès verbaux des réunions, etc. etc. La solution la plus simple serait de faire un simple export de base de données, je pourrais aussi faire en sorte de montrer ces informations sur le site web et je pourrais donc naviguer dessus. Je n'ai pas encore décidé car cette fonction viendra vers la fin, mais je pense que je me dirige vers un simple export d'informations.

### Utilities
#### Technologies utilisées
- axios (v1.7.7)
- classnames (v2.5.1)
- react (v18.3.1)
- react-router-dom (v6.27.0)
- react-select (v6.27.0)
- swr (v2.2.5)
#### Logiciels utilisés
- Adobe Illustrator (pour les step icons)
- Balsamiq
- Figma
- Firefox
- Google Chrome
- Microsoft Edge
- VS Code

## Interactions between services

### Between backend and frontend
(State diagramm)

### Between frontend and email api
(DIAGRAMME DES SéQUENCES)

## To conclude
(DIAGRAMME BPMN)

### What remains to be done and what needs to be improved
