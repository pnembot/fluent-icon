import type { SVGProps } from "react";

export function ClearFormatting(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.25 3a.5.5 0 0 0-.493.418l-.25 1.5a.5.5 0 0 0 .986.164L4.673 4h3.57l-1.736 9.914A.504.504 0 0 0 6.5 14h-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-.992l1.735-9.914A.504.504 0 0 0 9.25 4h3.41l-.153.918a.5.5 0 1 0 .986.164l.25-1.5A.5.5 0 0 0 13.25 3h-9ZM9.6 17a5.465 5.465 0 0 1-.393-1H2.5a.5.5 0 0 0 0 1h7.1Zm9.4-2.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.646-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5l1.147-1.146Z"
      />
    </svg>
  );
}
export default ClearFormatting;
