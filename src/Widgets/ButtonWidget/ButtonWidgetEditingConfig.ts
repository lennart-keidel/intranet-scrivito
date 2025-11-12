import { provideEditingConfig, Link } from 'scrivito'
import { ButtonWidget } from './ButtonWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(ButtonWidget, {
  title: 'Button',
  thumbnail: Thumbnail,
  attributes: {
    alignment: {
      title: 'Alignment',
      description: 'Default: Left',
      values: [
        { value: 'left', title: 'Left' },
        { value: 'center', title: 'Center' },
        { value: 'right', title: 'Right' },
        { value: 'block', title: 'Full width' },
      ],
    },
    buttonColor: {
      title: 'Button color',
      description: 'Default: Primary color',
      values: [
        { value: 'btn-primary', title: 'Primary color' },
        { value: 'btn-secondary', title: 'Secondary color' },
        { value: 'btn-outline-primary', title: 'Primary outline color' },
        { value: 'btn-outline-secondary', title: 'Secondary outline color' },
      ],
    },
    buttonFontColor: {
      title: 'Button font color',
      description: 'Default: Primary font color',
      values: [
        { value: 'btn-font-color-primary', title: 'Primary font color' },
        { value: 'btn-font-color-secondary', title: 'Secondary font color' },
        { value: 'btn-font-color-white', title: 'White font color' },
        { value: 'btn-font-color-black', title: 'Black font color' },
      ],
    },
    buttonBorderColor: {
      title: 'Button border color',
      description: 'Default: Primary border color',
      values: [
        { value: 'btn-border-color-primary', title: 'Primary border color' },
        { value: 'btn-border-color-secondary', title: 'Secondary border color' },
        { value: 'btn-border-color-white', title: 'White border color' },
        { value: 'btn-border-color-black', title: 'Black border color' },
      ],
    },
    buttonBackgroundColor: {
      title: 'Button background color',
      description: 'Default: White background color',
      values: [
        { value: 'btn-background-color-primary', title: 'Primary background color' },
        { value: 'btn-background-color-secondary', title: 'Secondary background color' },
        { value: 'btn-background-color-white', title: 'White background color' },
        { value: 'btn-background-color-black', title: 'Black background color' },
      ],
    },
    buttonSize: {
      title: 'Button size',
      description: 'Default: medium',
    },
    target: {
      title: 'Target',
      description: 'The target and text of the button.',
    },
  },
  properties: ['target', 'alignment', 'buttonColor', 'buttonFontColor', 'buttonBorderColor', 'buttonBackgroundColor', 'buttonSize'],
  initialContent: {
    alignment: 'left',
    buttonColor: 'btn-primary',
    buttonFontColor: 'btn-font-color-primary',
    buttonBorderColor: 'btn-border-color-primary',
    buttonBackgroundColor: 'btn-background-color-white',
    buttonSize: 'medium',
  },
  validations: [
    [
      'target',

      (target: Link | null) => {
        if (!target) {
          return {
            message: 'The button target should be set.',
            severity: 'warning',
          }
        }
        if (!target.title()) {
          return {
            message: 'Providing the button title is recommended.',
            severity: 'info',
          }
        }
      },
    ],
  ],
})
