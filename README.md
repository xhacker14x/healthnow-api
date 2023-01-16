# HOW TO LAUNCH

###

1. Clone the git repository <br />
   - git clone https://github.com/xhacker14x/healthnow-calculator.git

2. Open CMD and go to the directory, and install all dependencies using the command below: <br />
   - npm i

3. Install XAMPP and Run it <br />

4. Create Database called "test" inside phpmyadmin <br />
   
   NOTE: 
   Don't put password for root user. See below for ref: <br />

   DB Host   = localhost <br />
   Username  = root <br /> 
   Password  =  <br />
   DB Name   = test   <br />
     	
5. Create Database Table using the command below: <br />
   - npm run createtbl

6. Populate data using the command below: <br />
   - npm run seed

7. Launch the app <br />
   - npm run dev


## HOW TO TEST THE API
NOTE: 
Use postman or any other api tools for testing


===Add New User===  <br />

Endpoint url = localhost:5000/users/create <br />
Method = POST <br />

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


===Edit User===  <br />

Endpoint url = localhost:5000/users/update/{id} <br />
Method = PATCH <br />

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


===Delete User===  <br />

Endpoint url = localhost:5000/users/delete/{id} <br />
Method = DELETE <br />


===Delete Multiple Users=== 

Endpoint url = localhost:5000/users/delete/ids <br />
Method = POST <br />

Body Json:

{
    "ids": [1,2,3]
} <br />
<br />
NOTE:
Make sure the ids you pass are existing


===View All Users=== 

Endpoint url = localhost:5000/users <br />
Method = GET



