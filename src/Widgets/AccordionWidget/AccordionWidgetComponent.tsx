import { provideEditingConfig, Link, Widget } from 'scrivito'
import "./AccordionWidget.scss";
import {
  provideComponent,
  ContentTag,
} from 'scrivito'
import AccordionWidget from './AccordionWidgetClass'

provideComponent(AccordionWidget, ({ widget }) => {
  return (
    <ContentTag
      attribute="elementsList"
      className="accordion-widget"
      content={widget}
    />
  );
});
