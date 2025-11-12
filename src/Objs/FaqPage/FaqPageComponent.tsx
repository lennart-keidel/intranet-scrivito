import * as React from 'react';
import * as Scrivito from 'scrivito';
import { provideComponent } from 'scrivito'
import { FaqPage } from './FaqPageObjClass'

provideComponent(FaqPage, ({ page }) => (
    <div className='container'>
        <h1 className='text-center'>FAQ</h1>
        <Scrivito.ContentTag
            tag="main"
            id="main"
            key={page.id()}
            content={page}
            attribute="questions"
        />
    </div>
))
