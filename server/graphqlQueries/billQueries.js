const ColoradoBillsByYearQuery = (year) => `
    {
      bills(first:100, jurisdiction:"Colorado", session:"${year}A") {
        edges {
          node {
            actions {
              description
              date
              order
              extras
            }
            id
            identifier
            title
            subject
            sponsorships {
              name
              entityType
              primary
              classification
            }
            abstracts {
              abstract
              note
              date
            }
            documents {
              note
              date
            }
            versions {
              note
              date
            }
            votes {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
        totalCount
      } 
    }
  `;

module.exports = { ColoradoBillsByYearQuery };