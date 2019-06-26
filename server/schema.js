const { makeExecutableSchema } = require('graphql-tools');

const POSTS = [
  {
      title: "My post",
      description: 'Lorem impum',
      favorite: false,
  },
  {
      title: "My post 2",
      description: 'Lorem impum',
      favorite: false,
  },
  {
      title: "My post 3",
      description: 'Lorem impum',
      favorite: false,
  },
  {
      title: "My post 4",
      description: 'Lorem impum',
      favorite: false,
  },
  {
      title: "My post 5",
      description: 'Lorem impum',
      favorite: false,
  },
  {
      title: "My post 6",
      description: 'Lorem impum',
      favorite: false,
  }
]

const schema = makeExecutableSchema({
  typeDefs: `
    type Post {
      id: Int
      title: String
    }

    type User {
      id: Int
      name: String!
      lastname: String
      email: String!
    }
 
    type Query {
      posts: [Post]
      users: [User]!
    }
  `,
  resolvers: {
    Query: {
      users: () => [
        {
          name: 'Cesar',
          email: 'mono@zemoga.com',
        },
        {
          name: 'Mono',
          email: 'cesar@zemoga.com',
        },
        {
          name: 'Leonardo',
          email: 'guerrero@zemoga.com',
        },
      ],
      posts: () => POSTS
    },
  },
});

module.exports = schema;
