import type { SVGProps } from "react";

export function PersonSupportFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.53 4.008a4 4 0 1 1-.144 3.708a1.493 1.493 0 0 1-.884.288h-.5v.255c0 .19.072.363.19.494a.749.749 0 0 1 1.31.498a.75.75 0 0 1-.822.746a1.739 1.739 0 0 1-1.678-1.738V4.507a.5.5 0 0 1 .5-.5h2l.028.001ZM5.002 7.004h.5a.5.5 0 0 0 .5-.5v-.37a4.077 4.077 0 0 1 0-.268v-.859h-1v1.997ZM3 13c0-1.113.903-2 2.009-2H15a2 2 0 0 1 2 2c0 1.691-.833 2.966-2.135 3.797C13.583 17.614 11.855 18 10 18c-1.855 0-3.583-.386-4.865-1.203C3.833 15.967 3 14.69 3 13Z"
      />
    </svg>
  );
}
export default PersonSupportFilled;
