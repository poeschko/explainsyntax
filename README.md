# explainsyntax

This is a tool to help understanding the syntax of certain programming languages (such as JavaScript) by annotating pieces of code with information from the corresponding Abstract Syntax Tree and providing links to in-depth information (such as [MDN](https://developer.mozilla.org)). It is similar to [AST Explorer](https://astexplorer.net/) (but more beginner-friendly) and [explainshell](https://explainshell.com/) (but for programming languages).

## Setup

You need at least [Node](https://nodejs.org) 9.10 and either npm (usually comes with Node) or [Yarn](https://yarnpkg.com) (which we'll assume in the examples here).

In the project directory, run

    yarn install

to install all dependencies. Then

    yarn start

runs the app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will automatically reload when you edit the code. You will also see any lint errors in the console.

## Foundation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). For more details see the most recent version of [Create React App's README](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).
