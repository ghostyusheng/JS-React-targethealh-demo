'use client';
import Image from "next/image";
import React from 'react';
import { ConfigProvider,Tabs } from 'antd';



const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Home',
    children: 'Content of Tab Pane 1',
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
    children: 'Content of Tab Pane 3',
  },
  {
    key: '5',
    label: 'Export',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '6',
    label: 'Services',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '7',
    label: 'Quality',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '8',
    label: 'More',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '9',
    label: 'Contact Us',
    children: 'Content of Tab Pane 3',
  },
];

export default function Home() {
  return (
    <main className="">
      <div className="header">
        <img src="/logo.png" style={{ width: "185px", height: "70px" }} />
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
            items={items}
            onChange={onChange}
            inkBarColor="red"
            itemActiveColor="red"
            itemHoverColor="red"
            itemSelectedColor="red"
          />
        </ConfigProvider>
        
      </div>
    </main>
  );
}
