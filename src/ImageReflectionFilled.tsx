import type { SVGProps } from "react";

export function ImageReflectionFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M4 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a2.997 2.997 0 0 1-1.341 2.5A2.997 2.997 0 0 1 16 17a.5.5 0 0 1-1 0a2 2 0 0 0-2-2a.5.5 0 0 1 0-1h-2.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1H7a.5.5 0 0 1 0 1a2 2 0 0 0-2 2a.5.5 0 0 1-1 0c0-1.043.533-1.963 1.341-2.5A2.997 2.997 0 0 1 4 12V6Zm1.984 7.723l3.521-3.52a.7.7 0 0 1 .99 0l3.521 3.52a2.01 2.01 0 0 0 .707-.707l-3.52-3.521a1.7 1.7 0 0 0-2.405 0l-3.521 3.521c.172.291.416.535.707.707ZM13 7a1 1 0 1 0-2 0a1 1 0 0 0 2 0Z"
      />
    </svg>
  );
}
export default ImageReflectionFilled;
