# Movie Buff or Bluff

Movie Buff or Bluff is a Movie based Trivia Quiz site aimed at anyone who enjoys the world of cinema and testing their knowledge. It consists of 10 questions with a 90 second timer and a Leaderboard so you can boast about your highscore.

Developed by Sean Finn.

![Am I Responsive Website Mockup](/docs/readme/techsini.PNG)

[Movie Bluff or Buff - Live Webpage](https://seanf316.github.io/P2-Movie-Buff-Or-Bluff/) (Right-click to open in a new tab)

## Table of Content

1. [Project Goals](#project-goals)
1. [Target Audience](#target-audience)
1. [User Experience (UX)](#user-experience-ux)
    - [User stories](#user-stories)
    - [Design](#design)
    - [Wireframes](#wireframes)
1. [Features](#features)
1. [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks and Tools Used](#frameworks-and-tools-used)
1. [Testing](#testing)
    - [W3 Validators](#w3-validators)
    - [Accessibility and Performance](#accessibility-and-performance)
    - [Further Testing](#further-testing)
    - [Testing User Stories from the User Experience (UX) Section](#testing-user-stories-from-the-user-experience-ux-section)
    - [Bugs and Fixes](#bugs-and-fixes)
1. [Deployment](#deployment)
1. [Credits](#credits)
1. [Acknowledgements](#acknowledgements)

## Project Goals

This is my second portfolio project for [Code Institute](https://codeinstitute.net/) and my goal with this project is to display my newly acquired Javascript skills. I decided to build a Movie based quiz site that will allow repeated playability. To do this I setup the quiz to call on an API - [opentdb.com](https://opentdb.com/), to retrieve the questions and answers etc. This was very challenging.

## Target Audience

The target audience for this site is anyone who enjoys the world of cinema and testing their knowledge via a quiz based game.

## User Experience (UX)

- ### User stories

    - #### First Time Visitor Goals

        -   As a First Time Visitor, I want to easily understand the main purpose of the site.
        -   As a First Time Visitor, I want to understand the rules of the quiz
        -   As a First Time Visitor, I want to be able to view the site on multiple devices.

    -   #### Returning Visitor Goals

        -   As a Returning Visitor, I want to see new questions.
        -   As a Returning Visitor, I want to learn more about any updates.
        -   As a Returning Visitor, I want to find the best way to get in contact with the site developer.

    -   #### Frequent User Goals

        -   As a Frequent User, I want to be able to view my best scores
        -   As a Frequent User, I want to check to see if there are any new sections added to the site.
        -   As a Frequent User, I want to sign up so that I am emailed any major updates and/or changes to the website.

-   ### Design

    -   #### Imagery

        -   I have included a custom logo created with Canva, the colors of which match the color scheme for the website.

    -   #### Colour Scheme

        -   I wanted the color scheme to be simple but ascetically pleasing. I chose 4 colors that where implemented across all the site pages and they contrast well together.
        ![Coolors Image](/docs/readme/coolors.png)

    -   #### Typography

        -   The Poppins font is the main font used throughout the website with Sans Serif as the fallback. I used variations of font weight for the headers and and question text etc.

*   ### Wireframes

This is the prototype of the project that may change during its development.
<details><summary>Desktop</summary>

![Desktop Wireframe](/assets/wireframes/desktop.png)

</details>
<details><summary>Tablet</summary>

![Tablet Wireframe](/assets/wireframes/tablet.png)

</details>
<details><summary>Mobile</summary>

![Mobile Wireframe](/assets/wireframes/mobile.png)

</details>

[Back to top &uarr;](#Vanguard)

## Features

### Highscores

The Highscores page can be accessed via the Highscores button on the homepage of the website, when clicked it will display the users Highscores and give the option to return Home, Play Quiz or Clear Highscores. I was in 2 minds to include the Clear Highscores button but from who I spoke to (class mates/family/mentor) majority feedback was that they were happy to have it there. 
![Desktop Highscores](/docs/readme/desktop-highscores.PNG)

### Instructions Modal

The Instructions Modal can be accessed via the Instructions button on the homepage of the website, when clicked it will display the instructions for the quiz and advise the user that local storage will be used to store Highscores. The user can close the modal by clicking on the "X" icon displayed at the top of modal or can click anywhere out side it the modal space.
![Desktop Instructions Modal](/docs/readme/desktop-instructions.PNG)

### Sign Up/Feedback

The Sign Up/Feedback section is available on the homepage, it allows the user to signup for the site newsletter and offer their feedback on the site/quiz.
![Desktop Signup](/docs/readme/desktop-signup.PNG)

### Footer

The footer is placed at the bottom of the page. It contains the social media links displayed with icons provided by Font Awesome. There is also a small portion of text for the Copyright/Disclaimer. This is where the user can click on a social media link and reach out to the developer for news and updates.
![Desktop Footer](/docs/readme/desktop-footer.PNG)

### Quiz

The Quiz content can be accessed from the "Let's get started ->" button on the Homepage. It features a timer, sound effects which can be toggled on/off (sound toggled off as standard), progress bar/text, question, answers and a check answer button. The timer is set to 90 seconds, if the user does not answer the 10 questions in the allocated time the quiz will automatically finish. There is a sound effect for correct answer, incorrect answer and click for when selected an answer. The progress bar/text are both dynamic and update with each question asked. The questions and answers are fetched from the Opentdb API to allow for more re-playability. As a design choice I wanted a check answer button instead of just displaying correct answer instantly, the reason for this is I found that a user may click an answer they didn't want sometimes by mistake and at least with the check answer button it should remedy that situation. When the user does click on an answer and then selects the "CHECK ANSWER" button the button hides and the result appears in its place. The correct answer will be signified with green background and text confirming Correct Answer. When the answer selected is incorrect the result will be signified with a red background and text confirming Incorrect Answer and text signifying what the correct answer was. If the user doesn't click on an answer and then selects the "CHECK ANSWER" button the result area will display briefly the following text "Please select an answer!".
![Desktop Quiz](/docs/readme/desktop-quiz.PNG)
![Desktop Quiz Hover](/docs/readme/desktop-quiz-hover.PNG)
![Desktop Quiz Correct](/docs/readme/desktop-quiz-correct.PNG)
![Desktop Quiz Incorrect](/docs/readme/desktop-quiz-incorrect.PNG)
![Desktop Quiz Select Answer](/docs/readme/desktop-quiz-check.PNG)

### End of Quiz

When the user has finished the quiz the end results will display. If the user has not answered any questions correctly the username entry will be hidden and they will be instructed to Play Again to get their name on the Leaderboard. If the user does answer some questions correctly their results will be show along with a message and movie quote - these will change based off users results. They will now be able to enter a username - there is an indication to tell the user that their username needs to be between 4 and 10 characters with no spaces (spaces have been disabled in the code). If the user enters less than 4 characters or more than 10 and try's to save the Save button will be disabled, if the user enters a username between 4 & 10 characters the indication text will hide and user and save their username. When the user saves their username they will be redirected to the Highscores page.
![Desktop Quiz No Score](/docs/readme/desktop-end-noscore.PNG)
![Desktop Quiz Score One](/docs/readme/desktop-end-score.PNG)
![Desktop Quiz Username](/docs/readme/desktop-end-username.PNG)
![Desktop Quiz Username Alert](/docs/readme/desktop-end-username-alert.PNG)
![Desktop Quiz Score Four](/docs/readme/desktop-end-score4.PNG)
![Desktop Quiz Score Six](/docs/readme/desktop-end-score6.PNG)
![Desktop Quiz Score Eight](/docs/readme/desktop-end-score8.PNG)
![Desktop Quiz Score Ten](/docs/readme/desktop-end-score10.PNG)

### Thank You

When the user fills out form sections and clicks "SIGN UP" button a Thank You message will be displayed along with text to indicate they have been registered and a movie quote. There is a "Return Home" button to redirect the user back to the main site.
![Desktop Thank You](/docs/readme/desktop-thankyou.PNG)

### 404

If user enters incorrect url a 404 page will appear, it indicates something went wrong and includes a movie quote and a "Home" button that directs the user to the site.
![Desktop 404](/docs/readme/desktop-404.PNG)

[Back to top &uarr;](#MovieBufforBluff)

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks and Tools Used

1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Poppins' font into the .css files used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used for the icons throughout the project and the social media icons in the footer for aesthetic and UX purposes.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the project's code after being pushed from Git.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/seanf316/P1-Vanguard/tree/main/assets/wireframes) during the design process.
1. [XConvert](www.xconvert.com)
    - XConvert was used to convert images to webp or png where required.
1. [Stackoverflow](https://stackoverflow.com/)
    - Stackoverflow was used on many occasions to figure out some troublesome code.
1. [W3schools](https://www.w3schools.com/)
    - W3schools provided the tutorial to create the ["Modal Box"](https://www.w3schools.com/howto/howto_css_modals.asp) that was used for the site instructions.
1. [W3C HTML Validator](https://validator.w3.org/)
    - I used W3C HTML Validator for the validation of the site's HTML code.
1. [W3C JigSaw Validator](https://jigsaw.w3.org/css-validator/)
   - I used W3C JigSaw Validator for the validation of the site CSS code.
1. [JSHint](https://jshint.com/)
   - I used JSHint for the validation of the site js code.
1. [Grammarly](https://www.grammarly.com/)
    - Grammarly was used to check typography.
1. [Techsini.com](https://techsini.com/multi-mockup/)
    - Techsini.com was used to produce the website mockup.
1. [favicon.io](https://favicon.io/)
    - favicon.io was used to create my site's favicon.
1. [Canva](https://www.canva.com/)
    - Canva was used to create the site logo.

[Back to top &uarr;](#MovieBufforBluff)

## Testing

### W3 Validators

The W3C Markup Validator and W3C CSS Validator Services were used to validate the code used in the project to ensure there were no syntax errors.
<details><summary>W3C Markup Validator</summary>

![W3C Markup Validator Homepage Results](/docs/readme/validation/homepage-results.PNG)
![W3C Markup Validator Quiz Results](/docs/readme/validation/quiz-results.PNG)
![W3C Markup Validator Highscores Results](/docs/readme/validation/highscores-results.PNG)
![W3C Markup Validator Thank You Results](/docs/readme/validation/thankyou-results.PNG)
![W3C Markup Validator 404 Results](/docs/readme/validation/404-results.PNG)

</details>
<details><summary>W3C CSS Validator</summary>

![W3C CSS Validator Results](/docs/readme/validation/css-results.PNG)

</details>

<details><summary>JSHint</summary>

Any warnings that could be fixed have been resolved, the only remaining warnings are all support based warnings regarding let's/const's etc.
![JSHint Quiz Results](/docs/readme/validation/jshint-quiz.PNG)
![JSHint Homepage Results](/docs/readme/validation/jshint-homepage.PNG)
![JSHint Highscores Results](/docs/readme/validation/jshint-highscores.PNG)

</details>

### Accessibility and Performance

To check the accessibility of my site, I used the [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/) and received no errors in the result:
<details><summary>WAVE Web Accessibility Evaluation Tool</summary>

![WAVE Web Accessibility Evaluation Tool Results](/assets/readme/wave-webaim-test.PNG)

</details>

For performance and more accessibility testing, I used Google Lighthouse throughout:

#### Lighthouse Results

<details><summary>Desktop</summary>

Homepage
![Lighthouse Desktop Score](/docs/readme/validation/desktop-homepage-results.PNG)

Highscores
![Lighthouse Desktop Score](/docs/readme/validation/desktop-highscores-results.PNG)

Quiz
![Lighthouse Desktop Score](/docs/readme/validation/desktop-quiz-results.PNG)

Thank You
![Lighthouse Desktop Score](/docs/readme/validation/desktop-thankyou-results.PNG)

404
![Lighthouse Desktop Score](/docs/readme/validation/desktop-404-results.PNG)

</details>

<details><summary>Mobile</summary>

Homepage
![Lighthouse Desktop Score](/docs/readme/validation/mobile-homepage-results.PNG)

Highscores
![Lighthouse Desktop Score](/docs/readme/validation/mobile-highscores-results.PNG)

Quiz
![Lighthouse Desktop Score](/docs/readme/validation/mobile-quiz-results.PNG)

Thank You
![Lighthouse Desktop Score](/docs/readme/validation/mobile-thankyou-results.PNG)

404
![Lighthouse Desktop Score](/docs/readme/validation/mobile-404-results.PNG)

</details>

#### Lighthouse errors

At Mobile, the Performance score is between 95-100 - This is due to Cumulative Layout Shift. As the site is setup to move dynamically depending on what should be displayed this is the highest score achievable at the moment, in future I will look to see what else can be done.
<details><summary>Desktop/Mobile Chrome Devtools Errors</summary>

### Further Testing

- The website was tested on Google Chrome, Internet Explorer, Microsoft Edge, Mozilla Firefox, and Safari browsers.
- The website was viewed on a variety of devices such as desktops, Laptops, Apples Products (Macbook, IPad Pro, iPhone 13 Pro, iPhone 8), and a range of Android devices (Samsung Note 10+, Samsung S20 Plus, Samsung Tab S7+, Oppo mobile).
- A large amount of testing was done to ensure that everything functions as expected.
- I asked friends and family members to review the site and document any bugs and/or user experience issues. Some co-workers also helped out with testing.

### Testing User Stories from the User Experience (UX) Section

- #### First Time Visitor Goals

    -   As a First Time Visitor, I want to easily understand the main purpose of the site.
        - Upon entering the site, users are automatically greeted with a clean homepage with site logo. Underneath the logo is some detailing information about 
        - The user will be able to understand what the site is about with the text that appears on the Hero Image.
        - The user has two options: click the call to action buttons or scroll down, both of which will lead to the same place, to learn more about the website.
    -   As a First Time Visitor, I want to be able to easily navigate through the site to find content specific to my needs.
        - The site has been designed to be fluid and easy to navigate. At the top of the page, there is a clear navigation bar, each link describes the page they will end up at clearly.
        - The navbar disappears when the user scrolls down but re-appears when the user scrolls up to allow ease of access to the navbar.
        - The logo in the footer also acts as a link to the site, so by clicking the user will be brought back to the homepage.
    -   As a First Time Visitor, I want to be able to view the site on multiple devices.
        - I have applied media queries to allow the site to function responsively across multiple devices.

- #### Returning Visitor Goals

    -   As a Returning Visitor, I want to find out more information about the best third-party sites and apps for the Destiny gaming franchise.
        - By selecting the Best Sites or Best Apps links from the navbar the user will be able to locate the information that they require.
        - There is a call to action for each item in the Best Sites and Best Apps sections.
    -   As a Returning Visitor, I want to learn more about the Destiny story and Lore.
        - By selecting the About Vanguard section from the navbar, the user will be able to find out about the site itself and the Destiny story with 4 videos provided.
    -   As a Returning Visitor, I want to find the best way to get in contact with the site developer.
        - If the user selects the Join Us section in the navbar they will be able to join the website and provide feedback, also social media links are provided by way of icons in the footer.

-   #### Frequent User Goals

    -   As a Frequent User, I want to check to see if there are any newly added sites or apps.
        - The user would already be comfortable with the website layout and would be able to navigate to the Best Sites and Best Apps sections to see if any new sites/apps have been added.
    -   As a Frequent User, I want to check to see if there are any new sections added to the site.
        - The user would already be familiar with the website layout and would be able to navigate the site to see if new sections have been added.
    -   As a Frequent User, I want to sign up so that I am emailed any major updates and/or changes to the website.
        - In the Join Us section, which can be accessed easily from the navbar or by scrolling, there is a sign-up form. Alternatively, users could check out our social media accounts for updated announcements.

### Bugs and Fixes

Lighthouse Best Practice Score dropped to 83
<details><summary>Bug</summary>
When placing YouTube videos into HTML the Lighthouse best practice score went from 100 to 83 
</details>
<details><summary>Fix</summary>
Upon researching this issue, I was able to get the score into the 90s by removing the enhanced privacy mode in the iframes
</details>
Best Apps Layout not functioning as expected
<details><summary>Bug</summary>
When reducing the screen size, the 2nd and 4th card content were not flowing the same as the 1st and 3rd due to my layout, so the images were appearing under the text due to flex-direction being defaulted to row.
</details>
<details><summary>Fix</summary>
To resolve the issue, I applied a flex-direction: row-reverse class to the 2nd and 4th cards only.
</details>
Best Sites card Tablet Layout
<details><summary>Bug</summary>
The Best Sites cards were not spacing correctly in tablet view and were grouped to the left of the screen.
</details>
<details><summary>Fix</summary>
I applied justify-content: space-around; to the parent, flex container.
</details>

[Back to top &uarr;](#Vanguard)

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the repository [P1-Vanguard](https://github.com/seanf316/P1-Vanguard)
2. At the top of the Repository (not the top of the page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "Pages" Section on the left side of the page. Click "Pages".
4. In the "Pages" section under "Source" there is a "Branch" section, click the dropdown called "None" select "main" and click save.
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://seanf316.github.io/P1-Vanguard/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the repository [P1-Vanguard](https://github.com/seanf316/P1-Vanguard)
2. At the top of the Repository (not the top of the page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

[Back to top &uarr;](#Vanguard)

## Credits

1. [Code Institute Template](https://github.com/Code-Institute-Org/gitpod-full-template)
    - This repository was created using the template provided by Code Institute. Also, without the knowledge gained through the course work, I could not be able to create this site so thank you Code Institute.
1. [Wallpaper Abyss](https://wall.alphacoders.com/)
    - Wallpaper Abyss had a wide range of fantastic Destiny-related images and it was here that I got my hero image.
1. [DEV](https://dev.to/)
    - DEV provided the tutorial to create the mobile [hamburger menu](https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci).
1. [Wallpaper Abyss](https://wall.alphacoders.com/)
    - Wallpaper Abyss had a wide range of fantastic Destiny-related images and it was here that I got my hero image.
1. [Bungie](https://www.bungie.net/), [Braytech](https://bray.tech/), [Destiny Item Manager](https://app.destinyitemmanager.com/login), [Destiny Recipes](https://destinyrecipes.com/), [Destiny Reddit](https://www.reddit.com/r/DestinyTheGame/), [Destiny Companion](https://play.google.com/store/apps/details?id=com.bungieinc.bungiemobile&gl=IE), [Ishtar Commander](https://play.google.com/store/apps/details?id=com.unintuitive.IshtarCommander&gl=IE), [Destiny Trials Report](https://play.google.com/store/apps/details?id=com.plafhop.trialsreport&hl=en_IE&gl=US), [Where is Xur?](https://play.google.com/store/apps/details?id=com.crocusgames.whereisxur&gl=IE), [My name is Byf ](https://www.youtube.com/c/MynameisByf).
    - Big credit goes out to the developers of all the sites & apps I have included on my site, each site or app provided the screenshots and descriptive text used on the site, and having them all in one location was my motivation for this site. Credit to My name is Byf who continues to create fantastic Destiny Lore videos on Youtube.
1. [W3schools](https://www.w3schools.com/)
    - W3schools provided the tutorial to create the ["Hide Menu on Scroll"](https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp) that has been implemented on the site. I would often use W3schools exercises as a break sometimes and gathered a lot of knowledge there as well.
1. [DesignCourse](https://www.youtube.com/c/DesignCourse), [Kevin Powell](https://www.youtube.com/kepowob), [Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified).
    - All of the above for creating fantastic videos on HTML & CSS, a lot of knowledge was gained from hours of viewing.

## Acknowledgements

- To my amazing wife Denise who has supported me every day and kept me motivated while I have been spending long hours studying and building the site she had to look after and entertain our 5-year-old son so I think I had an easier time of it.
- My son Alex for always making me laugh when I'm tired from a long night of study/coding.
- To my family and friends - for being a great support and providing a lot of the user testing for me.
- To my mentor Narender for all his guidance, support, tips, and feedback.
- The Code Institute community on slack and my classmates its been a pleasure so far.

[Back to top &uarr;](#Vanguard)