import { round } from 'lodash-es'
import { provideWidgetClass } from 'scrivito'

export const SectionWidget = provideWidgetClass('SectionWidget', {
  attributes: {
    backgroundAnimateOnHover: 'boolean',
    roundedCorners: [
      'enum',
      {
        values: ["rounded",
          "rounded-0",
          "rounded-sm",
          "rounded-md",
          "rounded-lg",
          "rounded-xl",
          "rounded-full",
        ],
      },
    ],
    borderColor: [
      'enum',
      { values: ['primary', 'secondary', 'black', 'dark', 'medium', 'medium-light', 'white-gray', 'light', 'white'] },
    ],
    borderWidth: [
      'enum',
      { values: ['0', '1', '2', '3', '4', '5'] },
    ],
    // shadow: ['enum', { values: ['none', 'small', 'medium', 'large'] }],
    backgroundColor: [
      'enum',
      {
        values: [
          'white',
          'primary',
          'secondary',
          'light-grey',
          'middle-grey',
          'dark-grey',
          'transparent',
          'success',
          'info',
          'warning',
          'danger',
        ],
      },
    ],
    backgroundImage: ['reference', { only: ['Image', 'Video'] }],
    content: 'widgetlist',
    showPadding: 'boolean',
    containerWidth: [
      'enum',
      { values: ['fixed', '95-percent', '100-percent'] },
    ],
  },
  extractTextAttributes: ['content'],
})

export type SectionWidgetInstance = InstanceType<typeof SectionWidget>
