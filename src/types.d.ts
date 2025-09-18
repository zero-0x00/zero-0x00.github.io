// Next.js type declarations

declare module '*.md' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}

declare module '*.pdf' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  import { StaticImageData } from 'next/image';
  const src: StaticImageData;
  export default src;
}

declare module '*.png' {
  import { StaticImageData } from 'next/image';
  const src: StaticImageData;
  export default src;
}

declare module '*.gif' {
  import { StaticImageData } from 'next/image';
  const src: StaticImageData;
  export default src;
}

declare module '*.webp' {
  import { StaticImageData } from 'next/image';
  const src: StaticImageData;
  export default src;
}
