// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import siteSettings from './documents/siteSettings'
import sessions from './documents/sessions'

// Object types
import resources from './objects/resources'
import demoFiles from './objects/demoFiles'
import figure from './objects/figure' 

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    figure,
    resources,
    demoFiles,
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    sessions
  ])
})
