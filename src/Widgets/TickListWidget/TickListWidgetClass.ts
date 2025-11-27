import { provideWidgetClass } from 'scrivito'

export const TickListWidget = provideWidgetClass('TickListWidget', {
  attributes: {
    icon: 'string',
    iconColor: [
      'enum',
      {
        values: [
          'color-primary',
          'color-secondary',
          'color-dark-gray',
          'color-light-gray',
          'color-black',
          'color-white'
        ],
        default: 'color-primary',
      },
    ],
    items: ['widgetlist', { only: 'TickListItemWidget' }],
  },
  extractTextAttributes: ['items'],
})
