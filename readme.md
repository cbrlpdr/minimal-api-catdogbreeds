# 🐱🐶 Minimal API - CatDogBreeds

A simple **Fastify**-based minimal API that provides information about cat breeds and dog breeds.
This project is ideal for learning how to build lightweight REST APIs with TypeScript and Fastify.

---

## 🚀 Features

* **CORS enabled** (open to all origins).
* **GET routes** for listing all cats or dogs.
* **Parameterized routes** for fetching a specific cat or dog by `id`.
* **Static repositories** with example cat and dog data.

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/minimal-api-catdogbreeds.git
cd minimal-api-catdogbreeds
npm install
```

---

## ▶️ Running the API

Start the development server:

```bash
tsx --env-file=.env src/server.ts
```

By default, the server runs at:

```
http://localhost:3333
```

---

## 📚 API Endpoints

### 🐱 Cats

* **GET** `/cats`
  Returns a list of all cat breeds.

  **Example Response:**

  ```json
  [
    {
      "id": 1,
      "name": "Orange Tabby",
      "countryOfOrigin": "Worldwide"
    },
    {
      "id": 2,
      "name": "Persian",
      "countryOfOrigin": "Iran"
    }
  ]
  ```

* **GET** `/cats/:id`
  Returns details of a specific cat by its `id`.

  **Example Response (id=3):**

  ```json
  {
    "cat": {
      "id": 3,
      "name": "Siamese",
      "countryOfOrigin": "Thailand"
    }
  }
  ```

---

### 🐶 Dogs

* **GET** `/dogs`
  Returns a list of all dog breeds.

  **Example Response:**

  ```json
  [
    {
      "id": 1,
      "breed": "Labrador Retriever",
      "countryOfOrigin": "Canada",
      "size": "Large",
      "group": "Sporting",
      "lifeExpectancy": "10-12 years"
    },
    {
      "id": 2,
      "breed": "German Shepherd",
      "countryOfOrigin": "Germany",
      "size": "Large",
      "group": "Herding",
      "lifeExpectancy": "9-13 years"
    }
  ]
  ```

* **GET** `/dogs/:id`
  Returns details of a specific dog by its `id`.

  **Example Response (id=9):**

  ```json
  {
    "dog": {
      "id": 9,
      "breed": "Chihuahua",
      "countryOfOrigin": "Mexico",
      "size": "Small",
      "group": "Toy",
      "lifeExpectancy": "14-17 years"
    }
  }
  ```

---

## 🛠️ Tech Stack

* [Fastify](https://fastify.dev/) – Fast and low-overhead web framework.
* [TypeScript](https://www.typescriptlang.org/) – Type safety and better DX.
* [@fastify/cors](https://github.com/fastify/fastify-cors) – Enable cross-origin requests.