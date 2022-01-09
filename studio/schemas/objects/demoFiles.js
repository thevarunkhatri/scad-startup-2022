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
        {
          title: 'Type', 
          name: 'demoType',
          description: 'The type of demo file this is',
          type: 'string',
              options: {
                  list: [

                      {title: 'Recording', value: 'recording'},
                      {title: 'Project Folder', value: 'folder'},
                      {title: 'Website', value: 'website'},
                      {title: 'Document', value: 'document'},
                      {title: 'Article', value: 'article'},
                      {title: 'Course', value: 'course'},
                      {title: 'Image', value: 'image'},
                      {title: 'Video', value: 'video'},

                  ]
              }        
      },

    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'demoType'
      }
    }
}
  