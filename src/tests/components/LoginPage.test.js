import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage} from '../../components/LoginPage';
import {Header} from "./Header.test";

let startLogin, wrapper;

beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLogin}/>);
});

test('should correctly render LoginPage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('button').simulate('click');;
    expect(startLogin).toHaveBeenCalled();
});
