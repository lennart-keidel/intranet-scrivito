import { useContext } from 'react'
import { ContentTag, provideComponent, WidgetTag } from 'scrivito'
import { TickListItemWidget } from './TickListItemWidgetClass'
import { TickListIconContext } from '../TickListWidget/TickListWidgetComponent'

provideComponent(TickListItemWidget, ({ widget }) => {
  return (
  <WidgetTag tag="li">
    <i
      className={`icon bi bi-1x ${useContext(TickListIconContext)}`}
      aria-hidden="true"
    />
    <div className="flex-grow-1">
      <ContentTag content={widget} attribute="heading" className="text-bold h4" />
      <ContentTag
        content={widget}
        attribute="text"
        className=''
      />
    </div>
  </WidgetTag>
)})
