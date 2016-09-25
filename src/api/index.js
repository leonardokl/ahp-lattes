export const fetchCriteria = () =>
    Promise.resolve([
      /*{
        id: 1,
        name: 'Formação acadêmica',
        type: 'select'
      },*/
      {
        id: 2,
        name: 'Projetos de pesquisa',
        type: 'number'
      },
      {
        id: 3,
        name: 'Artigos completos publicados em periódicos',
        type: 'number'
      },
      /*{
        id: 4,
        name: 'Livros publicados ou edições',
        type: 'number'
      },
      {
        id: 5,
        name: 'Trabalhos completos publicados em anais de congressos',
        type: 'number'
      },
      {
        id: 6,
        name: 'Participação em eventos, congressos, exposições e feiras',
        type: 'number'
      },*/
      {
        id: 7,
        name: 'Organização de eventos, congressos, exposições e feiras',
        type: 'number'
      },
    ])
