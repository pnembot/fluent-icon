import type { SVGProps } from "react";

export function FontSpaceTrackingOutFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a.75.75 0 0 1 .7.482l3.25 8.495a.75.75 0 0 1-1.401.536l-.772-2.018H4.222l-.772 2.018a.75.75 0 0 1-1.401-.536l3.25-8.495A.75.75 0 0 1 6 2ZM4.796 7.995h2.407L6 4.849L4.796 7.995Zm9.886 5.261a.75.75 0 0 1 1.058-.07l2 1.748a.75.75 0 0 1 0 1.129l-2 1.751a.75.75 0 1 1-.988-1.128l.498-.436H4.744l.498.435a.75.75 0 1 1-.988 1.13l-2-1.749a.75.75 0 0 1 0-1.129l2-1.751a.75.75 0 0 1 .988 1.128l-.497.436H15.25l-.498-.435a.75.75 0 0 1-.071-1.059Zm.018-1.738a.75.75 0 0 1-1.401 0l-3.25-8.495a.75.75 0 1 1 1.401-.536L14 9.15l2.55-6.664a.75.75 0 1 1 1.4.536l-3.25 8.495Z"
      />
    </svg>
  );
}
export default FontSpaceTrackingOutFilled;
