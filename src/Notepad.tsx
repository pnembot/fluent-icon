import type { SVGProps } from "react";

export function Notepad(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM7 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-1-11a.5.5 0 0 0-.5.5V3h-.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h6a.5.5 0 0 0 .354-.146l4-4A.5.5 0 0 0 16 13.5v-9A1.5 1.5 0 0 0 14.5 3H14v-.5a.5.5 0 0 0-1 0V3h-2.5v-.5a.5.5 0 0 0-1 0V3H7v-.5a.5.5 0 0 0-.5-.5Zm8 2a.5.5 0 0 1 .5.5V13h-2.5a1.5 1.5 0 0 0-1.5 1.5V17H5.5a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h9Zm-.207 10L12 16.293V14.5a.5.5 0 0 1 .5-.5h1.793Z"
      />
    </svg>
  );
}
export default Notepad;
