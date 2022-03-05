const { gql } = require('apollo-server');

// backticks below are tag template strings
module.exports = gql`
    type Post{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
    type Query{
        getPosts: [Post]
    }
`;