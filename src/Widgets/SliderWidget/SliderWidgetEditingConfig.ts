import { provideEditingConfig } from 'scrivito'
import { SliderWidget } from './SliderWidgetClass'
import { SlideWidget } from '../SlideWidget/SlideWidgetClass'
import thumbnail from './thumbnail.svg'

provideEditingConfig(SliderWidget, {
  title: 'Slider',
  thumbnail,
  attributes: {
    autoplay: {
      title: 'Autoplay?',
      description: 'Default: No',
    },
    autoplayInterval: {
      title: 'Time between slides (in seconds)',
      description: 'Default: 5 seconds',
    },
    controls: {
      title: 'Show controls?',
      description: 'Shows arrows and indicators. Default: Yes',
    },
    margin: {
      title: 'Margin',
      description: 'Space below the widget. Default: mb-4',
    },
    minHeight: {
      title: 'Minimum height (in px)',
      description:
        'Maintains consistent slide appearance when content varies in height. Default: 400',
    },
    maxHeight: {
      title: 'Maximum height (in px)',
      description:
        'Maintains consistent slide appearance when content varies in height. Default: 800',
    },
    hidePrevIcon: {
      title: 'Hide the previous slide arrow?',
      description:
        'Hides the left arrow for navigating to the previous slide. Default: No',
    },
    hideNextIcon: {
      title: 'Hide the next slide arrow?',
      description:
        'Hides the right arrow for navigating to the next slide. Default: No',
    },
    controlColor: {
      title: 'Set Color of control icons?',
      description:
        'Sets the color of the previous/next arrows and indicators. Default: Black',
      values: [
        { value: 'control-color-black', title: 'Black' },
        { value: 'control-color-white', title: 'White' },
      ],
    },
    slides: {
      title: 'Slides',
    },
  },
  properties: ['slides', 'minHeight', 'maxHeight', 'hidePrevIcon', 'hideNextIcon', 'controlColor'],
  propertiesGroups: (widget) => [
    {
      title: 'Autoplay',
      key: 'autoplay-group',
      properties: [
        'autoplay',
        ['autoplayInterval', { enabled: widget.get('autoplay') }],
        ['controls', { enabled: widget.get('autoplay') }],
      ],
    },
    {
      title: 'Margin',
      key: 'margin-group',
      properties: ['margin'],
    },
  ],
  initialContent: {
    autoplayInterval: 5,
    controls: true,
    margin: 'mb-4',
    minHeight: 400,
    maxHeight: 800,
    hidePrevIcon: false,
    hideNextIcon: false,
    slides: [new SlideWidget({}), new SlideWidget({})],
  },
})
