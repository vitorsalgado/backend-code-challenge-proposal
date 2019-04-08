# Backend Code Challenge
[![wercker status](https://app.wercker.com/status/7814c1049ce21e11512a7c1db725e6d9/s/master "wercker status")](https://app.wercker.com/project/byKey/7814c1049ce21e11512a7c1db725e6d9)  

Code challenge designed to evaluate technical knowledge of **Backend** candidates.  

## Content
- [The Challenge](#the-challenge)
    - [Scenario](#scenario)
- [Submission Guidelines](#submission-guidelines)
- [Attention](#attention)

## The Challenge 

### Scenario
You're part of team that develops a mobile e-commerce for a huge company.  
This project will target **powerful devices** and also devices with **low memory and process capabilities**.  
The customer already has a established backend containing all business rules and information but, some systems rely on **legacy technologies** and may be **unstable** too.  
**You** are responsible to build the **API** that will integrate with these services and provide all information needed by Mobile.  
For the next interactions, the team will work on the **Home Screen**  
and you must build all required **endpoint(s)** that will integrate with these services and provide the information by this screen.

### Features
Mobile needs to build a home screen that will show: 

- Top **5** categories carousel;  
- Carousel with discount coupons that are **still valid**;  
- Grid with all **remaining** categories;
- Mobile needs only a **icon** and **small** category image. Nothing more.

To retrieve categories, you will need to consume this service:  
To retrieve discount coupons, use this service:  

### Notes
- Discount coupons is unstable and sometimes takes too long to respond;
- Categories model returned by the API seems hard to handle.

## What We Would Like To See
You are free to implement this solution the way you like taking in consideration the scenario, project target, performance implications.
- We are very focused in quality in our projects and we would like to see unit, integration, contract tests or quality strategy you prefer;


## Technology Stack
- Java 8 or newer;
- Gradle as the build system;
- JUnit.

---

## Submission Guidelines
Follow the steps below to to implement and submit this code challenge: 
- Fork this repository. [How to Fork a repository](https://help.github.com/en/articles/fork-a-repo);
- Implement the proposed challenge; 
- After completing the challenge, open a **Pull Request** to this repository, using **Github** interface. [Check this guide for more details](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork);
- If possible, let the repository public to make code review easier :)

---

## ATTENTION
Do **NOT** try to PUSH direct to THIS repository!

Some files and directories in this repository **MUST NOT** be removed.  
These files are:  
```
.support/
.github/
wercker.yml
``` 
