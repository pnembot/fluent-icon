import type { SVGProps } from "react";

export function PlugConnected(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.854 2.854a.5.5 0 0 0-.708-.708l-2.668 2.669a4.036 4.036 0 0 0-5.332.331l-.3.3a1.49 1.49 0 0 0 0 2.108l3.6 3.6a1.49 1.49 0 0 0 2.107 0l.3-.3a4.036 4.036 0 0 0 .332-5.332l2.669-2.668Zm-4.008 7.592a.49.49 0 0 1-.693 0l-3.6-3.6a.49.49 0 0 1 0-.692l.3-.3a3.036 3.036 0 0 1 4.293 4.292l-.3.3Zm-6.292-1.6a1.49 1.49 0 0 0-2.107 0l-.3.3a4.036 4.036 0 0 0-.332 5.332l-2.669 2.668a.5.5 0 0 0 .708.708l2.668-2.669a4.036 4.036 0 0 0 5.332-.332l.3-.3a1.49 1.49 0 0 0 0-2.107l-3.6-3.6Zm-1.4.708a.49.49 0 0 1 .693 0l3.6 3.6a.49.49 0 0 1 0 .692l-.3.3a3.035 3.035 0 1 1-4.293-4.292l.3-.3Z"
      />
    </svg>
  );
}
export default PlugConnected;
