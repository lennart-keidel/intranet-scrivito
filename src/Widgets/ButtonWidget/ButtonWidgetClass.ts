import { provideWidgetClass } from 'scrivito'

export const ButtonWidget = provideWidgetClass('ButtonWidget', {
  attributes: {
    alignment: ['enum', { values: ['left', 'center', 'right', 'block'] }],
    buttonColor: [
      'enum',
      {
        values: [
          'btn-primary',
          'btn-secondary',
          'btn-outline-primary',
          'btn-outline-secondary',
        ],
      },
    ],
    buttonFontColor: [
      'enum',
      {
        values: [
          'btn-font-color-primary',
          'btn-font-color-secondary',
          'btn-font-color-white',
          'btn-font-color-black',
        ],
      },
    ],
    buttonBorderColor: [
      'enum',
      {
        values: [
          'btn-border-color-primary',
          'btn-border-color-secondary',
          'btn-border-color-white',
          'btn-border-color-black',
        ],
      },
    ],
    buttonBackgroundColor: [
      'enum',
      {
        values: [
          'btn-background-color-primary',
          'btn-background-color-secondary',
          'btn-background-color-white',
          'btn-background-color-black',
        ],
      },
    ],
    buttonSize: ['enum', { values: ['small', 'medium', 'large'] }],
    target: 'link',
  },
})
