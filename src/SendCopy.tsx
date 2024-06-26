import type { SVGProps } from "react";

export function SendCopy(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.646 2.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L9.5 3.707V11.5a.5.5 0 0 1-1 0V3.707L6.354 5.854a.5.5 0 1 1-.708-.708l3-3ZM5.268 17A2 2 0 0 0 7 18h6a4 4 0 0 0 4-4v-3.5a.5.5 0 1 0-1 0V14a3 3 0 0 1-3 3H5.268ZM4 8.5a.5.5 0 0 0-1 0V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-1 0V14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.5Z"
      />
    </svg>
  );
}
export default SendCopy;
