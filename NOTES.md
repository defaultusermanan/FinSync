# graphql package =>
- It is the core GraphQL implementation in **JavaScript**
- It provides the functionality to define GraphQL shcemas, aprse and validate GraphQL queries, execute queries against a schema, and format responses.
- GraohQL is not tied to any specific server or client framework; it's a standalone library that can be used in various JavScript enviroments.

#  @apollo/server =>
- This package is part of the Apollo ecosystem and is used for building GraphQL servers in Node.js.
- It provides tools and utilities to create and manage GraphQL shcemas, handle incoming GraphQL requests, execute, queries and send responses.
- @apollo/server is built on top of the popular express framework, making it easy to integrate GraphQL into existing Node.js web applications.
- Overall, @apollo/server simplifies the process of creating and manitaining GraphQL servers in Node.js enviroments.

# What is GraphQL schema?
- A GraphQL schema is a fundamental concept in GraphQL
- It defines the structure of the data that clients can query and the operations they can perform. A schema in GraphQL typically consists of two main parts: typeDefs and resolvers.

# What is typeDefs? (or Type Definitions)
- Type Definitins define the shape of the data available in the GraphQL API. They specify the types of objects that can be queried and the relationships between them.

# What are Resolvers?
- Resolvers are functions that determine how to fetch the data and associated with each field in the schema.
- They are responsible for resolving the queries and mutations defined in the type definitions and returning the requested data.

# What is Serialization?
- It is the process of converting the user objects into a format that can be stored and retrieved easily.

# Authentication
- We will be using passportjs for the authentication of the users.
- First with the help of local auth strategy we will be either logging in or registering a user after that we will serialize the user object so that it can be stored as session (userId) in the database then it will be then used as (connet.sid) sid ie session id for next time logging in(verification).

- We will be using local storage for authetication and it will be Http only which makes it more secure and it cannot be accessed by javaScript inorder to get the details   


# "connect-mongodb-session": "^5.0.0",
- This will allow us to store the sessions created of the user object for authentication.

# "passport": "^0.7.0", "graphql-passport": "^0.6.8",
- This the the main authetication library/ package that will be used. Since passport alone itself just provides compatibilty with restapi and since we are using graphql api we will be using graphql-passport which will make it compatible to work passport authetication with graphql.

# What is "context"?
- Context is basically an object that is shared across all the resolvers   

# What does this do "{authUser && <Header/>}"?
- Wrapping the header component in authUser gives it the condition that that component can only be seen when user has logged in or else they might not be able to see.

# Why we use "...inputs"?
- In the transaction typeDef we have created input for createTransaction and UpdateTransaction and inside that we have defined numerours variable like id, usernmae etc so if we want to call all those variables with their id then we will use ...inputs which will call them altogether like we will not have to call them seperately . It is just a way to write neat and clean code.

# What have we done here const categoryColorMap = {
	saving: "from-green-700 to-green-400",
	expense: "from-pink-800 to-pink-600",
	investment: "from-blue-700 to-blue-400",
	// Add more categories and corresponding color classes as needed
};

const Card = ({ cardType }) => {
	const cardClass = categoryColorMap[cardType];}?

- What have we done is we have created a const function which saves the gradient for each category like saving, expense and investment. 
amd then the const Card will be calling the cardType and then const cardClass will basically map the color ie the categorColorMap to the cardType selected.
The traditional method to do all this will be
just one function
const Card = ({cardType}) => {
    if (cardType==="savings"){
        cardClass = "from-green-700 to-green-400";
        }else if(cardType ==="expense"){
        cardClass = "from-pink-800 to-pink-600";
    } 
    else if(cardType === "investment"){
        cardClass = "from-pink-800 to-pink-600";
    }
    }