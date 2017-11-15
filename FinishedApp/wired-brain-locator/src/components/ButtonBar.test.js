import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ButtonBar from './ButtonBar';

const shops=["location1","location2"];


describe('ButtonBar', () => {

    it('renders without crashing', () => {
        const component = shallow(<ButtonBar shops={shops}/>);
        expect(component).toBeDefined();
    });

    it('matches the snapshot', () => {
        const component = shallow(<ButtonBar shops={shops}/>);
        expect(toJson(component)).toMatchSnapshot();
    });

});