import type { SVGProps } from "react";

export function AttachTextFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.75 3.5A2.25 2.25 0 0 0 4.5 5.75v7.5a.75.75 0 0 1-1.5 0v-7.5a3.75 3.75 0 0 1 7.473-.448a.75.75 0 0 1 .027.198v10.252A2.25 2.25 0 0 1 6 15.75V5.769a.75.75 0 0 1 1.5 0v9.981a.75.75 0 0 0 1.5 0v-10A2.25 2.25 0 0 0 6.75 3.5ZM12 8.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm.75-3.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM12 11.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z"
      />
    </svg>
  );
}
export default AttachTextFilled;
