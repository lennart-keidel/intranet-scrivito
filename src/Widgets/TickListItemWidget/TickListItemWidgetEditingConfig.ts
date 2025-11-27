import { provideEditingConfig } from 'scrivito'
import thumbnail from './thumbnail.svg'
import { TickListItemWidget } from './TickListItemWidgetClass'

provideEditingConfig(TickListItemWidget, {
  title: 'Tick List Item',
  thumbnail,
  validations: [
    [
      'heading',

      (heading) => {
        if (!heading) {
          return {
            message: 'The heading should be set.',
            severity: 'warning',
          }
        }
      },
    ],
  ],
})
