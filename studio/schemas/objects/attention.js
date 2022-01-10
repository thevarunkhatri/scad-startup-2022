export default {
    name: 'attention',
    title: 'Attention',
    type: 'object',
    options: {
      hotspot: true
    },
    fields: [
        {
            name: 'attentionTitle',
            type: 'string',
            title: 'Attention Title',
            validation: Rule => Rule.required(),
        },
        {
            name: 'attentionMessage',
            type: 'string',
            title: 'Attention Message',
            validation: Rule => Rule.required(),
        },
        {
            title: 'Type', 
            name: 'attentionType',
            description: 'The type of attention this is',
            type: 'string',
                options: {
                    list: [
                        {title: 'Supplies', value: 'supplies'},
                        {title: 'Preparation', value: 'prep'},
                        {title: 'Caution', value: 'caution'},
                        {title: 'Warning', value: 'warning'},
                    ]
                }        
        },
    ],
    preview: {
      select: {
        title: 'attentionTitle',
        subtitle: 'attentionType',
      }
    }
}
  