import { MdSchool } from "react-icons/md"

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
        {
            title: 'Type', 
            name: 'resourceType',
            description: 'The type of resource this is',
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
        title: 'resourceTitle',
        subtitle: 'resourceType',
      }
    }
}
  