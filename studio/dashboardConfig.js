export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ea86ebbe2243a018f423133',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5qf3a2gp',
                  apiId: '85a7d71b-5fa7-490e-9797-f47b9a25fe44'
                },
                {
                  buildHookId: '5ea86ebbe7bf1f0213077053',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vogpzpda',
                  apiId: '0e803f90-fc5f-449c-9d6c-cbfc450f2e09'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Darth-Knoppix/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vogpzpda.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
