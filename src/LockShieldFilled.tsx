import type { SVGProps } from "react";

export function LockShieldFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v1.232a4.558 4.558 0 0 1-.994-.802a1.389 1.389 0 0 0-2.01 0c-.84.874-1.69 1.237-2.596 1.237c-.811 0-1.4.673-1.4 1.416v2.51l.005.282v.008c.038 1.154.303 2.204.817 3.117H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v1h2V5a1 1 0 0 0-1-1Zm4.284 5.122c.54.563 1.11.97 1.716 1.225a4.057 4.057 0 0 0 1.6.32c.193 0 .355.143.392.332l.008.084v2.501c0 2.682-1.313 4.506-3.873 5.395a.385.385 0 0 1-.254 0c-.725-.252-1.35-.579-1.873-.979a4.96 4.96 0 0 1-.99-1c-.627-.85-.964-1.903-1.006-3.15L10 13.584v-2.5c0-.23.18-.417.4-.417c1.223 0 2.323-.51 3.318-1.545a.389.389 0 0 1 .566 0Z"
      />
    </svg>
  );
}
export default LockShieldFilled;
