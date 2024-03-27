import type { SVGProps } from "react";

export function PanelRightExpandFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m6.821 10.5l.998.874a.5.5 0 0 1-.658.752l-2-1.75a.5.5 0 0 1 0-.752l2-1.75a.5.5 0 0 1 .658.752l-.998.874H10.5a.5.5 0 0 1 0 1H6.821ZM18 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8Zm-6 1V5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8Z"
      />
    </svg>
  );
}
export default PanelRightExpandFilled;
