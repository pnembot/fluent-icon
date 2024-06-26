import type { SVGProps } from "react";

export function ProtocolHandler(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.585 5.414L2.414 8.585a2 2 0 0 0 0 2.829l3.171 3.171a2 2 0 0 0 2.829 0l3.171-3.171a2 2 0 0 0 0-2.829l-3.17-3.171a2 2 0 0 0-2.829 0ZM3.121 9.293L6.293 6.12a1 1 0 0 1 1.414 0l3.171 3.172a1 1 0 0 1 0 1.414l-3.171 3.171a1 1 0 0 1-1.414 0l-3.173-3.17a1 1 0 0 1 0-1.414Zm8.465 5.293l-.88-.88l.708-.706l.879.878a1 1 0 0 0 1.414 0l3.171-3.171a1 1 0 0 0 0-1.414L13.707 6.12a1 1 0 0 0-1.414 0l-.88.879l-.706-.707l.878-.88a2 2 0 0 1 2.829 0l3.171 3.172a2 2 0 0 1 0 2.829l-3.171 3.171a2 2 0 0 1-2.829 0Z"
      />
    </svg>
  );
}
export default ProtocolHandler;
