# Menyokard - The Idea V1 (MVP)
*One-stop platform for café management*

## Overview

**Brief Description:**  
Menyokard is an application designed to solve the common issue where customers frequently need to visit the counter or call waiters for service. The application provides a web interface and a Telegram bot to cafés, allowing customers to simply scan QR codes on their tables to easily order items. The app also includes a minimal billing module to streamline the payment process.

**Target Audience:**  
The target audience comprises local cafés that need a billing system and want to address the issue of inefficient customer service.

**Unique Selling Proposition (USP):**  
Unlike other billing software, Menyokard allows café owners to manage orders in real time without physically visiting each table. The app introduces a "session" concept for each table, where a session starts when a customer occupies a seat and corresponds to a single bill.

## Features

**Core Features (MVP Stage):**

1. **Menu Customization:**  
   Café owners can easily update their menu in real time, including special offers, seasonal items, and availability status.

2. **Table Reservation System:**  
   Customers can reserve tables in advance through the app, reducing wait times and improving the overall customer experience.

3. **Analytics Dashboard:**  
   Provides insights into sales trends, popular menu items, customer behavior, and feedback to help café owners make data-driven decisions.

4. **QR Code Generation and Management:**  
   Café owners can generate and manage QR codes for tables, linking them to the correct session and menu.

5. **Order Customization:**  
   Allows customers to customize their orders (e.g., add or remove ingredients, choose portion sizes) directly through the app.

6. **Import / Export Functionality:**  
   Café owners can export sales data and import existing data. They can also import their menu directly into the application for easy setup.

## Technical Specifications

**Platform(s):**  
Initially, the application will be available on the web platform only.

**Tech Stack:**

- **Django Framework | REST API**  
- **Next.js | Website**  
- **Next.js | Web Application**  
- **PostgreSQL | Database**

**Architecture:**  
Client-Server Model (Monolithic in the MVP stage).

**Integration:**  
No third-party integrations initially.

## User Flow

(TODO: Add User flow diagrams for both customers and café owners.)

## Monetization Strategy

**Revenue Model:**  
The application will be free for the first 6 months. After that, café owners will need to pay a fee based on the features they want to use.

**Pricing:**  
There will be a fixed price for each feature within the application.

## Marketing Strategy

**Launch Plan:**  
Initially, the application will be free for a select group of cafés during the Beta Stage. Afterward, a broader launch will be planned using industry connections.

**Target Channels:**  
The marketing strategy will include cold emails, cold calls, and data gathering from Google Maps to reach out to more cafés.

## Development Timeline

1. **Phase 1:**  
   - **Duration:** 2 months  
   - **Milestones:** Finalize MVP feature set, complete UI/UX design, and begin development.

2. **Phase 2:**  
   - **Duration:** 3 months  
   - **Milestones:** Complete development of core features, conduct internal testing, and deploy the application to a staging environment.

3. **Phase 3:**  
   - **Duration:** 1 month  
   - **Milestones:** Conduct Beta testing with selected cafés, gather feedback, and make necessary adjustments.

4. **Phase 4:**  
   - **Duration:** 2 months  
   - **Milestones:** Finalize product, launch marketing campaigns, and go live with the application.

## Team and Roles

- **Project Manager:** Oversees the project timeline and ensures milestones are met.
- **Backend Developer:** Develops the server-side application using Django and PostgreSQL.
- **Frontend Developer:** Implements the web interface using Next.js.
- **UI/UX Designer:** Designs the user interface and experience for both café owners and customers.
- **Quality Assurance:** Conducts testing to ensure the application is bug-free and user-friendly.

## Budget

- **Development Costs:**  
   *Estimate based on team size and hourly rates.*

- **Marketing Costs:**  
   *Include costs for email campaigns, cold calls, and potential ads.*

- **Operational Costs:**  
   *Hosting, domain, and any other recurring expenses.*

- **Contingency:**  
   *Allocate a portion of the budget for unforeseen expenses.*

## Risks and Challenges

1. **Market Adoption:**  
   - **Risk:** Cafés may be hesitant to adopt new technology.
   - **Mitigation:** Offer an extended free trial and provide training to ease the transition.

2. **Technical Issues:**  
   - **Risk:** Bugs or system downtime could impact user experience.
   - **Mitigation:** Implement thorough testing and have a robust support system in place.

3. **Competition:**  
   - **Risk:** Competing products may offer similar features.
   - **Mitigation:** Focus on the unique aspects of Menyokard and continue to innovate based on user feedback.

## Future Roadmap

1. **Post-MVP Development:**  
   - Add features like inventory management, staff management, and multi-branch support.

2. **Expand Platform Availability:**  
   - Develop native mobile applications for iOS and Android.

3. **Explore Partnerships:**  
   - Collaborate with POS providers, payment gateways, and other relevant services.

4. **International Expansion:**  
   - Translate the application into multiple languages and explore markets outside the initial launch region.
