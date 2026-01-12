# Shirley's Travel Journal (React Refactor)

This project is a modern, component-based React application designed to showcase travel stories, photography, and destination guides. It serves as a comprehensive refactor of a static HTML/CSS website, migrating the codebase to a dynamic Single Page Application (SPA) architecture using React and Vite.

## Project Background & Migration

This application is a complete rewrite of an original static website. The goal of this refactor was to improve maintainability, performance, and scalability by moving away from hardcoded HTML to reusable React components.

*   **Original Repository:** [https://github.com/Heycoming/ShirleyTravelJournal](https://github.com/Heycoming/ShirleyTravelJournal)
*   **Current Stack:** React, Vite, React Router DOM.

### Key Improvements in this Version

1.  **Component-Based Architecture:**
    *   Converted repetitive HTML sections (such as gallery cards and navigation menus) into reusable components like `GalleryCard`, `HeroSlider`, `DesktopNav`, and `MobileNav`.
    *   Implemented `DaysGallery` to handle day-by-day itinerary rendering efficiently.

2.  **Centralized Data Management:**
    *   Extracted static content (menus, slider images, destination details, and blog content) out of the view layer and into structured data files (e.g., `src/data/destinations.js`).
    *   This allows for updating content (like adding a new destination) by modifying a single array instead of editing complex HTML structures.

3.  **Dynamic Routing & Navigation:**
    *   Implemented `react-router-dom` for seamless client-side routing.
    *   Created a responsive navigation system that shares data between desktop and mobile views but renders optimized layouts for each.

## Development & Deployment

### Local Development

To run this project locally for development purposes:

1.  **Clone the repository**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```

### Automated Deployment

This project utilizes **GitHub Actions** for Continuous Deployment. Manual building is not required for production releases.

*   **Workflow:** The `deploy.yml` configuration file automatically triggers the build and deployment process.
*   **Trigger:** Pushing changes to the main branch will automatically build the React application using Vite and deploy the static assets to the hosting environment.

---

## React + Vite Configuration

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

*   @vitejs/plugin-react uses Babel (or oxc when used in rolldown-vite) for Fast Refresh
*   @vitejs/plugin-react-swc uses SWC for Fast Refresh

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see this documentation.

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the TS template for information on how to integrate TypeScript and typescript-eslint in your project.