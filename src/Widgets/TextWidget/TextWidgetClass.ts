import { provideWidgetClass } from 'scrivito'

export const TextWidget = provideWidgetClass('TextWidget', {
  attributes: {
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
    listItemColor: ['enum', {
      values: [
        'text-list-item-primary-color',
        'text-list-item-secondary-color',
        'text-list-item-black-color',
        'text-list-item-white-color']
      }
    ],
    text: 'html',
  },
  extractTextAttributes: ['text'],
})
