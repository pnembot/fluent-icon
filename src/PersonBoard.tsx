import type { SVGProps } from "react";

export function PersonBoard(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 8.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2ZM6.5 9A1.5 1.5 0 0 0 5 10.5c0 .328.04 1.048.623 1.679c.587.633 1.622 1.071 3.375 1.071c1.751 0 2.788-.434 3.375-1.064c.587-.629.627-1.35.627-1.686A1.5 1.5 0 0 0 11.5 9h-5ZM6 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5c0 .252-.033.655-.358 1.004c-.324.348-1.039.746-2.644.746c-1.604 0-2.317-.401-2.64-.75c-.326-.352-.358-.756-.358-1ZM3 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Zm2 13a2.992 2.992 0 0 1-2.236-1H12.5a3.5 3.5 0 0 0 3.5-3.5V5.764c.614.55 1 1.348 1 2.236v4.5a4.5 4.5 0 0 1-4.5 4.5H8Z"
      />
    </svg>
  );
}
export default PersonBoard;
