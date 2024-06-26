import type { SVGProps } from "react";

export function ProhibitedNote(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 10c0 .057 0 .114-.002.17A2.993 2.993 0 0 0 17 10a6.973 6.973 0 0 0-1.71-4.584l-9.874 9.875A6.972 6.972 0 0 0 9 16.929V17c0 .334.055.656.156.956A8.001 8.001 0 1 1 18 10ZM4.71 14.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM12 11a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-5Zm.5 5h4a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1Zm-.5-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default ProhibitedNote;
