import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import {  Path } from 'react-native-svg';

const SvgComponent = (props: IIconProps) => (
  <Icon
    viewBox="0 0 23.054 23.054"
    {...props}
  >
    <Path
      data-name="Trac\xE9 9801"
      d="M21.782 0H1.272A1.272 1.272 0 0 0 0 1.273v20.51a1.272 1.272 0 0 0 1.273 1.272h20.509a1.272 1.272 0 0 0 1.273-1.272V1.272A1.272 1.272 0 0 0 21.782 0Zm0 0"
      fill="#4267b2"
    />
    <Path
      data-name="Trac\xE9 9802"
      d="M15.921 23.058v-8.919h3l.45-3.49h-3.45V8.427c0-1.008.28-1.695 1.725-1.695h1.832V3.619a24.625 24.625 0 0 0-2.685-.137c-2.657 0-4.475 1.621-4.475 4.6v2.568H9.321v3.49h2.994v8.918Zm0 0"
      fill="#fff"
    />
  </Icon>
);

export default SvgComponent;
