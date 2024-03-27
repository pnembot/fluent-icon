import type { SVGProps } from "react";

export function XboxControllerFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.334 4.711a2.12 2.12 0 0 0-1.35-.17l-.895.17a2.369 2.369 0 0 0-1.665 1.245c-1.11 2.165-1.944 3.932-2.27 5.437c-.336 1.544-.147 2.86.82 4.061c.654.813 1.8.65 2.399-.026c.467-.527.997-1.136 1.512-1.732A2.01 2.01 0 0 1 8.405 13h3.186a2.01 2.01 0 0 1 1.519.697a202.92 202.92 0 0 0 1.513 1.732c.598.676 1.744.838 2.398.025c.967-1.2 1.156-2.517.82-4.06c-.326-1.506-1.16-3.273-2.27-5.438a2.369 2.369 0 0 0-1.665-1.245l-.894-.17a2.12 2.12 0 0 0-1.351.17l-.058.029c-.327.167-.672.26-1.014.26H9.406a2.24 2.24 0 0 1-1.014-.26l-.058-.029ZM10 8.5A.75.75 0 1 1 10 7a.75.75 0 0 1 0 1.5Z"
      />
    </svg>
  );
}
export default XboxControllerFilled;
