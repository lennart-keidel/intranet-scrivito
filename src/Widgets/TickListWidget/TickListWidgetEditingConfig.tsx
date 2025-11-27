import thumbnail from './thumbnail.svg'
import { TickListItemWidget } from '../TickListItemWidget/TickListItemWidgetClass'
import { provideEditingConfig, Widget } from 'scrivito'
import { ScrivitoBootstrapIconEditor } from 'scrivito-icon-editor'
import { TickListWidget } from './TickListWidgetClass'

provideEditingConfig(TickListWidget, {
  title: 'Tick List',
  thumbnail,
  attributes: {
    iconColor: {
      title: 'Icon Color',
      description: 'Default: Primary color',
      values: [
        { value: 'color-primary', title: 'Primary' },
        { value: 'color-secondary', title: 'Secondary' },
        { value: 'color-dark-gray', title: 'Dark Gray' },
        { value: 'color-light-gray', title: 'Light Gray' },
        { value: 'color-black', title: 'Black' },
        { value: 'color-white', title: 'White' },
      ],
    },
  },
  propertiesGroups: [
    {
      title: 'Icon',
      component: (props: { widget: Widget }) => (
        <ScrivitoBootstrapIconEditor defaultValue="check" {...props} />
      ),
      properties: ['icon', 'iconColor'],
      key: 'icon-group',
    },
  ],
  properties: ['iconColor'],
  initialContent: {
    icon: 'bi-check',
    iconColor: 'color-primary',
    items: [
      new TickListItemWidget({}),
      new TickListItemWidget({}),
      new TickListItemWidget({}),
    ],
  },
  validations: [
    [
      'items',

      (items) => {
        if (Array.isArray(items) && items.length < 1) {
          return {
            message: 'The tick list must include at least one item.',
            severity: 'error',
          }
        }
      },
    ],
  ],
})
