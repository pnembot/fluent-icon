import type { SVGProps } from "react";

export function XboxControllerErrorFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.334 3.711a2.12 2.12 0 0 0-1.35-.17l-.895.17a2.369 2.369 0 0 0-1.665 1.245c-1.11 2.165-1.944 3.932-2.27 5.437c-.336 1.544-.147 2.86.82 4.061c.654.813 1.8.65 2.399-.026c.467-.527.997-1.136 1.512-1.732A2.01 2.01 0 0 1 8.405 12h.802a5.502 5.502 0 0 1 8.149-3.201C16.93 7.668 16.312 6.4 15.57 4.956a2.369 2.369 0 0 0-1.665-1.245l-.894-.17a2.12 2.12 0 0 0-1.351.17l-.058.029c-.327.167-.672.26-1.014.26H9.406a2.24 2.24 0 0 1-1.014-.26l-.058-.029ZM10 7.5A.75.75 0 1 1 10 6a.75.75 0 0 1 0 1.5Zm9 6a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM14.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25Z"
      />
    </svg>
  );
}
export default XboxControllerErrorFilled;
