---
title: 'Guess the Color'
---

Guess the Color
===
***So you think you are lucky today?? hah***... :blush::blush::blush:
***Lets see whats the highest score you can reach?!***

**Once you are ready**
**click** [![button](https://img.icons8.com/metro/26/000000/go.png)](https://webahead5.github.io/Color-Roulette/) **to Start Playing**

## Table of Contents
[TOC]


User story
---

```gherkin=
Feature: Guess the Color
         user plays against the computer "guessing the color". if user's choice                matches the computer's pick then user would win.
    
  # The game has three steps
  Scenario: The user chooses a color
    Given the user hits play button
    When the computer chooses a random color
    Then  returns the results 
```


User flows
---

```gherkin=
Game Scenario 
    User: chooses color    
    User: hits play
    Game: generates random color selection
    Game: displays the result and new score to the user
```
![alt text](https://i.imgur.com/3SPv4as.png)



Project Goals
---
* Designing an interactive game where the concept of the game came from the roulette game in which the player put an amount of his money on a one or more color.However,to make our game much more simple we stick to three colors.


* The capability to integrate HTML,CSS and javascript all together in the game where we implemented attributes and functions of javascript to fully control the design of the game and the flow of it . 



## FAQ

1. **What will happen if the user hits play without choosing a color?**
The game will not play and ask the user to choose a color.

2. **What will happen if the user's color matches the game's color?**
The game will display a win screen and increases the users score by 1 point.
  
3. **What will happen if the user's color does not match the game's color?**
The score will be decreased by 1 each time the player till he reach a point where his score is zero where he cannot play anyfurther.

  
4. **What will happen if the user's score reached zero ?**
When the user runs out of points (score is zero) a tab will appear showing that the game is over and the game will be restarted.


