import type { SVGProps } from "react";

export function PanelLeftExpandFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m13.179 10.5l-.998.874a.5.5 0 0 0 .658.752l2-1.75a.5.5 0 0 0 0-.752l-2-1.75a.5.5 0 1 0-.659.752l1 .874H9.5a.5.5 0 0 0 0 1h3.679ZM2 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8Zm6 1V5h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8Z"
      />
    </svg>
  );
}
export default PanelLeftExpandFilled;
