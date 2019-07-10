# Use Amplify to deploy the frontend application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

Work inside your AWS Cloud9 or local environment.

## Configure your environment

* In AWS Cloud9 configure the AWS CLI using the local credentials, and set the region name to **`us-east-1`** and the output format to **`json`**. 

``` bash
aws configure
```

* In your local environment [configure the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-quick-configuration).

## Install global dependencies

Update Node.js to the minimal version of 8.

``` bash
nvm i v10
```

Install Amplify CLI tool https://github.com/aws-amplify/amplify-cli

``` bash
npm install -g @aws-amplify/cli
```

Install the Angular CLI globally.

``` bash
npm install -g @angular/cli
```

## Clone project and install dependencies

``` bash
git clone https://github.com/aurbac/msg-app-frontend.git
cd msg-app-frontend/
npm install
npm install --save aws-amplify aws-amplify-angular
```

## Initialize amplify project

``` bash
amplify init
```

? Enter a name for the project **msg-app-frontend**

? Enter a name for the environment **dev**

? Choose your default editor: **Sublime Text**

? Choose the type of app that you're building **javascript**


Please tell us about your project

? What javascript framework are you using **angular**

? Source Directory Path:  **src**

? Distribution Directory Path: **dist/frontend**

? Build Command:  **npm run-script build**

? Start Command: **ng serve**

Using default provider  awscloudformation


For more information on AWS Profiles, see:

https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html


? Do you want to use an AWS profile? **Yes**

? Please choose the profile you want to use **default**

## Add hosting and publish

``` bash
amplify add hosting
```

? Select the environment setup: **DEV (S3 only with HTTP)**

? hosting bucket name **msg-app-frontend-20190709233955-hostingbucket** (Use default name)

? index doc for the website **index.html**

? error doc for the website **index.html**

``` bash
amplify publish
```

? Are you sure you want to continue? **Yes**

After your app is published, use the endpoint resulted to get into your application.