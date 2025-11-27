import * as React from 'react';
import * as Scrivito from 'scrivito';
import { provideComponent } from 'scrivito'
import { TextPage } from './TextPageObjClass'
import { ButtonWidget } from '../../Widgets/ButtonWidget/ButtonWidgetClass';

provideComponent(TextPage, ({ page }) => (
    <div className='container'>
        <Scrivito.ContentTag
            tag="h1"
            className="h2"
            content={page}
            attribute="title"
        />
        <Scrivito.ContentTag
            tag="h1"
            className="h2"
            content={page}
            attribute="title"
        />
        <Scrivito.ContentTag
            tag="h1"
            className="h2"
            content={page}
            attribute="title"
        />
    </div>
))
