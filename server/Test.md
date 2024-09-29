## Run Server: npm run dev

## Api Endpoints:


    # Create User
        http://localhost:3000/api/register

            #sampleData : AT Post
            {
                "name" : "Joen Sam",
                "email" : "joen@123.com",
                "password" : "joen123",
                "profilePic" : "frontend part here"
            }
            <!-- User Created and automatically transactions, budgets, expenses, goals are set-->

    # Update User
        http://localhost:3000/api/update/:id (paste user id here)

        #sampleUpdate : At Put
        {
            "name" : "Jon Sam",
            "password" : "Jon123",
            "profilePic": "Frontend Part"
        }
        <!-- user Cannot Update their Email for security reason -->

    # Logout user
        http://localhost:3000/api/logout/:id (paste user id here)

            <!-- We Simply need id on url user get logged out -->
    
    # Login User
        http://localhost:3000/api/login

        #sampleLogin : At Post
        {
            "email" : "joen@123.com",
            "password: "Jon123"
        }
        <!-- User get Logged in with new token -->

    # Delete User
        http://localhost:3000/api/delete/:id (paste user id here)

                <!-- We Simply need id on url user get Deleted Permarantly From Database-->


    <!-- User Tasks -->

    # Add Transaction
        http://localhost:3000/api/transactions

        #sampleTransaction : At Post
        {
            "userId" : "(Paste user Id)",
            "amount" : 9000,
            "category" : "Cash",
            "description" : "Order of 5 days in Cash"
        }

        <!-- Automaticly Date is passed  -->

    # Delete Transaction At Delete
        http://localhost:3000/api/transactions/:id

        <!-- We need only transaction id it will be deleted permarantly from database -->
    # List Transaction At Get
        http://localhost:3000/api/transactions/:userId

    
    

    