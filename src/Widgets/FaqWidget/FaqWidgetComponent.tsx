import { provideComponent, ContentTag } from 'scrivito'
import { FaqWidget } from './FaqWidgetClass'

provideComponent('FaqWidget', ({ widget }) =>
  <div className='faq'>
    <ContentTag tag='h3' content={ widget } attribute='question' />
    <ContentTag content={ widget } attribute='answer'/>
  </div>
);