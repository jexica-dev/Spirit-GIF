# Project Overview

## Spirit GIF

`https://github.com/xicaz/Spirit-GIF`

`https://xicaz.github.io/Spirit-GIF/`

## Project Description

<!-- Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality. -->

The project will be a playful site using Giphy's API to create the user's GIF/meme spirit animal after entering their name in the input box.

## API and Data Sample

```
     "data": [
        {
            "type": "sticker",
            "id": "cL5rCz0o6NsJ5R5bdv",
            "url": "https://giphy.com/stickers/amywinehouse-amy-winehouse-cL5rCz0o6NsJ5R5bdv",
            "slug": "amywinehouse-amy-winehouse-cL5rCz0o6NsJ5R5bdv",
            "bitly_gif_url": "https://gph.is/st/Yk8ZLbm",
            "bitly_url": "https://gph.is/st/Yk8ZLbm",
            "embed_url": "https://giphy.com/embed/cL5rCz0o6NsJ5R5bdv",
            "username": "amywinehouse",
            "source": "",
            "title": "Love Is A Losing Game Singer Sticker by Amy Winehouse",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 1,
            "import_datetime": "2020-04-27 10:54:10",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "600",
                    "width": "366",
                    "size": "1570395",
                    "url": "https://media1.giphy.com/media/cL5rCz0o6NsJ5R5bdv/giphy.gif?cid=180751484rm3itcdatgt9t9i1quuucl9o71uv90rsbft1fz8&rid=giphy.gif&ct=s",
                    "mp4_size": "1424465",
                    "mp4": "https://media1.giphy.com/media/cL5rCz0o6NsJ5R5bdv/giphy.mp4?cid=180751484rm3itcdatgt9t9i1quuucl9o71uv90rsbft1fz8&rid=giphy.mp4&ct=s",
                    "webp_size": "1235796",
                    "webp": "https://media1.giphy.com/media/cL5rCz0o6NsJ5R5bdv/giphy.webp?cid=180751484rm3itcdatgt9t9i1quuucl9o71uv90rsbft1fz8&rid=giphy.webp&ct=s",
                    "frames": "48",
                    "hash": "9f0dc320bf7dd38785cf30391311bfe6"
                },

```

## Wireframes

Giphy's API
`https://developers.giphy.com/branch/master/docs/api/`

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and Post MVP.

<!-- Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion. -->

#### MVP

![Spirit Gif](https://i.imgur.com/3Qv204V.png)

- Find and use external api
- Render data on page
- Allow API to add memes using their names in the search engine.

#### PostMVP

- Add random animals, based on the same first letter of their name.

## Project Schedule

<!-- This schedule will be used to keep track of your progress throughout the week and align with our expectations. -->

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day      | Deliverable                                                     | Status   |
| -------- | --------------------------------------------------------------- | -------- |
| July 30  | Prompt / Wireframes / Priority Matrix / Timeframes              | Complete |
| August 3 | Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete |
| August 3 | Pseudocode / actual code                                        | Complete |
| August 4 | Initial Clickable Model                                         | Complete |
| August 5 | MVP                                                             | Complete |
| August 6 | Presentations                                                   | Complete |

## Priority Matrix

![Priority](https://i.postimg.cc/RFqkRrgW/Genius-Priority-Matrix.png)

## Timeframes

<!-- Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. -->

<!-- Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.  -->

| Component        | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Adding Form      |    H     |      3hrs      |    3.5hrs     |   3 hrs    |
| Working with API |    H     |      3hrs      |    2.5hrs     |   3 hrs    |
| Total            |    H     |      6hrs      |     5hrs      |    6 hrs     |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

```

<!-- This is where I add animals based on the first letter of their names. -->

let inputName = NAME

const nameFirstLetter = inputName[0]

let animalName = "";

let letters = "abcdefghijklmnopqrstuvwxyz"

let animals = ["Alligator", "Bear", "Cat", "Dragon", "Elephant", "Frog", "Goat", "Horse", "Iguana", "Jaguar", "Kangeroo", "Lion", "Monkey", "Narwhal", "Otter", "Penguin", "Quail", "Rabbit", "Snake", "Tiger", "Unagi", "Vulture", "Wolf", "Axolotl", "Yak", "Zebra"]

let nameFirstLetterIndex = letters.indexOf(nameFirstLetter)
animalName = animals[nameFirstLetterIndex]


```

## Change Log

<!-- Use this section to document what changes were made and the reasoning behind those changes. -->

```

A lot of changes were based on formatting the layout correctly, testing the gif containers and making the images overlap, trying new typefaces, and playing with javascript functions.


```
