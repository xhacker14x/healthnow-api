# HOW TO LAUNCH

###

1. Clone the git repository
   - git clone https://github.com/xhacker14x/healthnow-calculator.git

2. Open CMD and go to the directory, and install all dependencies using the command below:
   - npm i

3. Install XAMPP and Run it

4. Create Database called "test" inside phpmyadmin
   
   NOTE: 
   Don't put password for root user. See below for ref:

   DB Host   = localhost
   Username  = root
   Password  =
   DB Name   = test   
     	
5. Create Database Table using the command below:
   - npm run createtbl

6. Populate data using the command below:
   - npm run seed

7. Launch the app
   - npm run dev


## HOW TO TEST THE API
NOTE: 
Use postman or any other api tools for testing


===Add New User=== 

Endpoint url = localhost:5000/users/create
Method = POST

Body Json:

{
    "firstname": "Omar",
    "lastname": "Danga",
    "address": "Philippines",
    "postcode": "1870",
    "contact_phone_number": "626-604-7966",
    "email": "omardanga@yahoo.com",
    "username": "omar",
    "password": "KPaL48%PS4mS"
}


===Edit User=== 

Endpoint url = localhost:5000/users/update/{id}
Method = PATCH

Body Json:

{
    "firstname": "Update Firstname",
    "lastname": "Update Lastname",
    "address": "Philippines",
    "postcode": "1870",
    "contact_phone_number": "626-604-7966",
    "email": "omardanga@yahoo.com",
    "username": "omar",
    "password": "KPaL48%PS4mS"
}


===Delete User=== 

Endpoint url = localhost:5000/users/delete/{id}
Method = DELETE


===Delete Multiple Users=== 

Endpoint url = localhost:5000/users/delete/ids
Method = POST

Body Json:

{
    "ids": [1,2,3]
}

NOTE:
Make sure the ids you pass are existing


===View All Users=== 

Endpoint url = localhost:5000/users
Method = GET



