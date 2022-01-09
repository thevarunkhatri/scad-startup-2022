import { MdAssignmentInd } from "react-icons/md";


export default {
    name: 'hosts',
    title: 'Session Hosts',
    type: 'document',
    options: {
      hotspot: true
    },
    icon: MdAssignmentInd,
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Host Name',
            validation: Rule => Rule.required(),
        },
        {
            name: 'linkedIn',
            type: 'url',
            title: 'LinkedIn Page'
        },
        {
            name: 'partner',
            type: 'reference',
            title: 'Partner',
            to: [{type: 'partner'}]
        },

        {
            name: 'contact',
            type: 'string',
            title: 'Contact Method'
        },

        {
            name: 'headshot',
            type: 'image',
            title: 'Headshot',
            description: 'A nice image of the host',
        }
    ]
}
  