import React from 'react';
import Sections from '../Sections/Sections';
import ShopButton from '../../ShopButton';
import SectionsData from '../Data/SectionsData';


const Menubar = (props) => {
    return(
        <div className="menubar">
            <h1 className="menubar__title">St. Nick Knacks</h1>

            <SectionsData 
                render={({sections}) => 
                    <Sections sections={sections}
                        onChangeSection={props.onChangeSection}
                        current_section={props.current_section} />
                } 
            />
            <ShopButton />
        </div>
    )
}

export default Menubar;