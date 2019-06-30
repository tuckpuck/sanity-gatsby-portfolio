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
                  buildHookId: '5d18c23be2c29e4b9d5ed6c4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-65aca89d',
                  apiId: 'a0d3fe7f-178f-4d99-a2f5-2f9aa6d37255'
                },
                {
                  buildHookId: '5d18c23ba8dbff2b9d3ece51',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bexo5qmi',
                  apiId: '709d4277-e0f6-4eaf-86a0-014ad3c2b0e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tuckpuck/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bexo5qmi.netlify.com',
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
