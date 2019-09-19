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
                  buildHookId: '5d838379498d66253f2988c4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-swunkwru',
                  apiId: '9d8a75c9-5ff9-4527-8508-3b3a6de6ef1f'
                },
                {
                  buildHookId: '5d83837984c8d6dbc64454c0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-42jdnkmp',
                  apiId: 'dc0a22fe-cf31-4491-b9a8-ff77cecce130'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chartie4r/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-42jdnkmp.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
