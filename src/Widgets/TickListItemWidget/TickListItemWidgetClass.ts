import { provideWidgetClass } from 'scrivito'

export const TickListItemWidget = provideWidgetClass('TickListItemWidget', {
  onlyInside: 'TickListWidget',
  attributes: {
    heading: 'string',
    text: 'string',
  },
  extractTextAttributes: ['heading', 'text'],
})
