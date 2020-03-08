const peopleByLatLong = (latitude, longitude) => `
  {
    people(first:100, latitude:${latitude}, longitude:${longitude}) {
     edges {
      node {
        id
        name
        currentMemberships {
          id
          organization {
            id
            name
            classification
            parent {
              id
              name
              classification
            }
          }
          post {
            id
          }
          role
        }
        contactDetails {
          type
          value
          note
        }
      }
    }
    }
  }
`;

module.exports = { peopleByLatLong };