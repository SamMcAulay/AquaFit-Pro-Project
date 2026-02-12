# System Architecture

## 1. High-Level Overview
AquaFit Pro follows a **Monolithic RESTful Architecture**. We chose a TypeScript and/or Javascript stack (React + NestJS) along with your typical web services, to ensure type safety (Where typescript is used) and ease of integration with the tech stack across the entire application, from database entities to frontend components.

### Tech Stack
| Component | Technology | Reasoning |
| :--- | :--- | :--- |
| **Frontend** | **React** | Fast rendering, component-based design, and strong ecosystem. its popularity at the minute is also another benifit. It however can be very poor for SEO |
| **Backend** | **NestJS** (Node.js) | Provides strict architectural patterns (Modules, Controllers, Services) effectively matching the "Robustness" requirement, It fills the same role as spring, However without needing to use java|
| **Database** | PostgreSql | Direct query input wihtin code gives flexability, gives room for error, and integrates well with nestJS |
| **Auth** | Passport.js + JWT | Nest has an inbuilt module for passport, and building our own auth flow |
| **Payments** | Stripe | The gold standard at the minute, and a library is provided in react |

---

## 2. System Context Diagram

N/A

## 3. Back end Architecture - NestJS

We use NestJS to organize our code into three distinct layers. This ensures that "Business Logic" (like checking if a class is full) is kept separate from "Database Logic" (saving the booking).
Every feature moves through these three steps:

1.  **Controller**
    * *Job:* Listens for incoming requests from the React App.
    * *Example:* "A swimmer wants to book the Tuesday 6pm Block."
    * *Action:* It validates the data (is it a valid email? Is the slot booked already? you get the idea) and passes it to the Service.

2.  **Service**
    * *Job:* Applies the rules of the AquaFit business.
    * *Example:* It checks: "Is the Tuesday block full?" and "Does this Person have enough credit?".
    * *Action:* If everything is okay, it tells the Repository to save it. If not, it throws an error ("Class Full").

3.  **Repository**
    * *Job:* Talk directly to the Database.
    * *Example:* It saves the new booking row into the `bookings` table. (database isnt designed yet this is TBD)

---

### Project Modules
The backend should be split into seperate "modules" to avoid one giant file, they are organised to fit the requirements on the breif, they are subject to change of course.

* **`CoursesModule`**
    * Manages the **6-week Blocks** (e.g. "Tuesday 6pm").
    * Handles the logic for strictly typed levels (Beginner vs. Intermediate).
* **`BookingsModule`**
    * Handles the **Priority Booking** window (checking if a user is an existing member).
    * Manages the sliding scale pricing (1 session vs. 2 sessions).
* **`InstructorsModule`**
    * Allows instructors to view their specific class rosters.
    * Handles **Progression Tracking** (moving a swimmer from 'Beginner' to 'Intermediate').
* **`AuthModule`**
    * Securely handles logins for the three distinct roles: Personal, Instructors, and Admins.

---

### Security & Access Control
We use "Guards" to protect data based on the user's role:

* **Public Access:** Anyone can view the **About Us** page or the **Class Schedule**.
* **Personal Access:** Only logged-in People can **Book a Session** or **View their Progress**.
* **Instructor Access:** Only Instructors can **View Rosters** or **Edit Swimmer Levels** (they cannot change pricing).
* **Admin Access:** Only Admins can **Create New Blocks** or **Cancel Classes**.

### Design Decision: Why NestJS over Spring Boot?

While Spring Boot (Java) is a standard for enterprise backends, we selected **NestJS (Probably in TypeScript)** for this project.

- *1. Architectural Parity*

The project brief requires a "scalable system architecture" and "competence in full-stack development". NestJS is heavily inspired by Spring Boot. It enforces the exact same **Dependency Injection**, **Module-based structure**, and **Decorator patterns** that make Spring Boot robust.
* *Result:* We achieve the same enterprise-grade structure required for the assignment, but in a modern Technology, That is super popular at the moment. (I also really didn't want to use java)

- *2. Unified Language (TypeScript)*

Our frontend is built in **React**, which uses JavaScript/TypeScript.
* **With Spring Boot:** We would need to context-switch between Java (Backend) and TypeScript (Frontend). We would also have to manually duplicate data models (e.g., creating a `User` class in Java and a `User` interface in TypeScript).
* **With NestJS:** We use **TypeScript Or Javascript** across the entire stack. We can share "Type Interfaces" between backend and frontend.
* *Benefit:* This significantly reduces bugs where the backend sends data the frontend doesn't expect, speeding up development.

- *3. Rapid Development of RESTful Features*
NestJS is built specifically for RESTful architectures. Its ecosystem (Passport for Auth, TypeORM for Database) allows us to implement complex requirements like **Role-Based Access Control (RBAC)** and **Webhooks** more efficiently than the verbose configuration often required in Java/Spring.

## 4. Frontend Architecture (React)

N/A

## 5. Key Workflows

N/A



