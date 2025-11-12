import { provideComponent, ContentTag } from 'scrivito'
import { alignmentClassName } from '../../utils/alignmentClassName'
import { TextWidget } from './TextWidgetClass'

provideComponent(TextWidget, ({ widget }) => {
  const textClassNames = ['text-widget']
  textClassNames.push(widget.get('listItemColor') || 'text-color-default')
  return (
   <ContentTag
    attribute="text"
    className={textClassNames.join(' ')+' '+alignmentClassName(widget.get('alignment'))}
    content={widget}
    tag="div"
  />
  )
})
