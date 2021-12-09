export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61b23194197024d3aa62e914',
                  title: 'Sanity Studio',
                  name: 'scad-startup-2022-studio',
                  apiId: '633d9099-643f-4f8c-b418-bb6aa9d40746'
                },
                {
                  buildHookId: '61b231949d8b82a945fec3c3',
                  title: 'Portfolio Website',
                  name: 'scad-startup-2022',
                  apiId: '1c16ae06-b331-429c-a83c-28d6b3544710'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thevarunkhatri/scad-startup-2022',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://scad-startup-2022.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
