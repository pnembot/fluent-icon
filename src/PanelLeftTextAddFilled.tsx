import type { SVGProps } from "react";

export function PanelLeftTextAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4.257a5.503 5.503 0 0 0-1-.657V6a2 2 0 0 0-2-2H9v11h.022a5.5 5.5 0 0 0 .185 1H5a3 3 0 0 1-3-3V6Zm4.59.992A.5.5 0 0 0 6.5 6h-2l-.09.008A.5.5 0 0 0 4.5 7h2l.09-.008Zm0 3A.5.5 0 0 0 6.5 9h-2l-.09.008A.5.5 0 0 0 4.5 10h2l.09-.008ZM7 12.5a.5.5 0 0 0-.5-.5h-2l-.09.008A.5.5 0 0 0 4.5 13h2l.09-.008A.5.5 0 0 0 7 12.5Zm12 2a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default PanelLeftTextAddFilled;
