import type { SVGProps } from "react";

export function SymbolsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.142 7.974a.5.5 0 0 0 .707 0l2.553-2.553a1.99 1.99 0 0 0 .014-2.83a2.005 2.005 0 0 0-2.84-.003l-.08.08l-.08-.079a2.002 2.002 0 0 0-2.83 2.83l2.556 2.555ZM2 5.503a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0Zm3.5-2.5c-.51 0-.983.152-1.379.414l3.465 3.464A2.5 2.5 0 0 0 5.5 3.003ZM3 5.503a2.5 2.5 0 0 0 3.879 2.085L3.414 4.124A2.487 2.487 0 0 0 3 5.503Zm9.335 7.747a2.499 2.499 0 0 1 4.166-.249h-1.003a.5.5 0 1 0 0 1H17.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.55a3.5 3.5 0 0 0-5.53.698a.5.5 0 0 0 .865.501ZM12 16.948v.552a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1h-1a2.499 2.499 0 0 0 4.167-.251a.5.5 0 0 1 .866.5a3.499 3.499 0 0 1-5.534.699ZM5.5 11a.5.5 0 0 1 .5.5V14h2.5a.5.5 0 1 1 0 1H6v2.5a.5.5 0 0 1-1 0V15H2.5a.5.5 0 1 1 0-1H5v-2.5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default SymbolsFilled;
