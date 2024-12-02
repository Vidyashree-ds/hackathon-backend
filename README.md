Healthcare Patient Portal

**Please review the google sheet (fullstack_squad_2) for our teams contribution, sprint details, architectural diagram, database schemas and individual contribution.**

Develop full stack solution for a health care patient portal that seamlessly integrates frontend and backend technologies.

Tech stack:

Front-end: React.js, HTML, CSS
Backend: Node.js, Express.js
Dababase:MongoDB cloud (use cloud.mongodb.com) 

Key features
1. secure authentication system
- Implement login and registration for patients and healthcare providers.
-  JWT based session management with appropriate expiration.
- password hashing and security measures

2. Personalized patient dashboard
- display upcoming appointments and basic health reminders.
- show a 'Health tip of the day' personalized by patient age group.

3. Profile Management
- allow patients to view and edit their profile information
- include fields for basic health information, (eg: allergies, current medication)

4. Healthcare provider view
- simple dashboard showing a list of patients (use mock data)
- ability to view (but not edit) patients profile

5. public health information page
- static page with general health information and privacy policy

6. Basic appointment booking system:
- allow patients to request appointments (store in database, no real-time scheduling required)

7. privacy and security measures:
- implement logging for user actions related to data access
- add a consent checkbox for data usage during registration.

Architecture:
- design a scalable architecture separating frontend, backend and data layers
- implement proper error handling and logging
- ensure secure dataflow between frontend and backend
- set up mongodb cloud database
- configure environment variables for sensitive information
- implement basic HIPAA compliance measures (eg data encryption, access controls)

MVP deliverables:
1. functional authentication system for patients and providers
2. personalized patient dashboard
3. profile management for patients
4. simple healthcare provider view
5. public health information page
6. basic appointment request feature
7. deployed frontend backend applications
8. functional CI/CD pipelines with basic automated tests.
