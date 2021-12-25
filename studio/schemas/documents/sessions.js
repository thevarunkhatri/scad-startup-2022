import { MdSchool } from "react-icons/md";

export default {
    name: 'sessions',
    title: 'Sessions',
    type: 'document',
    icon: MdSchool,
    fields: [
      {
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'excerpt',
        title: 'excerpt',
        description: 'A quick (elevator-pitch style) description of the product',
        type: 'string',
        validation: Rule => Rule.min(30).max(100)
      },
      {
        name: 'locationName',
        title: 'Location Name',
        type: 'string',
        validation: Rule => Rule.min(1).max(25)
      },
      {
        name: 'location',
        title: 'Location',
        type: 'geopoint'
      },
      {
        title: 'Zoom URL', 
        name: 'zoomURL',
        description: 'Link to the Zoom call for the session',
        type: 'url'
      },
      {
        title: 'Registration URL', 
        name: 'registrationURL',
        description: 'Link to registering for the Zoom session',
        type: 'url'
      },
      {
        title: 'Difficulty',
        name: 'difficulty',
        type: 'number',
        initialValue: 1,
        options: {
            list: [
                {value: 1, title: 'Beginner'},
                {value: 2, title: 'Novice'},
                {value: 3, title: 'Intermediate'},
                {value: 4, title: 'Advanced'},
                {value: 5, title: 'Expert'}
            ]
        },
        validation: Rule => Rule.required().min(1).max(5)
      },      
      {
        title: 'Date and Time', 
        name: 'sessionDateTime',
        description: '',
        type: 'datetime'
      },
      {
        title: 'Duration', 
        name: 'duration',
        description: 'Time in minutes',
        type: 'number',
        options: {
            list: [
                {value: 15, title: '15 mins'},
                {value: 30, title: '30 mins'},
                {value: 45, title: '45 mins'},
                {value: 60, title: '1 hour'},
                {value: 75, title: '1 hour 15 mins'},
                {value: 90, title: '1 hour 30 mins'},
                {value: 105, title: '1 hour 45 mins'},
                {value: 120, title: '2 hour'}
            ]
        },
        initialValue: 15,
        validation: Rule => Rule.required().min(15).max(120)
      },
      {
        title: 'Club Partner',
        name: 'clubPartner',
        type: 'reference',
        to: [{type: 'club'}]
      },
      {
        title: 'Host',
        name: 'host',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{type: 'hosts'}]
          }
        ]
      },
      {
        title: 'Topics/Category', 
        name: 'Topics',
        description: 'High-level overview of what the session will cover',
        type: 'array', 
        of: [{type: 'string'}]
      },
      {
        title: 'Flow', 
        name: 'Flow',
        description: 'In-depth overview of what the session will cover',
        type: 'array', 
        of: [{type: 'block'}]
      },
      // {
      //   title: 'Category', 
      //   name: 'categories',
      //   description: 'Add one or more categories',
      //   type: 'array', 
      //   of: [
      //       {
      //           type: 'string',
      //           options: {
      //               list: [
      //                   {title: 'Basics', value: 'basics'},
      //                   {title: 'Visual', value: 'visual'},
      //                   {title: 'Physical', value: 'physical'},
      //                   {title: 'Game', value: 'game'},
      //                   {title: 'Amp', value: 'amp'},
      //                   {title: 'One-Off', value: 'one-off'}
      //               ]
      //           }
      //       }
      //   ]
      // },
      {
        title: 'Video Embed URL', 
        name: 'videoURL',
        description: 'Vimeo URL to embed video',
        type: 'url'
      },
      {
        title: 'Resources', 
        name: 'resources',
        description: '',
        type: 'array', 
        of: [{type: 'resources'}]
      },
      {
        title: 'Demo Files', 
        name: 'demoFiles',
        description: '',
        type: 'array', 
        of: [{type: 'demoFiles'}]
      },
      {
        title: 'Prerequisites',
        name: 'prerequisites',
        type: 'reference',
        to: [{type: 'sessions'}]
      },
      {
        title: 'Related Sessions',
        name: 'relatedSession',
        type: 'reference',
        to: [{type: 'sessions'}]
      },
      {
        title: 'Slug',
        name: 'slug',
        description: 'The slug for your cite. Clicking generate once a project name has been given should work.',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
    ]
}
