# Project "React Meetup"

## Description
This project is a websites for "Meetups" and its administration, it allows you to visualize existing ones, create news and add or remove from favorites

## Requirements:
* node v16.15.1
* yarn (npm install -g yarn)

## How to install:
`yarn install`

## How to run:
`yarn dev`
Navigate to `http://localhost:3000`

## How does it work:
This project runs on Next.js, so we have the advantages of Universal Javascript (Isomorphic) like rendering time optimization, routing via URL and SEO performance.

The React web-app uses Redux as state management system with asyncronous middleware using Redux-Saga

## Notes:
I implemente an Hexagonal Architecture with Domain Driven Design (DDD) respecting SOLID principles and Clean Code

This is a small project so this architecture could be considered as "excesive", although I took into account as if this fictional project was required to keep scaling and more developers join the team. So now that we have this architecture and good practices, mantaining and scalability would become very appropiate and easier to keep coding than if we would started with a non-layered architecture.

## Proposal of tasks to improve the project:
- Create a "burger" menu so mobile browsing could be more friendly
- To handle errors
- To increase testing coverage
- Some of the files are not yet in Typescript and some other need type fixing
- Use PropTypes or Porp interface in react components
- Implement a "repository" of database instead of the in-file storage implementation
- Setup i18n for texts source of true and new languages support
- Complete the lintern configuration because right now is not strict and some erros undetected
- Fix Saga's Generator function Types
- Creat specific types for the Frontend in order to de-coupled its dependency with the backend
- Show a spinner loader every time a Saga is invoked (asyncronous actions)
- Create pipelines for automatic linting and testink (CI)
- Implement the project in production
- Learn more about the business logic to prioritize tasks and create a better and stable product

Developed with ❤️ by Sergio Enrique Vargas🦊 