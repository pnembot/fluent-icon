import type { SVGProps } from "react";

export function BorderTop(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.5 17a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1h3Zm2.96-1.053a2.003 2.003 0 0 0 1.487-1.486a.508.508 0 0 1 .6-.462a.509.509 0 0 1 .38.663a3.004 3.004 0 0 1-2.265 2.265a.509.509 0 0 1-.663-.38a.508.508 0 0 1 .462-.6Zm2.467-10.609a.504.504 0 1 1-.98.201A2 2 0 0 0 14 4H6a2 2 0 0 0-1.947 1.54a.509.509 0 0 1-.6.463a.509.509 0 0 1-.38-.665A3.001 3.001 0 0 1 6 3h8c1.43 0 2.625 1 2.927 2.338ZM5.41 16.946a.494.494 0 0 1-.072-.02a3.004 3.004 0 0 1-2.265-2.264a.509.509 0 0 1 .38-.663a.509.509 0 0 1 .6.462a2.003 2.003 0 0 0 1.486 1.486a.506.506 0 0 1 .463.6a.509.509 0 0 1-.592.4ZM3.5 8a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5Zm13.5.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Z"
      />
    </svg>
  );
}
export default BorderTop;
