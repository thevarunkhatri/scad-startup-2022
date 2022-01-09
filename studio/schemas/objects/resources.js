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
        {title: 'Type', 
        name: 'resourceType',
        description: 'The type of resource this is',
        type: 'string',
                options: {
                    list: [
                        {title: 'Image', value: 'image'},
                        {title: 'Website', value: 'website'},
                        {title: 'Article', value: 'article'},
                        {title: 'Course', value: 'course'},
                        {title: 'Video', value: 'video'},
                        {title: 'Recording', value: 'recording'},
                        {title: 'Project Folder', value: 'folder'},
                    ]
                }        
      },
    ],
    preview: {
      select: {
        
      }
    }
}
  