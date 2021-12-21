export default {
    name: 'demoFiles',
    title: 'Demo Files',
    type: 'object',
    options: {
      hotspot: true
    },
    fields: [
        {
            name: 'fileTitle',
            type: 'string',
            title: 'File Title',
            validation: Rule => Rule.required(),
        },
        {
            name: 'fileLink',
            type: 'url',
            title: 'File Link',
            validation: Rule => Rule.required(),
        },
    ],
    preview: {
      select: {
        
      }
    }
}
  