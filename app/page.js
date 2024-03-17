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
