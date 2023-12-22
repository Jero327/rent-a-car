# Rent A Car

This APP helps users rent car from business.

## Setup

### 0. Installation and migrations

- [ ] Clone this repo and `cd` into the new directory
- [ ] Install packages, run migrations and seeds, and start the dev server with `npm run dev`
  <details style="padding-left: 2em">
    <summary>Tip</summary>

  Commands:

  ```sh
  npm install
  npm run knex migrate:latest
  npm run knex seed:run
  npm run dev
  ```

  </details>

- [ ] Visit [http://localhost:5173](http://localhost:5173) in your browser

---

## Need to know

### Auth Requirements summary

#### **Client-side**

- Determine if the current user is logged in or not
- Allow the user to register
- Allow the user to sign in
- Send the access token with each request
- Allow the user to log off
- Hide/show components based on the user's auth status

#### **Server-side**

The following routes should accept only authenticated requests

- GET `/api/v1/models`
- DELETE `/api/v1/models/:modelId`
- POST `/api/v1/models`
- PUT `/api/v1/models/:modelId`
- GET `/api/v1/locations`
- DELETE `/api/v1/locations/:locationId`
- POST `/api/v1/locations`
- PUT `/api/v1/locations/:locationId`
- GET `/api/v1/carproducts`
- DELETE `/api/v1/carproducts/:carProductId`
- POST `/api/v1/carproducts`
- PUT `/api/v1/carproducts/:carProductId`
- GET `/api/v1/carproducts/:locationId/:start_date/:end_date`
- GET `/api/v1/rentals`
- POST `/api/v1/rentals`
- GET `/api/v1/isAdmin`
  <br />

#### .env

```
cp .env.example .env
```

### Tests

```
npm run test
```
