import { provideWidgetClass } from 'scrivito'

export const ButtonWidget = provideWidgetClass('ButtonWidget', {
  attributes: {
    alignment: ['enum', { values: ['left', 'center', 'right', 'block'] }],
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
          'btn-background-color-transparent',
        ],
      },
    ],
    buttonBackgroundColorHover: [
      'enum',
      {
        values: [
          'btn-background-color-primary-hover',
          'btn-background-color-secondary-hover',
          'btn-background-color-white-hover',
          'btn-background-color-black-hover',
          'btn-background-color-transparent-hover',
        ],
      },
    ],
    buttonSize: ['enum', { values: ['small', 'medium', 'large'] }],
    withFile: ["enum", { values: ["yes", "no"] }],
    target: 'link',
  },
})
