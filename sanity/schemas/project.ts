import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
        name: 'title',
        title: 'Title',
        description: 'Titles of the project',
        type: 'string',
    },
    {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
        }
    },
    {
        name: 'summary',
        title: 'Summary',
        type: 'text',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
        of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'linkToProject',
      title: 'LinkToProject',
      type: 'url',
    },
  ],
})
