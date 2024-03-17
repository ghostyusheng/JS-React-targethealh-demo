'use client';
import Image from "next/image";
import React from 'react';
import { Button,ConfigProvider,Tabs } from 'antd';

const Part1 = (
  <main>
    <div className="banner">
      <div className="banner-title">
        <div>TARGET HEALTHCARE LIMITED</div>
        <div className="banner-title2">Generic, branded and unlicensed pharmaceutical supplier</div>
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
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Specials',
    children: 'Content of Tab Pane 3',
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
