import type { SVGProps } from "react";

export function BorderRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Zm1.053 2.96a2.003 2.003 0 0 0 1.486 1.487a.508.508 0 0 1 .462.6a.509.509 0 0 1-.663.38a3.004 3.004 0 0 1-2.265-2.265a.509.509 0 0 1 .38-.663a.509.509 0 0 1 .6.462Zm10.609 2.467a.503.503 0 0 1-.664-.38a.509.509 0 0 1 .463-.6A2 2 0 0 0 16 14V6a2 2 0 0 0-1.54-1.947a.509.509 0 0 1-.463-.6a.509.509 0 0 1 .665-.38A3.001 3.001 0 0 1 17 6v8c0 1.43-1 2.625-2.338 2.927ZM3.054 5.41a.495.495 0 0 1 .02-.072a3.004 3.004 0 0 1 2.264-2.265a.509.509 0 0 1 .663.38a.509.509 0 0 1-.462.6A2.003 2.003 0 0 0 4.053 5.54a.509.509 0 0 1-.6.462a.509.509 0 0 1-.4-.591ZM12 3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5ZM11.5 17a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1h3Z"
      />
    </svg>
  );
}
export default BorderRight;
