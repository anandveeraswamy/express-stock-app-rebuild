# Express Stock Management Application

A foundational Express.js application for managing product inventory. This application serves as a base project for students to extend and enhance with additional features.

## Overview

This is a stock management system built with Node.js and Express that allows users to:
- View all products in inventory
- View detailed information about individual products
- Manage different product types (Electronics, Clothing)
- Interact with a SQLite database using Sequelize ORM

## Technology Stack

- **Backend**: Express.js
- **Database**: SQLite with Sequelize ORM
- **View Engine**: Pug
- **Testing**: Jest & Supertest

## Quick Start

### Prerequisites
- Node.js installed on your system

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the database:
   ```bash
   npm run database:prebuild
   ```

4. Start the application:
   ```bash
   npm start
   ```

5. Access the application at `http://localhost:3000`

## Available Scripts

- `npm start` - Run the application
- `npm run dev` - Run with nodemon for development
- `npm test` - Run tests
- `npm run database:prebuild` - Initialize the database with sample data

## Project Structure

- `app.js` - Main application entry point
- `config/` - Database configuration
- `controllers/` - Business logic
- `models/` - Sequelize models (Product, Electronic, Clothing)
- `routes/` - Express routes
- `views/` - Pug templates
- `tests/` - Jest test files
- `scripts/` - Database initialization scripts

## Development Guide

For detailed step-by-step instructions on how this application was developed, please refer to the [Development Guide](DEVELOPMENT_GUIDE.md).

## Extension Opportunities

This base application can be extended with features such as:
- Add/Edit/Delete product functionality
- User authentication and authorization (Optional)
- Search and filtering capabilities
- Advanced product categories
- Shopping cart functionality
- Extend the currency convertor to support more currencies

---

*This is a learning project designed for educational purposes.*
