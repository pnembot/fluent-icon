import type { SVGProps } from "react";

export function LockShield(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v1.232a4.558 4.558 0 0 1-.994-.802L15 8.424V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3.376c.119.349.267.683.446 1H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v1h4V5a2 2 0 0 0-2-2Zm5 6.764a4.64 4.64 0 0 0 1 .583a4.057 4.057 0 0 0 1.6.32c.193 0 .355.143.392.332l.008.084v2.501c0 2.682-1.313 4.506-3.873 5.395a.385.385 0 0 1-.254 0c-.725-.252-1.35-.579-1.873-.979a4.813 4.813 0 0 1-1.555-2c-.267-.636-.414-1.353-.44-2.15L10 13.584v-2.5c0-.23.18-.417.4-.417c1.223 0 2.323-.51 3.318-1.545a.389.389 0 0 1 .566 0c.232.243.471.457.716.642Z"
      />
    </svg>
  );
}
export default LockShield;
