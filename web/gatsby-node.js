exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    const result = await graphql(`
      {
        allSanitySessions {
          edges {
            node {
              name
              slug {
                _key
                _type
                current
              }
            }
          }
        }
      }
    `)
  
    if (result.errors) {
      throw result.errors
    }
  
    const sessions = result.data.allSanitySessions.edges || []
  
  
    sessions.forEach((edge, index) => {
      const slug = edge.node.slug.current
      const path = `/sessions/${edge.node.slug.current}`
  
      createPage({
        path,
        component: require.resolve("./src/templates/sessionsTemplate.js"),
        context: { slug }
      })
    })
}