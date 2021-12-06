const colors = {
  green: '#06d69f',
  navy1: '#202540',
  navy2: '#333a64',
  blue: '#a9b3e0',
};

const deviceSizes = {
  mobile: '414px',
  tablet: '768px',
};

const device = {
  mobile: `only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
};

const theme = {
  colors,
  deviceSizes,
  device,
};

export default theme;
