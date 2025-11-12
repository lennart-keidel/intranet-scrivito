import * as Scrivito from 'scrivito';
import factWidgetIcon from './thumbnail.svg';

Scrivito.provideEditingConfig('FaqWidget', {
  title: 'FAQ',
  thumbnail: `/${factWidgetIcon}`,
  description: 'A frequently asked question.',

  attributes: {
    question: {
      title: 'Question',
      description: 'State the frequently asked question',
    },

    answer: {
      title: 'Answer',
      description: 'Provide an eloquent answer',
    },
  },

  properties: ['question', 'answer'],
});