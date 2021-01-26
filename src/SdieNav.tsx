import React from 'react';


export interface SideNavProps {
  children?: JSX.Element[]
}

function SideNav(props: SideNavProps) {
  var menus = [
    "게시판",
    "방명록"
  ]
  return (
    <div className="SideNav" style={
      {display: "flex",
        height :"100vh"}
    }>
      <div style={
        {
          width: "20%",
          padding:"20px",
          borderRight: "1px solid #f5f5f7"
        }
      }>
        {menus.map((menu) => {
          return <div style={
            {
             marginBottom: "10px"
            }
          }>{menu}</div>
        })}
      </div>
      <div style={
        {
          width: "100%",
        }
      }>
        <div>
          {props.children}
        </div>
      </div>
    </div>


  );
}

export default SideNav;
