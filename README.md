# cs-frontend

Frontend project.

Requirements:
- Node Version 12 or greater
- NPM


## Running Locally

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Env Setup

Run the following command:

```bash
cp .env.example.env
```

Add a new .env entry for API_URL, this should ve the url where the `cs-backend` code is running.

Example:
```env
API_URL=localhost:8000
```