// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import siteSettings from './documents/siteSettings'
import sessions from './documents/sessions'
import club from './documents/club'
import hosts from './documents/hosts'
import partner from './documents/partner'

// Object types
import resources from './objects/resources'
import demoFiles from './objects/demoFiles'
import figure from './objects/figure' 


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    // Objects
    figure,
    resources,
    demoFiles,
    club,
    hosts,
    partner,
    // Documents
    siteSettings,
    sessions
  ])
})
