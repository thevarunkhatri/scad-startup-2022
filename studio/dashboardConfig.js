export default {
  widgets: [
    {name: 'structure-menu'},
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: []},
      layout: {width: 'medium'}
    },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiId: '072290be-1b42-4fb2-a03b-f46116b116e2',
            buildHookId: '61c6448ebdfb5196bc6fbbab',
            name: 'scad-startup-2022-studio',
          },
          {
            title: 'Website',
            apiId: '9b8f39ab-6acb-4a5f-b65a-fd0625cff1d4',
            buildHookId: '61fd400d1771a11ef44b1a10',
            name: 'scad-startup-2022-web'
          }
        ]
      }
    }
  ]
}
