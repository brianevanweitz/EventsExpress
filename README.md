# Events Express
![Concert Gif](https://media1.giphy.com/media/iql3feYAKaqftl4hP3/giphy.gif)

## Project Description
Events Express will allow users to search for events in their zip code on a specific date. They will be able to select any they're interested in to add them to a list containing links to buy tickets to those events.

## Wireframes
MVP: https://imgur.com/a/foYd25Q
Post-MVP: https://imgur.com/a/hVQ5nWx

## Completed Project Link
https://events-express.surge.sh

## API
Ticketmaster API-https://developer.ticketmaster.com/

## Additional Libraries
date-fns-https://date-fns.org/

## Functionality
MVP:
* Styled UI that accepts User Input and saves it to state
* Calling and receiving event data from Ticketmaster API conditionally based on user input
* Rendering event data to user in clear way, while providing user means to both save events of their choice, and a link to buy tickets for those events

Post-MVP:
* Using walkthrough from blog.flowandform.agency and date-fns library to create interactive calendar in React
* Remove date input from form, let user click date box on calendar to search concerts for that date
* Utilize modal windows for event list when calendar date is clicked

## Potential Problems
* Ticketmaster API has a very specific way it accepts dates in its search queries. I'm gonna have to figure out how to structure user input into that format.
  * Possible solutions: using date-fns functions to automatically restructure dates, or just showing correct date input in user form. (e.g. 'YYYY-MM-DD')
* Syncronizing personal styling and functionality with that of imported calendar code.
  * Possible solutions: I've already got a decent feel for how the calendar code works, so this should just be a matter of hacking at it for a bit until it integrates properly.

## Component Hierarchy
* App
  * Header
    * Title
  * Main
    * Home
      * Welcome(Contains explanation of the app and how it works)
      * Form(Takes date and zip code input from user, submit button generates API call and takes user to event list component)
    * EventList
      * List(Contains map of event data from API call, with buttons to add events to AllEvents component)
    * AllEvents(Shows data for events added from EventList, with links to buy tickets for each)
  * Footer

## Post-project observations
* I had to change from just concerts to all events to get enough data from my api to be worthwhile. Especially outside of major metropolitan areas, Ticketmaster's offerings become very spaced out.
* I wish I had set out more post-MVP goals for myself. I had MVP complete by Saturday, and the calendar integrated by Monday morning. Even with teaching myself basic modals and animations, I was left with over 10 hours of classtime that I didn't feel productive in or know how to further improve my site with, so it felt like wasted time.
* One further goal I would love to add to the site in the future: I'd like to add an API call to the rendering of the calendar that puts an 'X' through each calendar cell where there are no events for that day in the searched city. That way, in less populated areas users don't have to repeatedly click through every day searching for events.