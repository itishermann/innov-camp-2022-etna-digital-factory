import * as React from 'react';
import {  Path } from 'react-native-svg';
import { Icon, IIconProps } from 'native-base';

const SvgComponent = (props: IIconProps) => (
  <Icon
    viewBox="0 0 25.75 20.922"
    {...props}
  >
    <Path
      d="M25.75 2.477a11.006 11.006 0 0 1-3.042.834A5.249 5.249 0 0 0 25.03.393a10.55 10.55 0 0 1-3.348 1.278 5.279 5.279 0 0 0-9.132 3.61 5.436 5.436 0 0 0 .122 1.2A14.942 14.942 0 0 1 1.793.962a5.28 5.28 0 0 0 1.622 7.056 5.213 5.213 0 0 1-2.385-.65v.058a5.3 5.3 0 0 0 4.229 5.187 5.269 5.269 0 0 1-1.384.174 4.667 4.667 0 0 1-1-.09 5.329 5.329 0 0 0 4.933 3.677 10.607 10.607 0 0 1-6.545 2.252A9.888 9.888 0 0 1 0 18.553a14.862 14.862 0 0 0 8.1 2.369A14.922 14.922 0 0 0 23.123 5.9c0-.233-.008-.459-.019-.682a10.531 10.531 0 0 0 2.646-2.741Z"
      fill="#03a9f4"
    />
  </Icon>
);

export default SvgComponent;