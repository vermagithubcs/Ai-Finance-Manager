## Run Server: 
    `npm run dev`

## API Endpoints:

### User Endpoints:

1. **Create User**
    - **URL:** `http://localhost:3000/api/register`
    - **Method:** `POST`
    - **Sample Request Body:**
    ```json
    {
        "name": "Joen Sam",
        "email": "joen@123.com",
        "password": "joen123",
        "profilePic": "frontend part here"
    }
    ```
    - **Description:** User created and automatically transactions, budgets, expenses, goals are set.

2. **Update User**
    - **URL:** `http://localhost:3000/api/update/:id`
    - **Method:** `PUT`
    - **Sample Request Body:**
    ```json
    {
        "name": "Jon Sam",
        "password": "Jon123",
        "profilePic": "Frontend Part"
    }
    ```
    - **Description:** Users cannot update their email for security reasons.

3. **Logout User**
    - **URL:** `http://localhost:3000/api/logout/:id`
    - **Method:** `GET`
    - **Description:** Simply pass the user ID in the URL, and the user gets logged out.

4. **Login User**
    - **URL:** `http://localhost:3000/api/login`
    - **Method:** `POST`
    - **Sample Request Body:**
    ```json
    {
        "email": "joen@123.com",
        "password": "Jon123"
    }
    ```
    - **Description:** User gets logged in with a new token.

5. **Delete User**
    - **URL:** `http://localhost:3000/api/delete/:id`
    - **Method:** `DELETE`
    - **Description:** Simply pass the user ID in the URL, and the user gets deleted permanently from the database.

---

### Transaction Endpoints:

1. **Add Transaction**
    - **URL:** `http://localhost:3000/api/transactions`
    - **Method:** `POST`
    - **Sample Request Body:**
    ```json
    {
        "userId": "(Paste user ID)",
        "amount": 9000,
        "category": "Cash",
        "description": "Order of 5 days in Cash"
    }
    ```
    - **Description:** Automatically sets the date for the transaction.

2. **Delete Transaction**
    - **URL:** `http://localhost:3000/api/transactions/:id`
    - **Method:** `DELETE`
    - **Description:** Requires the transaction ID. Deletes it permanently from the database.

3. **List Transactions**
    - **URL:** `http://localhost:3000/api/transactions/:userId`
    - **Method:** `GET`
    - **Description:** Lists all transactions for a specific user.

---

### Budget Endpoints:

1. **Create Budget**
    - **URL:** `http://localhost:3000/api/budget/create`
    - **Method:** `POST`
    - **Sample Request Body:**
    ```json
    {
        "userId": "user-id-here",
        "category": "Food",
        "amount": 5000
    }
    ```
    - **Description:** Allows a user to create a budget for a specific category.

2. **Get All Budgets**
    - **URL:** `http://localhost:3000/api/budget/:userId`
    - **Method:** `GET`
    - **Description:** Retrieves all budgets created by the user.

3. **Update Budget**
    - **URL:** `http://localhost:3000/api/budget/update/:id`
    - **Method:** `PUT`
    - **Sample Request Body:**
    ```json
    {
        "category": "Travel",
        "amount": 8000
    }
    ```
    - **Description:** Updates an existing budget. The budget ID must be provided as a parameter.

4. **Delete Budget**
    - **URL:** `http://localhost:3000/api/budget/delete/:id`
    - **Method:** `DELETE`
    - **Description:** Deletes a budget by its ID.

---

### Income Endpoints:

1. **Add Income**
    - **URL:** `http://localhost:3000/api/income/add`
    - **Method:** `POST`
    - **Sample Request Body:**
    ```json
    {
        "userId": "your-user-id",
        "amount": 5000,
        "source": "Salary",
        "date": "2024-10-01"
    }
    ```
    - **Description:** Adds a new income entry for the user.

2. **Get Income**
    - **URL:** `http://localhost:3000/api/income/:userId`
    - **Method:** `GET`
    - **Description:** Fetches all income entries for a specific user.

3. **Update Income**
    - **URL:** `http://localhost:3000/api/income/update/:incomeId`
    - **Method:** `PUT`
    - **Sample Request Body:**
    ```json
    {
        "amount": 6000,
        "source": "Freelance Work"
    }
    ```
    - **Description:** Updates an existing income entry by its ID.

4. **Delete Income**
    - **URL:** `http://localhost:3000/api/income/delete/:incomeId`
    - **Method:** `DELETE`
    - **Description:** Deletes a specific income entry.
