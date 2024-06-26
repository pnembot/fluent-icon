import type { SVGProps } from "react";

export function PanelLeftHeaderAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.207a5.48 5.48 0 0 1-.185-1H8.5V8H17v1.6c.358.183.693.404 1 .657V6a3 3 0 0 0-3-3H5Zm12 4H8.5V4H15a2 2 0 0 1 2 2v1ZM5 4h2.5v11H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm14 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default PanelLeftHeaderAdd;
