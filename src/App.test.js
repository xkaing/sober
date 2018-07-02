import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
//冒烟测试 验证一个组件渲染没有抛出异常，浅渲染并且测试一些输出，完整渲染测试组件的生命周期和状态的改变。