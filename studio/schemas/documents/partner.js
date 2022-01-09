import { MdGroups } from "react-icons/md";

export default {
    name: 'partner',
    title: 'Partner',
    type: 'document',


    options: {
      hotspot: true
    },
    icon: MdGroups,
    fields: [
        {
            name: 'partnerIcon',
            type: 'image',
            title: 'Partner Icon',
        },
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
            initialValue: 'club',
            options: {
                list: [
                    {title: 'Club', value: 'club'},
                    {title: 'Major', value: 'major'},
                    {title: 'Partner', value: 'partner'}
                ]
            }
        }
    ]
}
  