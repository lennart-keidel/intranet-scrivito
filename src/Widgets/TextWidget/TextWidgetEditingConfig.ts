import { provideEditingConfig } from 'scrivito'
import { TextWidget } from './TextWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(TextWidget, {
  title: 'Text',
  thumbnail: Thumbnail,
  attributes: {
    alignment: {
      title: 'Alignment',
      description: 'Default: Left',
      values: [
        { value: 'left', title: 'Left' },
        { value: 'center', title: 'Center' },
        { value: 'right', title: 'Right' },
      ],
    },
    listItemColor: {
      title: 'List item color',
      description: 'Default: black',
      values: [
        { value: 'text-list-item-primary-color', title: 'primary color' },
        { value: 'text-list-item-secondary-color', title: 'secondary color' },
        { value: 'text-list-item-black-color', title: 'black' },
        { value: 'text-list-item-white-color', title: 'white' },
      ],
    },
    text: {
      title: 'Content',
    },
  },
  properties: ['alignment', 'listItemColor', 'text'],
  initialContent: {
    alignment: 'left',
    text: 'Text',
  },
})
