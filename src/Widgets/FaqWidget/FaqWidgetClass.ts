import * as Scrivito from 'scrivito';

export const FaqWidget = Scrivito.provideWidgetClass('FaqWidget', {
  attributes: {
    question: "string",
    answer: 'html',
    body: 'widgetlist'
  },
});