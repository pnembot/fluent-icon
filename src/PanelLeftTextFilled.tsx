import type { SVGProps } from "react";

export function PanelLeftTextFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6Zm7 9h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H9v11ZM6.59 6.992A.5.5 0 0 0 6.5 6h-2l-.09.008A.5.5 0 0 0 4.5 7h2l.09-.008Zm0 3A.5.5 0 0 0 6.5 9h-2l-.09.008A.5.5 0 0 0 4.5 10h2l.09-.008ZM7 12.5a.5.5 0 0 0-.5-.5h-2l-.09.008A.5.5 0 0 0 4.5 13h2l.09-.008A.5.5 0 0 0 7 12.5Z"
      />
    </svg>
  );
}
export default PanelLeftTextFilled;
