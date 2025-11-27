import { provideEditingConfig, Link, Widget } from 'scrivito'
import { ButtonWidget } from './ButtonWidgetClass'
import Thumbnail from './thumbnail.svg'
import { ScrivitoBootstrapIconEditor } from 'scrivito-icon-editor'

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
    withFile: {
      title: "Attached File?",
      description: "Download file after click.",
      values: [
        { value: "yes", title: "Yes" },
        { value: "no", title: "No" },
      ],
    },
    target: {
      title: 'Target',
      description: 'The target and text of the button.',
    },
  },
  properties: ['target', 'alignment', 'buttonColor', 'buttonFontColor', 'buttonBorderColor', 'buttonBackgroundColor', 'buttonBackgroundColorHover', 'buttonSize', "withFile"],
  initialContent: {
    alignment: 'left',
    buttonColor: 'btn-primary',
    buttonFontColor: 'btn-font-color-primary',
    buttonBorderColor: 'btn-border-color-primary',
    buttonBackgroundColor: 'btn-background-color-white',
    buttonBackgroundColorHover: 'btn-background-color-white-hover',
    buttonSize: 'medium',
    withFile: "no",
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
    // [
    //   "downloadButtonIcon",
    //   (downloadButtonIcon, { widget }) => {
    //     if (widget.get("withFile") === "yes") {
    //       const homepage = getDefaultRoot();

    //       if (!downloadButtonIcon && !homepage?.get("downloadButtonIcon")) {
    //         return {
    //           message:
    //             "No icon is set in neither homepage's properties nor widget's properties. Lack of icon can break design!",
    //           severity: "warning",
    //         };
    //       }
    //     }
    //   },
    // ],
  ],
})
