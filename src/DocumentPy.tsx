import type { SVGProps } from "react";

export function DocumentPy(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="m9.65 1.44l2.91 2.91c.28.28.44.67.44 1.06V13c0 1.1-.9 2-2 2H7.91c.06-.16.09-.33.09-.5V14h3c.55 0 1-.45 1-1V6H9.5C8.67 6 8 5.33 8 4.5V2H5c-.55 0-1 .45-1 1v6.39c-.03.02-.05.04-.07.06c-.28-.19-.6-.33-.93-.39V3c0-1.1.9-2 2-2h3.59c.39 0 .78.16 1.06.44ZM9 4.5c0 .28.22.5.5.5h2.29L9 2.21V4.5ZM1.5 10h1a1.5 1.5 0 1 1 0 3H2v1.5a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .5-.5Zm.5 2h.5a.5.5 0 1 0 0-1H2v1Zm5 .666L8.4 10.8a.498.498 0 0 0-.1-.7a.498.498 0 0 0-.7.1l-1.1 1.467L5.4 10.2a.5.5 0 1 0-.8.6L6 12.666V14.5a.5.5 0 1 0 1 0v-1.834Z"
      />
    </svg>
  );
}
export default DocumentPy;
