import type { SVGProps } from "react";

export function WindowShieldFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.003 5.753a2.75 2.75 0 0 1 2.75-2.75h8.5a2.75 2.75 0 0 1 2.75 2.75v2.859c-.513-.098-1.01-.33-1.5-.723V7h-11v7.253c0 .69.56 1.25 1.25 1.25h3.82a5.79 5.79 0 0 0 .964 1.5H5.753a2.75 2.75 0 0 1-2.75-2.75v-8.5Zm12.5 3.347a4.134 4.134 0 0 0 2.097.567c.194 0 .355.143.392.333l.008.084v2.5c0 2.683-1.313 4.506-3.873 5.395a.385.385 0 0 1-.253 0c-.724-.251-1.348-.577-1.87-.976a4.85 4.85 0 0 1-1.314-1.5c-.422-.753-.652-1.639-.685-2.653L10 12.585v-2.501c0-.23.18-.417.4-.417c1.224 0 2.324-.51 3.318-1.545a.389.389 0 0 1 .566 0c.39.407.795.732 1.219.978Z"
      />
    </svg>
  );
}
export default WindowShieldFilled;
