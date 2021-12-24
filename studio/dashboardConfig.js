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
            apiId: 'fd53a352-a85d-487d-858d-1e881f58df94',
            buildHookId: '61c6443eb5ffa3f45b5635a8',
            name: 'scad-startup-2022-web'
          }
        ]
      }
    }
  ]
}
