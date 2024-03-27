import type { SVGProps } from "react";

export function ChatSettings(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 3a7 7 0 0 0-6.107 10.425a.5.5 0 0 1 .05.366l-.756 3.022l3.022-.756a.5.5 0 0 1 .366.05a6.957 6.957 0 0 0 3.019.881c.183.361.405.699.66 1.008a7.967 7.967 0 0 1-3.992-.921l-3.64.91a.5.5 0 0 1-.607-.606l.91-3.641a8 8 0 1 1 15.07-3.484a5.51 5.51 0 0 0-1.007-.66A7 7 0 0 0 10 3Zm2.065 8.442a2 2 0 0 1-1.43 2.478l-.461.118a4.737 4.737 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.455 2.519l-.126.423c.257.203.537.377.835.517l.325-.344a2 2 0 0 1 2.91.002l.337.358a4.29 4.29 0 0 0 .821-.498l-.156-.556a2 2 0 0 1 1.43-2.478l.461-.118a4.731 4.731 0 0 0-.01-1.017l-.349-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.322 4.322 0 0 0-.834-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.31 4.31 0 0 0-.822.497l.156.557ZM14.5 15.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default ChatSettings;
