import type { SVGProps } from "react";

export function StarSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.898 2.9a1 1 0 0 0-1.794 0l-1.93 3.91l-4.317.628a1 1 0 0 0-.554 1.706l3.124 3.044l-.738 4.3a1 1 0 0 0 1.451 1.054l3.05-1.604a5.5 5.5 0 0 1 7.96-6.259l.549-.535a1 1 0 0 0-.554-1.706l-4.317-.627l-1.93-3.912Zm-.263 11.02l-.461.118a4.737 4.737 0 0 0 .01 1.017l.35.082a2 2 0 0 1 1.455 2.52l-.126.422c.257.203.537.377.835.518l.325-.344a2 2 0 0 1 2.91.001l.337.358c.292-.135.567-.302.821-.497l-.156-.557a2 2 0 0 1 1.43-2.478l.461-.118a4.731 4.731 0 0 0-.01-1.016l-.349-.083a2 2 0 0 1-1.456-2.519l.126-.422a4.322 4.322 0 0 0-.834-.518l-.325.344a2 2 0 0 1-2.91-.002l-.337-.358a4.31 4.31 0 0 0-.822.498l.156.556a2 2 0 0 1-1.43 2.478Zm4.865.58a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
      />
    </svg>
  );
}
export default StarSettingsFilled;
