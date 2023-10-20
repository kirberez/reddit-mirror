// import React from "react";
// import Enzyme from "enzyme";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// import { Dropdown } from "../Dropdown";

// Enzyme.configure({ adapter: new Adapter() });
// describe('Dropdown', () => {
//   // Enzyme - тестирование
//   test('should render', () => {
//     const wrapper = Enzyme.shallow(<Dropdown button={<button />} />)
//     expect(wrapper).toBeDefined(); // Проверка что компонент отрендерился    
//     console.log(wrapper.find('div.container').debug()); // debug - вернёт хтмл
    
//     expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy(); 
//   })
//   // Snapshot - тестирование 
//   // Как бы создаётся слепок компонента (снэпшот) и сравнивается с тем что отрендерилось 
//   // test('should render (snapshot)', () => {
//   //   const wrapper = Enzyme.shallow(<Dropdown button={<button />} />)
//   //   expect(wrapper).toMatchSnapshot()
//   // })
// }) 