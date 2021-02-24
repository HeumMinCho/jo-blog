import React, {useState} from 'react';
import Board from "./Board";
import Main from "./Main";
import {List} from "./component/List";


export interface SideNavProps {
  children?: JSX.Element
}

function SideNav(props: SideNavProps) {
  var menus = [
    {
      name: "메인",
      component: <Main></Main>
    },
    {
      name: "게시판",
      component: <List></List>
    }]
  var [content, setContent]= useState(<Main></Main>);
  return (
    <div className="SideNav" style={
      {
        display: "flex",
        height: "100vh"
      }
    }>
      <div style={
        {
          width: "20%",
          padding: "20px",
          borderRight: "1px solid #f5f5f7"
        }
      }>
        {menus.map((menu, index: number) => {
          return <button
            key={index}
            onClick={() => {
              setContent(menu.component)
            }}
            style={
              {
                marginBottom: "10px"
              }
            }
          >{menu.name}</button>
        })}
      </div>
      <div style={
        {
          width: "100%",
        }
      }>
        <div>
          {props.children}
          {content}
        </div>
      </div>
    </div>


  );
}

export default SideNav;
