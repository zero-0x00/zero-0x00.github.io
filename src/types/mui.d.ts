import '@mui/material/styles';
import '@mui/material/Chip';

declare module '@mui/material/styles' {
  interface Palette {
    pending: Palette['primary'];
    payment: Palette['primary'];
    inactive: Palette['primary'];
    draft: Palette['primary'];
  }
  interface PaletteOptions {
    pending: PaletteOptions['primary'];
    payment: PaletteOptions['primary'];
    inactive: PaletteOptions['primary'];
    draft: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    pending: true;
    payment: true;
    inactive: true;
    draft: true;
  }
}
