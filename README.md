# Flashcard-O-Matic Application
The 'Flashcard' Application allows the user to create, view, and edit flashcards and decks, respectively. The decks are a collection of flashcards and the user can create as many decks as they want. The creation of the decks allows the user to easily go to a certain topic they want to study. Note that the data store for this APP is provided by the [Json-Server](  https://www.javatpoint.com/json-server#:~:text=JSON%20Server%20is%20a%20Node,Let'), which runs concurrently with the 'Flashcard' client.

# Technology & Tools
Built with:
* React.js
* JavaScript
* HTML
* CSS
* Bootstrap
* [Json-Server](  https://www.javatpoint.com/json-server#:~:text=JSON%20Server%20is%20a%20Node,Let')

# Screenshots

## Home Page:
The 'Home Page' shows the overview of all the decks. There are also several control buttons. 

The 'Create Deck' button, allows the user to create a new deck. 

Inside each deck, there are 'View', 'Study', and 'Delete' buttons. 

The 'View' button brings the user into a new page where they can see the collections of flashcards that are inside of that deck. The 'Study' button allows the user to go through each card in the deck. The 'Delete' button deletes the deck.

![homepage](/src/images/opening-page.jpg)


## Create Deck Page:
The 'Create Deck Page' allows the user to fill in the name of the new deck and a description of the deck. They can cancel the creation of the deck or submit it.

![create-deck-page](/src/images/create-deck-page.jpg)


## View Deck Page:

The 'View Deck Page' displays the name and description of the deck as well as the collection of cards belonging to that specific deck. 

The "Edit" button brings the user to the Edit page for the Deck or Card, respectively, and allows the user to make changes to either the deck or card(s).

The "Study" button allows the user to go through the front(question or term) and back(answer or definition) of all the cards in a deck.

![view-deck-page](/src/images/view-deck-page.jpg)

## Study Deck Page: 
When the user clicks the "Study" button in the Home page or in the View Deck page, they will be led to the 'Study Deck Page'

The following 3 screenshots show the beginning, middle, and end of what the user sees as they go through the cards in a deck.

### 1) the user sees the first card and a button labeled "Flip", which allows the user to see the backside or frontside of a card, depending on which side is showing at the moment.
![study-deck-page](/src/images/first-appearance-study-page.jpg)

### 2) as the user goes through each card, but has not yet reached the end of the deck of cards, they will see a "Flip" button and a "Next" button. The "Flip" button allows the user to see the front and backside of a card as they please. The "Next" button allows the user to move on to the next card in the deck.
![studydeckpage2](src/images/after-clicking-flip-study-page.jpg)

### 3) When the user reaches the end of the cards in a deck, a pop-up alert will appear to ask them if they want to go over the cards again from the beginning or get out of studying the cards.
![studydeck3](src/images/reach-end-of-study-deck.jpg)


## Edit Deck Page:
The 'Edit Deck Page' allows the user to make changes to the Deck Name and Description. They can cancel or submit the changes made.

![editdeckpage](src/images/edit-deck-page.jpg)

## Edit Card Page:
The 'Edit Card Page' allows the user to make changes to the Front and Back of a card. They can cancel or submit the changes made.

![editcardpage](src/images/edit-card-page.jpg)

## Delete Deck Pop-Up Alert Box: 
The user will see this Alert box when they click the "Delete" button on the Home Page or on the Deck page for each individual deck.

![deletedeckpage](src/images/delete-deck-popup-home-page.jpg)

## Delete Card Pop-Up Alert Box:
The user will see this Alert Box when they click on the "Delete" button for each individual card of each Deck. They can only delete cards when in the Deck page of each individual deck.

![deletecardpage](src/images/delete-card-popup.jpg)

## Future Goals/Enhancements
* Use a real database to support persistent data storage.
# Project-Flashcard-o-matic
