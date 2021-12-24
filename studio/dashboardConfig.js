export default {
  widgets: [
    {name: 'structure-menu'},
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: []},
      layout: {width: 'medium'}
    }
  ]
}
