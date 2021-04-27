# CoroVerify

CoroVerify is a community run open source project to help the people who require resources regarding the novel coronavirus.

---

## Table of Contents

1. [Project Introduction](#project-introduction)
   - [User Types](#user-types)
   - [System Function](#system-function)
   - [Technical Specifications](#technical-specifications)
2. [Features](#features)
   - [Database for COVID Resources and Contact Information](#database)
   - [Active Resource Tracking](#resource-tracking)
   - [Automatic Contact Setting](#contact-setting)
3. [API Documentation](#api-documentation)
   - [Local](http://localhost:8080/api-docs)
   - [Deployed](/api-docs)
4. [How to Contribute](#how-to-contribute)
5. [Further Ideas](#further-ideas)
6. [Sponsors and Donations](#sponsors-and-donations)

---

## Project Introduction

The CoroVerify Application System is an open source REST API built using the MERN stack, MongoDB, Firebase and Google APIs. It aims to connect COVID related resources to help out the community during this tsunami wave of COVID Cases in India. Resources include, but aren't limited to:

- beds
- oxygen
- cylinders
- medicines

#### User Types

The System involves three types of users:

- **The Distributors / Government Agents or Officials**
  : These are resource holders/stockers who can directly come and register on the platform and be available for contacting by those in need / Representatives of the government who can monitor and provide relevant information and be available for queries and management.
- **The People** : A normal person can use the app as one of the following sub categories -
  - **The Updaters and Verifiers**
    : These are people who help verify leads and submit certain information to the system, such as proof that they contacted the persons listed out on a post and give us back the exact specifics as to which ones are legit and can provide help. And with those they will provide solid evidence, like phone call history and stuff, so that we can verify from our end and update it.
  - **The Help Seekers**
    : These are people who need the resources can directly access through our database, or put out a requirement to all registered distributors with the required information, and whichever Distributor has them available and can supply, will reply.

#### System Function

The System works as follows:

- The Distributors list out their licenses and stock of resources available with them.
- This information is regularly updated on their end as and when it changes.
- When there is a request raised by a Help Seeker, a call-to-action is sent out to the system.
- Upon this happening, a Distributor can volunteer to fulfill the requirements, a contact is set and the resources delivered.
- And once the Help Seeker confirms that they have received the items, we update the database of their stocks, subtracting the necessary

#### Technical Specifications

The System works...

---

## Features

#### Database

The Application System creates and maintains a publicly available database of COVID resources and also the various [User Types](#user-types) defined within the system, viz. Distributors, Verifiers and Help Seekers, along with relevant contact details and other information.

#### Resource Tracking

The System actively tracks the stocks of each Distributor and also maintains logs of transactions between Distributors and Help Seekers, with Verifiers acting as a support system. The stocks are updated in real-time, with each fulfilment between Distributor and Help Seeker.

#### Contact Setting

The System implements basic logic wherein, whenever a help request is sent out to the system, Distributors can volunteer to supply required items/resources to the Help Seeker in consideration, and their contact information is shared with the Help Seeker. Hence a Contact Channel is opened.

---

## API Documentation

The API Documentation is available locally at http://localhost:8080/api-docs.

The deployed API Documentation is available at:

---

## How to Contribute

You can help with this project by involving and enrolling all your known ones into the System and providing us the much required medium by becoming a Verifier and getting as many people as possible to do so as well.

And if you are a developer, its a plus point, because we need your help!
Help the project out by contributing with code, issue management and testing. You can head over to `Issues` and help us develop those features.

And thank you for your efforts, thank you for being a real superhero. ♥

---

<!--
## Sponsors and Donations

If you would like to help this project financially, please donate at: {URL}

All proceeds shall go into the expansion and upscaling of the project, and the leftover amount will be donated to the following charities: {LIST}

We are especially thankful to the following sponsors: {LIST}

--- -->
