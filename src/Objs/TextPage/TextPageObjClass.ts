import { provideObjClass } from 'scrivito';

export const TextPage = provideObjClass('TextPage', {
  attributes: {
    breadcrumb: [ 'widgetlist', { only: 'BreadcrumbWidget' } ],
    headline1: [ 'widgetlist', { only: 'HeadlineWidget' } ],
    headline2: [ 'widgetlist', { only: 'HeadlineWidget' } ],
    headline3: [ 'widgetlist', { only: 'HeadlineWidget' } ],
    headline4: [ 'widgetlist', { only: 'HeadlineWidget' } ],
    button1: [ 'widgetlist', { only: 'ButtonWidget' } ],
    button2: [ 'widgetlist', { only: 'ButtonWidget' } ],
    ticklist1: [ 'widgetlist', { only: 'TickListWidget' } ], 
    buttonSide1: [ 'widgetlist', { only: 'ButtonWidget' } ],
    buttonSide2: [ 'widgetlist', { only: 'ButtonWidget' } ],
    buttonSide3: [ 'widgetlist', { only: 'ButtonWidget' } ],
  },
});