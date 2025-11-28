import { ContentTag } from 'scrivito';
import { provideComponent } from 'scrivito'
import { TextPage } from './TextPageObjClass'

provideComponent(TextPage, ({ page }) => (
  <section className="py-5">
    <div className="">
    <div>
    <div className="align-items-start row">
    <div className="col-md-1">
    </div>
  <div className="col-md-11">
    <div>
    <ContentTag content={ page } attribute='breadcrumb' />
  </div>
  </div>
  </div>
  </div>
  <div>
    <div className="align-items-start row">
    <div className="col-md-6">
    <section className="bg-primary py-5">
    <div className="container-fluid">
    <div>
    <div className="align-items-start row">
    <div className="col-md-2">
    </div>
  <div className="col-md-10">
    <div>
    <ContentTag content={ page } attribute='headline1' />
  </div>
  <div>
    <ContentTag content={ page } attribute='headline2' />
  </div>
  </div>
  </div>
  </div>
  </div>
  </section>
  </div>
  <div className="col-md-6">
    </div>
  </div>
  </div>
  <div>
    <div>
    </div>
  </div>
  <section className="py-5">
    <div className="container-fluid">
    <div>
    <div className="align-items-start row">
    <div className="col-md-1">
    </div>
  <div className="col-md-2">
    <ContentTag content={ page } attribute='buttonSide1' />
  <div>
    <div>
    </div>
  </div>
  <ContentTag content={ page } attribute='buttonSide2' />
  <div>
    <div>
    </div>
  </div>
  <ContentTag content={ page } attribute='buttonSide3' />
  <div>
    <div>
    </div>
  </div>
  </div>
  <div className="col-md-1">
    </div>
  <div className="col-md-8">
    <div>
    <ContentTag content={ page } attribute='headline3' />
  </div>
  <div>
    <ContentTag content={ page } attribute='ticklist1' />
  </div>
  <div>
    <div className="text-widget text-list-item-primary-color undefined">
  </div>
  </div>
  <section className="bg-light-grey py-5">
    <div className="container">
    <div>
    <ContentTag content={ page } attribute='headline4' />
  </div>
  <div>
    <div className="text-widget text-color-default undefined">
  </div>
  </div>
  <div>
    <ContentTag content={ page } attribute='button1' />
  </div>
  <div>
    <div>
    </div>
  </div>
  <div>
    <ContentTag content={ page } attribute='button2' />
  </div>
  <div>
    <div>
    </div>
  </div>
  </div>
  </section>
  </div>
  </div>
  </div>
  </div>
  </section>
  </div>
  </section>
))
