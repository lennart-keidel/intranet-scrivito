import { provideEditingConfig } from 'scrivito'
import { SectionWidget } from './SectionWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(SectionWidget, {
  title: 'Section',
  thumbnail: Thumbnail,
  attributes: {
    backgroundAnimateOnHover: {
      title: 'Animate background on hover?',
      description: 'Default: No',
    },
    roundedCorners: {
      title: 'Rounded corners',
      description: 'Default: 0%',
      values: [
        { value: "rounded-0", title: "No Rounded Corners" },
        { value: "rounded", title: "Very Small" },
        { value: "rounded-sm", title: "Small" },
        { value: "rounded-md", title: "Medium" },
        { value: "rounded-lg", title: "Large" },
        { value: "rounded-xl", title: "Extra large" },
        { value: "rounded-full", title: "Full" },
      ],
    },
    borderColor: {
      title: 'Border color',
      description: 'Default: Primary Color',
      values: [
        { value: 'primary', title: 'Primary Color' },
        { value: 'secondary', title: 'Secondary Color' },
        { value: 'black', title: 'Black' },
        { value: 'dark', title: 'Dark Gray' },
        { value: 'medium', title: 'Medium Gray' },
        { value: 'medium-light', title: 'Medium Light Gray' },
        { value: 'white-gray', title: 'White Gray' },
        { value: 'light', title: 'Light Gray' },
        { value: 'white', title: 'White' },
      ],
    },
    borderWidth: {
      title: 'Border width',
      description: 'Default: 1',
      values: [
        { value: '0', title: 'No Border' },
        { value: '1', title: '1 px' },
        { value: '2', title: '2 px' },
        { value: '3', title: '3 px' },
        { value: '4', title: '4 px' },
        { value: '5', title: '5 px' },
      ],
    },
    backgroundColor: {
      title: 'Background color',
      description: 'Default: Transparent',
      values: [
        { value: 'transparent', title: 'Transparent' },
        { value: 'white', title: 'White' },
        { value: 'primary', title: 'Primary color' },
        { value: 'secondary', title: 'Secondary color' },
        { value: 'light-grey', title: 'Light grey' },
        { value: 'middle-grey', title: 'Grey' },
        { value: 'dark-grey', title: 'Dark grey' },
        { value: 'success', title: 'Success' },
        { value: 'info', title: 'Info' },
        { value: 'warning', title: 'Warning' },
        { value: 'danger', title: 'Danger' },
      ],
    },
    backgroundImage: {
      title: 'Background image or video',
    },
    containerWidth: {
      title: 'Container width',
      description: 'Default: fixed',
      values: [
        { value: 'fixed', title: 'fixed' },
        { value: '95-percent', title: '95%' },
        { value: '100-percent', title: '100%' },
      ],
    },
    showPadding: {
      title: 'Padding',
      description: 'Padding adds space around this section. Default: Yes',
    },
  },
  properties: (widget) => [
    'backgroundColor',
    'roundedCorners',
    'borderColor',
    'borderWidth',
    'backgroundImage',
    ['backgroundAnimateOnHover', { enabled: !!widget.get('backgroundImage') }],
    'containerWidth',
    'showPadding',
  ],
  initialContent: {
    roundedCorners: 'rounded-0',
    borderColor: 'primary',
    borderWidth: '0',
    backgroundColor: 'transparent',
    containerWidth: 'fixed',
    showPadding: true,
  },
})
