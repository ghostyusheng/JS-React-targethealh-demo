'use client';
import Image from "next/image";
import React from 'react';
import { Button,ConfigProvider,Tabs,message } from 'antd';

let pointer = null;

const Part1 = (
  <main>
    <div className="banner">
      <div className="banner-title">
        <div>TARGET HEALTHCARE LIMITED</div>
        <div className="banner-title2">Generic, branded and unlicensed pharmaceutical supplier</div>
      </div>
    </div>
    <div className="body1">
    </div>
    <div className="ads">
      <img className="ads-img" src="/3.png" />
      <div>
        <div className="ads-title1">There’s always a patient at the end of the chain.</div>
        <div>
          <p>Target Healthcare works with pharmacies, hospitals, dispensing doctors, pharmaceutical wholesalers, and buying groups in the UK and worldwide to deliver top-quality pharmaceutical products.</p>
          <p>Our commitment extends beyond sourcing a wide selection of generic, branded, and licensed medicines – we’re dedicated to providing unrivalled <a title="Customer Care" href="https://target-healthcare.co.uk/customer-care/">customer service</a>.</p>
          <p>Our mission is to support thousands of communities across the UK, Europe, and beyond, ensuring they receive the medicines they require as quickly as possible while maintaining the most competitive prices.</p>
        </div>
        <button className="aboutUs" onClick={() => {pointer.info("It's a React Demo")}}>
          ABOUT US
        </button>
      </div>
    </div>
    <div className="body2">
    </div>
    <div className="whatWeDo">What we do</div>
    <div className="ads">
      <img className="ads-img" src="/5.png" />
      <div>
        <div className="ads-title1">Specials</div>
        <div>
          <p>Specials are unlicensed medicines custom-made to address patients’ unique requirements when licensed medicines fall short. We offer competitive pricing on both Drug Tariff and Non-Drug Tariff lines. Whether you require domestically manufactured or imported unlicensed medicines, our dedicated Specials team is here to help you source bespoke pharmaceutical solutions for your patients.</p>
        </div>
        <button className="aboutUs" onClick={() => {pointer.info("It's a React Demo..")}}>
          LEARN MORE
        </button>
      </div>
    </div>
    <div className="ads">
      <div>
        <div className="ads-title1">Retail</div>
        <div>
          <p>Our retail team maintains a diverse inventory of generic medicines, including ambient, cold chain, and controlled drug pharmaceuticals. We also offer parallel-imported products, medical devices, and nutritional items to cater to your comprehensive healthcare needs.</p>
        </div>
        <button className="aboutUs" onClick={() => {pointer.info("It's a React Demo...")}}>
          LEARN MORE
        </button>
      </div>
      <img className="ads-img" src="/8.png" />
    </div>
    <div className="ads">
      <img className="ads-img" src="/6.png" />
      <div>
        <div className="ads-title1">Export</div>
        <div>
          <p>If you require a particular product that isn’t readily available locally, our specialised export team is here to assist. Our international licensing allows us to supply a comprehensive range of medicines, extending our reach to over 100 countries and territories.</p>
        </div>
        <button className="aboutUs" onClick={() => {pointer.info("It's a React Demo...")}}>
          LEARN MORE
        </button>
      </div>
    </div>
    <div className="ads">
      <div>
        <div className="ads-title1">Services</div>
        <div>
          <p>Our renowned service portfolio encompasses early access and named patient programs, patient dispensing, cannabis-based medicinal products, and Specials repackaging and over-labelling.</p>
        </div>
        <button className="aboutUs" onClick={() => {pointer.info("It's a React Demo...")}}>
          LEARN MORE
        </button>
      </div>
      <img className="ads-img" src="/7.png" />
    </div>
    <div className="footer">
      <img src="/logo.png" style={{ width: "300px", height: "114px" }} />
      <p>© Target Healthcare Limited 2023 all rights reserved</p>
      <p>LinkedIn | Cookie Policy | Going Carbon Neutral</p>
      <img src="/logo2.png" style={{ width: "240px", height: "104px" }} />
    </div>
  </main>
)

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: 'Home',
    children: Part1,
  },
  {
    key: '2',
    label: 'About Us',
    children: 'Not implement yet',
  },
  {
    key: '3',
    label: 'Specials',
    children: 'Not implement yet',
  },
  {
    key: '4',
    label: 'Retail',
    children: 'Not implement yet',
  },
  {
    key: '5',
    label: 'Export',
    children: 'Not implement yet',
  },
  {
    key: '6',
    label: 'Services',
    children: 'Not implement yet',
  },
  {
    key: '7',
    label: 'Quality',
    children: 'Not implement yet',
  },
  {
    key: '8',
    label: 'More',
    children: 'Not implement yet',
  },
  {
    key: '9',
    label: 'Contact Us',
    children: 'Not implement yet',
  },
];

const OperationsSlot = {
  left: 
    <div style={{width: '55vw', marginLeft: '20px', display: 'flex'}}>
      <img src="/logo.png" style={{ width: "185px", height: "70px" }} />,
    </div>
};

export default function Home() {
  const [alignValue, setAlignValue] = React.useState('center');
  const [position, setPosition] = React.useState(['left', 'right']);
  const [messageApi, contextHolder] = message.useMessage();

  pointer = messageApi;

  const slot = React.useMemo(() => {
    if (position.length === 0) return null;
    return position.reduce(
      (acc, direction) => ({
        ...acc,
        [direction]: OperationsSlot[direction],
      }),
      {},
    );
  }, [position]);

  return (
    <main className="">
      {contextHolder}
      <div className="header">
        
        <ConfigProvider 
        theme={{
          token: {
            colorPrimary: 'red',
          },
          components: {
            Tabs: {
              titleFontSize: 15,
              itemColor: 'grey'
            }
          }
        }}>
          <Tabs 
            defaultActiveKey="1"
            tabBarExtraContent={slot}
            items={items}
            onChange={onChange}
            indicator={{
              size: (origin) => 20,
              align: alignValue,
            }}
          />
        </ConfigProvider>
      </div>
      
    </main>
  );
}
