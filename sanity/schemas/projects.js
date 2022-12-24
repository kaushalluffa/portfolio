// schemas/pet.js
export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
        name: 'one_line',
        type: 'string',
        title: 'One Line',
    },
    {
        name: 'short_description',
        type: 'string',
        title: 'Short Description',
    },
    {
        name: 'description',
        type: 'string',
        title: 'Description',
    },
    {
        name: 'image',
        type: 'image',
        title: 'Project Image',
    },
    {
        name: 'github_url',
        type: 'url',
        title: 'Github URL',
        initialValue: 'https://github.com/kaushalluffa'
    },
    {
        name: 'demo',
        type: 'url',
        title: 'Demo URL',
        initialValue: 'https://kaushalluffa.tech'
    }
  ],
}
