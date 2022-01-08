export default {
    name: 'partner',
    title: 'Partner',
    type: 'document',
    options: {
      hotspot: true
    },
    fields: [
        {
            name: 'partnerName',
            type: 'string',
            title: 'Partner Name',
            validation: Rule => Rule.required(),
        },
        {
            name: 'partnerLink',
            type: 'url',
            title: 'Partner Site/Social'
        },
        {
            name: 'partnerType',
            type: 'string',
            options: {
                list: [
                    {title: 'Basics', value: 'basics'},
                    {title: 'Visual', value: 'visual'},
                    {title: 'Physical', value: 'physical'}
                ]
            }
        }
    ]
}
  