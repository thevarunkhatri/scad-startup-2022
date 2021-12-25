export default {
    name: 'hosts',
    title: 'Session Hosts',
    type: 'document',
    options: {
      hotspot: true
    },
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Host Name',
            validation: Rule => Rule.required(),
        },
        {
            name: 'portfolioLink',
            type: 'url',
            title: 'Portfolio Link'
        },
        {
            name: 'club',
            type: 'reference',
            title: 'Club',
            to: [{type: 'club'}]
        },
    ]
}
  