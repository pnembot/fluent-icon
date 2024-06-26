import type { SVGProps } from "react";

export function VoicemailSubtract(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 9.6V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.022a5.5 5.5 0 0 0 .185 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.257a5.503 5.503 0 0 0-1-.657ZM9 10a1.99 1.99 0 0 0-.268-1h2.536a1.99 1.99 0 0 0-.253 1.245a5.51 5.51 0 0 1 1.094-.7a1 1 0 0 1 1.331-.443a5.529 5.529 0 0 1 1.295-.097A2 2 0 0 0 13 8H7a2 2 0 1 0 2 2Zm-2 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm12 3.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-7 0a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default VoicemailSubtract;
