import React from 'react';
import Sections from '../Sections/Sections';
import ShopButton from '../../ShopButton';


const Menubar = (props) => {
    return(
        <div className="menubar">
            <h1 className="menubar__title">St. Nick Knacks</h1>
            <Sections list={props.list}
            onChangeSection={props.onChangeSection}
            current_section={props.current_section} />
            <ShopButton />
        </div>
    )
}

export default Menubar;