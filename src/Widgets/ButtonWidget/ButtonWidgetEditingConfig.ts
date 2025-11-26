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
    buttonFontColor: {
      title: 'Font Color',
      description: 'Default: Primary font color',
      values: [
        { value: 'btn-font-color-primary', title: 'Primary' },
        { value: 'btn-font-color-secondary', title: 'Secondary' },
        { value: 'btn-font-color-white', title: 'White' },
        { value: 'btn-font-color-black', title: 'Black' },
      ],
    },
    buttonBorderColor: {
      title: 'Border Color',
      description: 'Default: Primary border color',
      values: [
        { value: 'btn-border-color-primary', title: 'Primary' },
        { value: 'btn-border-color-secondary', title: 'Secondary' },
        { value: 'btn-border-color-white', title: 'White' },
        { value: 'btn-border-color-black', title: 'Black' },
      ],
    },
    buttonBackgroundColor: {
      title: 'Background Color',
      description: 'Default: White background color',
      values: [
        { value: 'btn-background-color-primary', title: 'Primary' },
        { value: 'btn-background-color-secondary', title: 'Secondary' },
        { value: 'btn-background-color-white', title: 'White' },
        { value: 'btn-background-color-black', title: 'Black' },
        { value: 'btn-background-color-transparent', title: 'Transparent' },
      ],
    },
    buttonBackgroundColorHover: {
      title: 'Background Color on Hover',
      description: 'Default: White background color on hover',
      values: [
        { value: 'btn-background-color-primary-hover', title: 'Primary' },
        { value: 'btn-background-color-secondary-hover', title: 'Secondary' },
        { value: 'btn-background-color-white-hover', title: 'White' },
        { value: 'btn-background-color-black-hover', title: 'Black' },
        { value: 'btn-background-color-transparent-hover', title: 'Transparent' },
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
  properties: ['target', 'alignment', 'buttonColor', 'buttonFontColor', 'buttonBorderColor', 'buttonBackgroundColor', 'buttonBackgroundColorHover', 'buttonSize'],
  initialContent: {
    alignment: 'left',
    buttonColor: 'btn-primary',
    buttonFontColor: 'btn-font-color-primary',
    buttonBorderColor: 'btn-border-color-primary',
    buttonBackgroundColor: 'btn-background-color-white',
    buttonBackgroundColorHover: 'btn-background-color-white-hover',
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
