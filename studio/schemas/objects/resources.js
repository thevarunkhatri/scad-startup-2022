export default {
    name: 'resources',
    title: 'Resources',
    type: 'object',
    options: {
      hotspot: true
    },
    fields: [
        {
            name: 'resourceTitle',
            type: 'string',
            title: 'Resource Title',
            validation: Rule => Rule.required(),
        },
        {
            name: 'resourceLink',
            type: 'url',
            title: 'Resource Link',
            validation: Rule => Rule.required(),
        },
    ],
    preview: {
      select: {
        
      }
    }
}
  