# Movie Buff or Bluff

Movie Buff or Bluff is a Movie based Trivia Quiz site aimed at anyone who enjoys the world of cinema and testing their knowledge.

Developed by Sean Finn.

![Am I Responsive Website Mockup](/assets/readme/amiresponsive.JPG)

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

This is my first portfolio project for [Code Institute](https://codeinstitute.net/) and my goal with this project is to display my newly acquired HTML & CSS skills. I wanted to design an aesthetically pleasing and responsive website that provides the best possible sites and apps to help any new or existing Guardian who decides to join or is already part of the Destiny game player base.

## Target Audience

The target audience for this site is new and existing players of the Destiny Franchise, Destiny can be overwhelming for new players so having all the best Destiny-related apps in one location should provide a huge benefit to the player. It should also benefit existing players who may not be aware of these sites and apps.

## User Experience (UX)

- ### User stories

    - #### First Time Visitor Goals

        -   As a First Time Visitor, I want to easily understand the main purpose of the site.
        -   As a First Time Visitor, I want to be able to easily navigate through the site to find content specific to my needs.
        -   As a First Time Visitor, I want to be able to view the site on multiple devices.

    -   #### Returning Visitor Goals

        -   As a Returning Visitor, I want to find out more information about the best third-party sites and apps for the Destiny gaming franchise.
        -   As a Returning Visitor, I want to learn more about the Destiny story and Lore.
        -   As a Returning Visitor, I want to find the best way to get in contact with the site developer.

    -   #### Frequent User Goals

        -   As a Frequent User, I want to check to see if there are any newly added sites or apps.
        -   As a Frequent User, I want to check to see if there are any new sections added to the site.
        -   As a Frequent User, I want to sign up so that I am emailed any major updates and/or changes to the website.

-   ### Design

    -   #### Imagery

        -   The large, background hero image on the splash page is designed to be striking and catch the user's attention. I wanted a Destiny-related image that had a futuristic sci-fi aesthetic.

    -   #### Colour Scheme

        -   I wanted the color scheme to match the hero image so variations of green and cream were used for backgrounds in the sections. I used WhiteSmoke and grey for the paragraphs and variations of green for all the headings. Black was used for the navbar/footer and hover effect on the anchor/button elements to contrast well with the greens chosen for the site. For the card background, I used some linear gradient colors to add vibrancy to the aesthetic.
        ![Coolors Image](/assets/readme/coolors.png)

    -   #### Typography

        -   The Poppins font is the main font used for the paragraphs throughout the website with Sans Serif as the fallback. I used font Exo 2 for all my headings. I felt that Poppins and Exo 2 worked really well together to provide that gaming text looks for the site. All fonts were taken from Google Fonts and applied via the @import method to the CSS file.

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

### Navbar

![Desktop Navbar](/assets/readme/desktop-nav.PNG)
![Responsive Navbar](/assets/readme/tablet-mobile-nav.PNG)
![Responsive Navbar Opened](/assets/readme/hamburger-nav.PNG)
![Responsive Navbar Landscape Opened](/assets/readme/hamburger-nav-landscape.PNG)
The navigation bar is present on the homepage and hides when scrolling down but appears when scrolling up. The user will find that it is easily noticeable, intuitive, and easy to use. On the left side is the site Logo with the navigation links to the right, the navbar is responsive and changes to the common hamburger menu style when moving to Tablet or Mobile devices. Navlinks flex direction was changed in a media query for mobile landscape.

### About Vanguard Section

![About Vanguard Section](/assets/readme/about-vanguard.PNG)
The About Vanguard Section consists of a mission statement along with some flex boxes containing snippets of info from the game. Linear Gradient colors were used here to provide a bit of vibrancy to the boxes and a scale-up-down animation for a pleasing experience. The mission statement is clear and should provide the user with a clear description of what the site is about.

### Destiny's Story for Beginners Section

![Destiny's Story for Beginners Section](/assets/readme/about-destiny.PNG)
The Destiny's Story for Beginners Section provides the user with 4 videos detailing some of the history and lore of the Destiny game which can help the user understand the game and its universe. They were created and narrated by popular Destiny Youtuber " My name is Byf".

### Best Sites Section

![Best Sites Section](/assets/readme/best-sites.PNG)
The Best Sites Section provides the user with a nice 4-card vertical layout with each card containing an image, title, site description, and anchor tag linking to the site itself. The sites provided are the most popular third-party sites for the Destiny Franchise and each site has its own purpose.

### Best Apps Section

![Best Apps Section](/assets/readme/best-apps.PNG)
The Best Apps Section provides the user with a nice 4-card horizontal layout with each card containing an image, title, site description, and anchor tag linking to the Apple app store and the Google play store. The apps provided are the most popular third-party apps for the Destiny Franchise and each site has its own purpose.

### Join Us Section

![Join Us Section](/assets/readme/join-us.PNG)
In the Join Us Section at the beginning of the section, the user will see a quote from one of the Destiny Franchise characters and a bit of incentive text to join us. There is a form below that also contains a feedback area which the user can avail of to let us know what they would like to see in future updates. There are also some custom merchandise images which the user can possibly win by joining up.

### Thank You Message

![Thank You Message](/assets/readme/thank-you.PNG)
When the user clicks Join Us on the form they are met with a Thank You message and confirmation that their registration is complete. There is an anchor tag linked back to the main site.

### Footer

![Footer](/assets/readme/footer.PNG)
The footer is placed at the bottom of the page. It contains the custom site logo which acts as a link to the site and the social media links displayed with icons provided by Font Awesome. There is also a small portion of text for the Copyright/Disclaimer. This is where the user can click on a social media link and reach out to the developer for news and updates.

[Back to top &uarr;](#Vanguard)

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks and Tools Used

1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Poppins' and 'Exo 2' fonts into the style.css file which is used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used for the icons in the About Vanguard section and the social media icons in the footer for aesthetic and UX purposes.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the project's code after being pushed from Git.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/seanf316/P1-Vanguard/tree/main/assets/wireframes) during the design process.
1. [ILoveIMG:](https://www.iloveimg.com/)
    - ILoveIMG was used to resize multiple images during the design process.
1. [Placeit.net:](https://placeit.net//)
    - Placeit.net was used to create a custom logo and merchandise images.
1. [XConvert](www.xconvert.com)
    - XConvert was used to convert images to webp or png where required.
1. [DEV](https://dev.to/)
    - DEV provided the tutorial to create the mobile [hamburger menu](https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci).
1. [W3schools](https://www.w3schools.com/)
    - W3schools provided the tutorial to create the ["Hide Menu on Scroll"](https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp) that has been implemented on the site.
1. [W3C HTML Validator](https://validator.w3.org/)
    - I used W3C HTML Validator for the validation of the site's HTML code.
1. [W3C JigSaw Validator](https://jigsaw.w3.org/css-validator/)
   - I used W3C JigSaw Validator for the validation of the site CSS code.
1. [Grammarly](https://www.grammarly.com/)
    - Grammarly was used to check typography.
1. [Am I Responsive](https://ui.dev/amiresponsive)
    - Am I Responsive was used to produce the website mockup.
1. [favicon.io](https://favicon.io/)
    - favicon.io was used to create my site's favicon.
1. [uiGradients](https://uigradients.com/)
    - uiGradients provided the linear gradient colors used on the cards in the site.

[Back to top &uarr;](#Vanguard)

## Testing

### W3 Validators

The W3C Markup Validator and W3C CSS Validator Services were used to validate the code used in the project to ensure there were no syntax errors.
<details><summary>W3C Markup Validator</summary>

![W3C Markup Validator Results](/assets/readme/w3-validator-html.PNG)

</details>
<details><summary>W3C CSS Validator</summary>

![W3C CSS Validator Results](/assets/readme/w3-validator-css.PNG)

</details>

The warnings that appear in the W3C CSS Validator are for the below which are being used for the linear gradient backgrounds as a fallback for old browsers:
<details><summary>W3C CSS Validator Warnings</summary>

![W3C CSS Validator Warnings](/assets/readme/w3-validator-css-warnings.PNG)

</details>

### Accessibility and Performance

To check the accessibility of my site, I used the [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/) and received no errors in the result:
<details><summary>WAVE Web Accessibility Evaluation Tool</summary>

![WAVE Web Accessibility Evaluation Tool Results](/assets/readme/wave-webaim-test.PNG)

</details>

For performance and more accessibility testing, I used Google Lighthouse throughout:

#### Main Page - Desktop

![Lighthouse Desktop Score](/assets/readme/lighthouse-desktop.PNG)
<details><summary>Performance</summary>

![Lighthouse Desktop Performance Score](/assets/readme/lighthouse-desktop-performance.PNG)

</details>
<details><summary>Accessibility</summary>

![Lighthouse Desktop Accessibility Score](/assets/readme/lighthouse-desktop-accessibility.PNG)

</details>
<details><summary>Best Practices</summary>

![Lighthouse Desktop Best Practices Score](/assets/readme/lighthouse-desktop-best-practices.PNG)

</details>
<details><summary>SEO</summary>

![Lighthouse Desktop SEO Score](/assets/readme/lighthouse-desktop-seo.PNG)

</details>

#### Main Page - Mobile

![Lighthouse Mobile Score](/assets/readme/lighthouse-mobile.PNG)
<details><summary>Performance</summary>

![Lighthouse Mobile Performance Score](/assets/readme/lighthouse-mobile-performance.PNG)

</details>
<details><summary>Accessibility</summary>

![Lighthouse Mobile Accessibility Score](/assets/readme/lighthouse-mobile-accessibility.PNG)

</details>
<details><summary>Best Practices</summary>

![Lighthouse Mobile Best Practices Score](/assets/readme/lighthouse-mobile-best-practices.PNG)

</details>
<details><summary>SEO</summary>

![Lighthouse Mobile SEO Score](/assets/readme/lighthouse-mobile-seo.PNG)

</details>

#### Thank You Page - Desktop

![Lighthouse Desktop Score](/assets/readme/thank-you-desktop.PNG)

#### Thank You Page - Mobile

![Lighthouse Mobile Score](/assets/readme/thank-you-mobile.PNG)

#### Lighthouse errors

At Desktop & Mobile, the Best Practices score is 92 - This is a cookie issue with embedded YouTube videos. Below, you will find some screenshots detailing the errors:
<details><summary>Desktop/Mobile Chrome Devtools Errors</summary>

![Devtools Error](/assets/readme/lighthouse-desktop-dev-tools-warning.PNG)
![Devtools Error](/assets/readme/lighthouse-desktop-dev-tools-warning2.PNG)
![Devtools Error](/assets/readme/lighthouse-desktop-dev-tools-warning3.PNG)

</details>
I have researched this issue on StackOverflow and spoke to my mentor and have come to the conclusion I can't fix it at this time but will look to resolve it in future updates. When YouTube videos are removed and Lighthouse is run, I received a score of 100 in Best Practices:
<details><summary>YouTube Videos Removed</summary>

![Lighthouse Best Practices Score with Youtube Videos Removed](/assets/readme/lighthouse-desktop-best-practices-youtube-videos-removed.PNG)

</details>

At Mobile, the Performance score is 92 - Below you will find some screenshots detailing the errors:
<details><summary>Mobile Performance Errors</summary>

![Lighthouse Mobile Performance Errors](/assets/readme/lighthouse-mobile-performance-issues.PNG)

</details>
I have researched this issue by clicking the Learn more link in Lighthouse and the fixes require knowledge of JavaScript/Plugins, so I have concluded I can't fix it at this time but will look to resolve it in future updates.

### Further Testing

- The website was tested on Google Chrome, Internet Explorer, Microsoft Edge, Mozilla Firefox, and Safari browsers.
- The website was viewed on a variety of devices such as desktops, Laptops, Apples Products (Macbook, IPad Pro, iPhone 13 Pro, iPhone 8), and a range of Android devices (Samsung Note 10+, Samsung S20 Plus, Samsung Tab S7+, Oppo mobile).
- A large amount of testing was done to ensure that all pages were linking correctly.
- I asked friends and family members to review the site and document any bugs and/or user experience issues. Some co-workers also helped out with testing.

### Testing User Stories from the User Experience (UX) Section

- #### First Time Visitor Goals

    -   As a First Time Visitor, I want to easily understand the main purpose of the site.
        - Upon entering the site, users are automatically greeted with a clean and easily readable navigation bar to go to the section of their choice. Underneath there is a Hero Image with Text and a "Learn More" Call to action button.
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