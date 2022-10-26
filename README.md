# Movie Buff or Bluff

Movie Buff or Bluff is a Movie based Trivia Quiz site aimed at anyone who enjoys the world of cinema and testing their knowledge. It consists of 10 multiple choice questions with a 90-second timer and a Leaderboard so you can boast about your high score.

Developed by Sean Finn.

![Am I Responsive Website Mockup](/docs/readme/techsini.PNG)

[Movie Bluff or Buff - Live Webpage](https://seanf316.github.io/P2-Movie-Buff-Or-Bluff/) (Right-click to open in a new tab)

## Contents

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
    - [Validators](Validators)
    - [Accessibility and Performance](#accessibility-and-performance)
    - [Further Testing](#further-testing)
    - [Testing User Stories from the User Experience (UX) Section](#testing-user-stories-from-the-user-experience-ux-section)
    - [Bugs and Fixes](#bugs-and-fixes)
1. [Deployment](#deployment)
1. [Credits](#credits)
1. [Acknowledgements](#acknowledgements)

## Project Goals

This is my second portfolio project for [Code Institute](https://codeinstitute.net/) and my goal with this project is to display my newly acquired Javascript skills. I decided to build a Movie based quiz site that will allow repeated playability. To do this I set up the quiz to call on an API - [opentdb.com](https://opentdb.com/), to retrieve the questions and answers, etc. I wanted the site to have a simple but pleasing layout and I wanted to have visuals to support the correct/incorrect answers. Most of all I wanted it to be fun.

## Target Audience

The target audience for this site is anyone who enjoys the world of cinema and testing their knowledge via a quiz-based game.

## User Experience (UX)

- ### User stories

    - #### First Time Visitor Goals

        -   As a First Time Visitor, I want to easily understand the main purpose of the site.
        -   As a First Time Visitor, I want to understand the rules of the quiz.
        -   As a First Time Visitor, I want to be able to view the site on multiple devices.

    -   #### Returning Visitor Goals

        -   As a Returning Visitor, I want to see new questions.
        -   As a Returning Visitor, I want to learn more about any updates.
        -   As a Returning Visitor, I want to find the best way to get in contact with the site developer.

    -   #### Frequent User Goals

        -   As a Frequent User, I want to be able to view my best scores.
        -   As a Frequent User, I want to check to see if there are any new sections added to the site.
        -   As a Frequent User, I want to sign up so that I am emailed any major updates and/or changes to the website.

-   ### Design

    -   #### Imagery

        -   I have included a custom logo created with Canva, the colors of which match the color scheme for the website.

    -   #### Colour Scheme

        -   I wanted the color scheme to be simple but aesthetically pleasing. I chose 4 colors that were implemented across all the site pages and they contrast well together.
        ![Coolors Image](/docs/readme/coolors.png)

    -   #### Typography

        -   The Poppins font is the main font used throughout the website with Sans Serif as the fallback. I used variations of font weight for the headers and question text etc.

*   ### Wireframes

This is the prototype of the project that may change during its development.
<details><summary>Desktop</summary>

![Tablet Desktop Part 1](/docs/readme/wireframes/desktopwireframe-part1.PNG)
![Tablet Desktop Part 2](/docs/readme/wireframes/desktopwireframe-part2.PNG)
![Tablet Desktop Part 3](/docs/readme/wireframes/desktopwireframe-part3.PNG)
![Tablet Desktop Part 4](/docs/readme/wireframes/desktopwireframe-part4.PNG)
![Tablet Desktop Part 5](/docs/readme/wireframes/desktopwireframe-part5.PNG)
![Tablet Desktop Part 6](/docs/readme/wireframes/desktopwireframe-part6.PNG)
![Tablet Desktop Part 7](/docs/readme/wireframes/desktopwireframe-part7.PNG)
![Tablet Desktop Part 8](/docs/readme/wireframes/desktopwireframe-part8.PNG)
![Tablet Desktop Part 9](/docs/readme/wireframes/desktopwireframe-part9.PNG)
![Tablet Desktop Part 10](/docs/readme/wireframes/desktopwireframe-part10.PNG)

</details>
<details><summary>Tablet</summary>

![Tablet Wireframe Part 1](/docs/readme/wireframes/tabletwireframe-part1.PNG)
![Tablet Wireframe Part 2](/docs/readme/wireframes/tabletwireframe-part2.PNG)
![Tablet Wireframe Part 3](/docs/readme/wireframes/tabletwireframe-part3.PNG)
![Tablet Wireframe Part 4](/docs/readme/wireframes/tabletwireframe-part4.PNG)

</details>
<details><summary>Mobile</summary>

![Mobile Wireframe Part 1](/docs/readme/wireframes/mobilewireframe-part1.PNG)
![Mobile Wireframe Part 2](/docs/readme/wireframes/mobilewireframe-part2.PNG)

</details>

[Back to top &uarr;](#contents)

## Features

### Highscores

The Highscores page can be accessed via the Highscores button on the homepage of the website, when clicked it will display the users Highscores and give the option to return Home, Play Quiz or Clear Highscores. I was in 2 minds whether to include the Clear Highscores button but from speaking to (class mates/family/mentor) majority feedback was that they were happy to have it there. 
![Desktop Highscores](/docs/readme/features/desktop-highscores.PNG)

### Instructions Modal

The Instructions Modal can be accessed via the Instructions button on the homepage of the website, when clicked it will display the instructions for the quiz and advise the user that local storage will be used to store Highscores. The user can close the modal by clicking on the "X" icon displayed at the top of the modal or can click anywhere outside the modal space.
![Desktop Instructions Modal](/docs/readme/features/desktop-instructions.PNG)

### Sign Up/Feedback

The Sign Up/Feedback section is available on the homepage, it allows the user to signup for the site newsletter and offer their feedback on the site/quiz.
![Desktop Signup](/docs/readme/features/desktop-signup.PNG)

### Footer

The footer is placed at the bottom of the page. It contains the social media links displayed with icons provided by Font Awesome. There is also a small portion of text for the Copyright/Disclaimer. This is where the user can click on a social media link and reach out to the developer for news and updates.
![Desktop Footer](/docs/readme/features/desktop-footer.PNG)

### Quiz

The Quiz content can be accessed from the "Let's get started ->" button on the Homepage. There is a custom loader in place that will hide when the quiz is ready. The quiz features a timer, sound effects which can be toggled on/off (sound toggled off as standard), a progress bar/text, questions, answers, and a check answer button. The timer is set to 90 seconds, if the user does not answer the 10 questions in the allocated time the quiz will automatically finish. There is a sound effect for the correct answer, incorrect answer, and click when selecting an answer. The progress bar/text are both dynamic and update with each question asked. The questions and answers are fetched from the Opentdb API to allow for more replayability. As a design choice, I wanted a check answer button instead of just displaying the correct answer instantly, the reason for this is I found that a user may click an answer they didn't want sometimes by mistake, and at least with the check answer button it should remedy that situation. When the user does click on an answer and then selects the "CHECK ANSWER" button the button hides and the result appears in its place. The correct answer will be signified with green background and text confirming Correct Answer. When the answer selected is incorrect the result will be signified with a red background and text confirming Incorrect Answer and text signifying what the correct answer was. If the user doesn't click on an answer and then selects the "CHECK ANSWER" button the result area will display briefly the following text "Please select an answer!".
![Desktop Loader](/docs/readme/features/desktop-loader.PNG)
![Desktop Quiz](/docs/readme/features/desktop-quiz.PNG)
![Desktop Quiz Hover](/docs/readme/features/desktop-quiz-hover.PNG)
![Desktop Quiz Correct](/docs/readme/features/desktop-quiz-correct.PNG)
![Desktop Quiz Incorrect](/docs/readme/features/desktop-quiz-incorrect.PNG)
![Desktop Quiz Select Answer](/docs/readme/features/desktop-quiz-check.PNG)

### End of Quiz

When the user has finished the quiz the results will display. If the user has not answered any questions correctly the username entry will be hidden and they will be instructed to Play Again to get their name on the Leaderboard. If the user does answer some questions correctly their results will be shown along with a message and movie quote - these will change based on users' results. They will now be able to enter a username - there is an indication to tell the user that their username needs to be between 4 and 10 characters with no spaces (spaces have been disabled in the code). If the user enters less than 4 characters or more than 10 and try's to save the Save button will be disabled, if the user enters a username between 4 & 10 characters the indication text will hide, and user can save their username. When the user saves their username they will be redirected to the Highscores page.
![Desktop Quiz No Score](/docs/readme/features/desktop-end-noscore.PNG)
![Desktop Quiz Score One](/docs/readme/features/desktop-end-score.PNG)
![Desktop Quiz Username](/docs/readme/features/desktop-end-username.PNG)
![Desktop Quiz Username Alert](/docs/readme/features/desktop-end-username-alert.PNG)
![Desktop Quiz Score Four](/docs/readme/features/desktop-end-score4.PNG)
![Desktop Quiz Score Six](/docs/readme/features/desktop-end-score6.PNG)
![Desktop Quiz Score Eight](/docs/readme/features/desktop-end-score8.PNG)
![Desktop Quiz Score Ten](/docs/readme/features/desktop-end-score10.PNG)

### Thank You

When the user fills out the form sections and clicks the "SIGN UP" button a Thank You message will be displayed along with text to indicate they have been registered and a movie quote. There is a "Return Home" button to redirect the user back to the main site.
![Desktop Thank You](/docs/readme/features/desktop-thankyou.PNG)

### 404

If the user enters an incorrect URL a 404 page will appear, it indicates something went wrong and includes a movie quote and a "Home" button that directs the user to the site.
![Desktop 404](/docs/readme/features/desktop-404.PNG)

### Mobile

The site was created Mobile first and scaled up to larger devices with media queries.
![Mobile View](/docs/readme/features/mobile-part1.PNG)
![Mobile View](/docs/readme/features/mobile-part2.PNG)

[Back to top &uarr;](#contents)

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

[Back to top &uarr;](#contents)

## Testing

### Validators

The W3C Markup Validator, W3C CSS Validator & JSHint Services were used to validate the code used in the project to ensure there were no syntax errors.
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

![JSHint Results](/docs/readme/validation/jshint-results.PNG)

</details>

### Accessibility and Performance

To check the accessibility of my site, I used the [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/) and received no errors in the result:
<details><summary>WAVE Web Accessibility Evaluation Tool</summary>

![WAVE Web Accessibility Evaluation Tool Results](/docs/readme/validation/wave-results.PNG)

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

![Lighthouse Mobile Score](/docs/readme/validation/mobile-homepage-results.PNG)

Highscores

![Lighthouse Mobile Score](/docs/readme/validation/mobile-highscores-results.PNG)

Quiz

![Lighthouse Mobile Score](/docs/readme/validation/mobile-quiz-results.PNG)

Thank You

![Lighthouse Mobile Score](/docs/readme/validation/mobile-thankyou-results.PNG)

404

![Lighthouse Mobile Score](/docs/readme/validation/mobile-404-results.PNG)

</details>

#### Lighthouse errors

At Mobile, the Performance score is between 95-100 - This is due to Cumulative Layout Shift. As the site is setup to move dynamically depending on what should be displayed this is the highest score achievable at the moment, in future I will look to see what else can be done.

### Further Testing

- The website was tested on Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari browsers.
- The website was viewed on a variety of devices such as desktops, Laptops, Apples Products (Macbook, IPad Pro, iPhone 13 Pro, iPhone 8), and a range of Android devices (Samsung Note 10+, Samsung S20 Plus, Samsung Tab S7+, Oppo mobile).
- A large amount of testing was done to ensure that everything functions as expected.
- I asked friends and family members to review the site and document any bugs and/or user experience issues. Some co-workers also helped out with testing.
- I found a site called browserstack.com that simulated some of the most recent mobile phones and I just tested the quiz output on a variety of devices - again this is a simulation in the lines of the Dev Tools offered by chrome.

![Browserstack Image](/docs/readme/validation/mobile-simulator.PNG)

### Testing User Stories from the User Experience (UX) Section

- #### First Time Visitor Goals

    -   As a First Time Visitor, I want to easily understand the main purpose of the site.
        - Upon entering the site, users are automatically greeted with a clean homepage with site logo.
        - The user will be able to understand what the site is about with the text that appears under the logo.
    -   As a First Time Visitor, I want to understand the rules of the quiz.
        - The user will be greeted with some descriptive text of the quiz but there is also an Instructions button that the user can access that goes into further detail on the quiz.
    -   As a First Time Visitor, I want to be able to view the site on multiple devices.
        - I have applied media queries to allow the site to function responsively across multiple devices.

- #### Returning Visitor Goals

    -   As a Returning Visitor, I want to see new questions.
        - The quiz has been setup to fetch questions from the Opentdb API so the user should see new questions when playing again.
    -   As a Returning Visitor, I want to learn more about any updates.
        - There is a sign up section included on the site, by signing up the user will be registered for the site newsletter which will include news on future updates to the site and any new content released.
    -   As a Returning Visitor, I want to find the best way to get in contact with the site developer.
        - The user can sign up and offer their feedback on the site, alternatively they can contact the developer via the social media links provided in the footer. 

-   #### Frequent User Goals

    -   As a Frequent User, I want to be able to view my best scores
        - The site contains a highscores page containing a Leaderboard. The quiz is setup to store the users Quiz scores via local storage of the users device.
    -   As a Frequent User, I want to check to see if there are any new sections added to the site.
        - The user would already be familiar with the website layout and would be able to navigate the site to see if new sections have been added.
    -   As a Frequent User, I want to sign up so that I am emailed any major updates and/or changes to the website.
        - If user signs up they will receive a newsletter containing updates.

### Bugs and Fixes

<details><summary>Bug - User receiving Incorrect result after selecting Correct Answer.</summary>

When questions were fetched from the API special characters were causing an issue when the user would select the correct answer they would get the incorrect result.
![Question Bug](/docs/readme/bugs/question-bug.PNG)
![Question Bug Reason](/docs/readme/bugs/question-bug-reason.PNG)

Fix - Upon researching this issue, I was able to resolve this by taking a function from a GeekProbin video to decode the Html of the correct answer and just display the plain text.
</details>

<details><summary>Bug - At end page browser/mobile back button not reloading quiz</summary>

When the user was on the end of quiz results page they are indicated to enter a username if they score more then 0 or if 0 they are indicated to play again. There is a play again button that would direct them back to the quiz page and all worked as expected but if the user was to click the browser/mobile back button instead the quiz would start again but would not be reloaded to its original state. This caused the amount of questions to go over what was expected and the progress bar width grew outside its container. The problem was not evident in VS Code and could not be replicated there so several commits where done in the testing period to try and resolve.
![End Page Bug](/docs/readme/bugs/endpage-bug.png)

Fix - After numerous attempts and alot of commits testing various code to try and override/change the back button behavior I decided to remove the endpage.html and implement all the code into the quiz.html. I set the end page section to hidden and revealed it with javascript code at the time required. Now when a user presses the browser/mobile back button they are brought back to the homepage instead of the quiz.
</details>

<details><summary>Bug - Mobile Lighthouse Performance</summary>

Maybe technically not a bug but when the quiz was created and styled I ran my lighthouse checks, on desktop I was getting 100% in Performance but on mobile Performance was between 60%-70%.
![Mobile Performance](/docs/readme/bugs/mobile-lighthouse-bug.png)

Fix - To increase Performance there were several actions I made:
1. Removed Font Awesome script in Header and placed at end of body.
2. Added the following to the Head - link rel="preconnect" href="https://opentdb.com/api.php?amount=10&category=11&type=multiple"
3. Removed the global media queries css file and placed the required css into the quiz.css file.
4. Removed the mediaqueries.css link from the head
5. Went through the css and removed or altered css that was not need or was duplicated for some properties.
6. Reduced margins of the quiz container. Gave some specific widths to elements.
7. Added favicon to remove console errors.
</details>

<details><summary>Bug - API Fetch Issues</summary>

Originally I had the quiz setup to fetch 10 questionS and display 1 at a time. I quickly noticed from testing and feedback that there was a small delay between each question as instead of displaying the next question of the 10 fetched it was fetching 10 questions each time.

Fix - To resolve this issue I had watched a James Q Quick video on fetching from an API and took some of the code he had written and applied it to the quiz I had setup. It took awhile to understand the API call but after hours of testing and gaining knowledge it now fetches the 10 questions only once and displays each question from the 10 fetched without delays.

Another issue that came up in testing and from feedback was that the user was sometimes seeing the same question in the same instance of a quiz i.e. 2 of the 10 questions in one game were the same

Fix - To resolve this I simply removed the question that was displayed from the questions array using splice - availableQuestions.splice(questionIndex, 1);
</details>

<details><summary>Bug - Username Input Issues</summary>

Originally I had the input function set to "keyup" event and all seemed well until a class mate noticed that the "Save" button was disabled when the tried to copy and paste their username in.

Fix - To resolve this issue I changed the "keyup" event to "input" and user was now able to copy and paste.

I noticed with testing the user could enter 4 blank spaces as a username and was able to save. This caused the Leaderboard to look bad with no names showing.
![Mobile Performance](/docs/readme/bugs/username-code.PNG)

Fix - To resolved I disabled spaces in the input field and added some instruction text under the input field for the user to review.
</details>

[Back to top &uarr;](#contents)

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the repository [P2-Movie-Buff-Or-Bluff](https://github.com/seanf316/P2-Movie-Buff-Or-Bluff)
2. At the top of the Repository (not the top of the page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "Pages" Section on the left side of the page. Click "Pages".
4. In the "Pages" section under "Source" there is a "Branch" section, click the dropdown called "None" select "main" and click save.
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://seanf316.github.io/P2-Movie-Buff-Or-Bluff/) in the "GitHub Pages" section.

### Version Control

For version control the following steps were made:

1. Changes made to files in Gitpod
2. Files made ready for commit with command - git add .
3. For the commits the following command was run along with commit description - git commit -m "This is my commit etc"
4. To move the changes to Github the following command was run - git push  

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the repository [P2-Movie-Buff-Or-Bluff](https://github.com/seanf316/P2-Movie-Buff-Or-Bluff)
2. At the top of the Repository (not the top of the page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

[Back to top &uarr;](#contents)

## Credits

1. [Code Institute Template](https://github.com/Code-Institute-Org/gitpod-full-template)
    - This repository was created using the template provided by Code Institute. Also, without the knowledge gained through the course work, I could not be able to create this site so thank you Code Institute.
1. [W3schools](https://www.w3schools.com/)
    - W3schools was used throughout the project process for answering any queries I had.
1. [James Q Quick](https://www.youtube.com/c/JamesQQuick), [Kevin Powell](https://www.youtube.com/kepowob), [Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified), [Code with Ania Kubów](https://www.youtube.com/c/AniaKub%C3%B3w), [Brian Design](https://www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A).
    - All of the above for creating fantastic videos on HTML/CSS & Javascript. Javascript was very tough to grasp but with what was learned on the course coupled with the knowledge gained from all of the above and the tutorial videos they produced it slowly started to make sense. I reviewed several videos on building a quiz and took some ideas from different videos and applied them to my own. Any code that was used has been credited in comments in js files. The videos used for inspiration and where some code was acquired are listed below:
    GeekProbin - https://youtu.be/-cX5jnQgqSM
    James Q Quick - https://youtu.be/3aKOQn2NPFs
    Web Dev Simplified - https://youtu.be/riDzcEQbX6k
    Brian Design - https://youtu.be/f4fB9Xg2JEY
1. [Stackoverflow](https://stackoverflow.com/)
    - I found myself on Stackoverflow so many times researching issues with javascript code or the occasional Html/CSS issue. This a fantastic place to learn and troubleshoot code.
1. [Slack](https://slack.com/intl/en-ie/)
    - After finishing the javascript essentials and Love Maths project it was very daunting sitting in front of an empty .js file. The people on slack and especially my class mates where always willing to lend a hand and some of the mentors on there are just amazing.

## Acknowledgements

- To my amazing wife Denise who has supported me every day and kept me motivated while I have been spending long hours studying and building the site she had to look after and entertain our 5-year-old son so I think I had an easier time of it.
- My son Alex for always making me laugh when I'm tired from a long night of study/coding.
- To my family and friends - for being a great support and providing a lot of the user testing for me.
- To my mentor Daisy Mc Girr, we have only had a few sessions together but she has been a huge help to me.
- My class mates Sean Johnston & Victoria Traynor for reviewing and testing my Project throughout the course.

[Back to top &uarr;](#contents)