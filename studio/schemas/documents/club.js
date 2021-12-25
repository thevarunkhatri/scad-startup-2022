export default {
    name: 'club',
    title: 'Club',
    type: 'document',
    options: {
      hotspot: true
    },
    fields: [
        {
            name: 'clubName',
            type: 'string',
            title: 'Club Name',
            validation: Rule => Rule.required(),
        },
        {
            name: 'clubLink',
            type: 'url',
            title: 'Club Site/Social'
        },
    ]
}
  