# Week 5: DOM Manipulation & Events Practice

## Author
- **Name:** Amos Kimiti
- **GitHub:** [@Kimiti4](https://github.com/Kimiti4)
- **Date:** March 31, 2026

## Project Description
This project focuses on mastering core JavaScript DOM manipulation and event handling concepts. It includes exercises on element selection, traversal, content modification, dynamic element creation/removal, event handling, event propagation, delegation, form validation, and a fully functional To-Do List application with localStorage persistence.

## Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla JS)

## Features
- DOM element selection using getElementById, querySelector, querySelectorAll
- DOM traversal (parent, children, siblings navigation)
- Content manipulation (textContent vs innerHTML)
- Attribute handling (get/set/remove attributes, data attributes)
- Dynamic styling via JavaScript
- Creating, inserting, cloning, and removing elements
- Event handling (mouse, keyboard, form, window events)
- Event object usage (target, preventDefault, stopPropagation)
- Event bubbling and delegation
- Form validation with real-time feedback
- Interactive To-Do List with localStorage persistence
- Daily challenges (Color Changer, Dynamic Elements, Image Remover, Content Copier, Dark Mode)

## How to Run
1. Clone this repository
2. Open `index.html` in your browser
   OR
   Open any HTML file directly:
   - `index.html` - Full To-Do List application
   - `task-list.html` - Event delegation demo
   - `DOM Assignments/practice.html` - All DOM exercises
   - `DOM Assignments/day1-color-changer.html` - Day 1 challenge
   - `DOM Assignments/day2-dynamic-elements.html` - Day 2 challenge
   - `DOM Assignments/day3-image-remover.html` - Day 3 challenge
   - `DOM Assignments/day4-content-copier.html` - Day 4 challenge
   - `DOM Assignments/day5-dark-mode.html` - Day 5 challenge

## Lessons Learned
- Difference between HTML attributes vs DOM properties
- DOM updates are destructive by default (innerHTML overwrites)
- Importance of event delegation for dynamic elements
- How event bubbling works (child → parent → grandparent)
- Safe vs unsafe DOM manipulation (textContent vs innerHTML)
- Structuring code to avoid conflicts between multiple DOM operations
- Using localStorage for persistent data storage
- CSS custom properties for theme switching
- Modern DOM methods (prepend, append, before, after)

## Challenges Faced
- Elements returning null due to incorrect selectors
- Content disappearing due to multiple DOM overwrites
- Event delegation issues fixed using closest()
- Reusing DOM elements without cloning
- Form validation not triggering due to incorrect function structure
- Preventing destructive operations during demo (commented out)
- Managing state for filters and task completion

## Bug Fixes Applied
✅ Fixed task-list.js: Toggle completed class on parent li instead of span
✅ Fixed dom.js: Commented out destructive DOM operations
✅ Fixed dom.js: Proper error message creation and removal
✅ Fixed dom.js: Corrected event delegation selector (ul.nav-list)
✅ Fixed dom.js: Restructured form validation function scope
✅ Added proper error styling and message display

## Screenshots
![Task List](images/Capture.PNG)
![To-do list](images/Capture1.PNG)

## Live Demo (if deployed)
- [To-Do List Application](https://kimiti4.github.io/iyf-s10-week-05-Kimiti4/)
- [Task List (Event Delegation)](https://kimiti4.github.io/iyf-s10-week-05-Kimiti4/task-list.html)
- [Click Counter](https://kimiti4.github.io/iyf-s10-week-05-Kimiti4/DOM%20Assignments/practice.html)
- [Day 1: Color Changer](https://kimiti4.github.io/iyf-s10-week-05-Kimiti4/DOM%20Assignments/day1-color-changer.html)
- [Day 2: Dynamic Elements](https://kimiti4.github.io/iyf-s10-week-05-Kimiti4/DOM%20Assignments/day2-dynamic-elements.html)
- [Day 3: Image Remover](https://kimiti4.github.io/iyf-s10-week-05-Kimiti4/DOM%20Assignments/day3-image-remover.html)
- [Day 4: Content Copier](https://kimiti4.github.io/iyf-s10-week-05-Kimiti4/DOM%20Assignments/day4-content-copier.html)
- [Day 5: Dark Mode](https://kimiti4.github.io/iyf-s10-week-05-Kimiti4/DOM%20Assignments/day5-dark-mode.html)
