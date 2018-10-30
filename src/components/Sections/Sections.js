import React from 'react';

const Sections = (props) => {
    let menuItemActive = props.current_section === 0 ? ' sectionList__link--active' : ''    

    return (
      <nav className="sectionList">
      <div className={'sectionList__link' + menuItemActive} onClick={() => props.onChangeSection(0)}>All Items</div>
      {
        props.list.map(section => {
          menuItemActive = props.current_section === section.shop_section_id ? ' sectionList__link--active' : ''
          return (<div className={'sectionList__link' + menuItemActive} key={section.shop_section_id}
              onClick={() => props.onChangeSection(section.shop_section_id)} >
            {section.title}
          </div>)
        })
    }
      </nav>
    )
}

export default Sections;