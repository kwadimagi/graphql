import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Listing {
    id: ID!
    title: String!
    image: String!
    address: String!
    price: Int!
    numOfGuests: Int!
    numOfBeds: Int!
    rating: Float!
  }

  type Query {
    brown: [Listing]!
  }

  type Mutation {
    deleteListing(id: ID!): Listing!
  }
`;
