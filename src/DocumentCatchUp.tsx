import type { SVGProps } from "react";

export function DocumentCatchUp(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v4.5a.5.5 0 0 0 1 0V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3H4v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6Zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7ZM7.462 8.308a.5.5 0 0 0-.91-.032L5.192 11H3.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .447-.276L6.96 9.7l2.08 4.991a.5.5 0 0 0 .908.032L11.31 12h1.19a.5.5 0 0 0 0-1H11a.5.5 0 0 0-.447.276L9.54 13.3L7.46 8.309Z"
      />
    </svg>
  );
}
export default DocumentCatchUp;
