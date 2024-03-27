import type { SVGProps } from "react";

export function DocumentTarget(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="m9.647 1.439l2.914 2.914l.001-.001c.281.282.439.663.439 1.061v7.586a2 2 0 0 1-2 2H7.258l.133-.1a2.39 2.39 0 0 0 .281-.229c.203-.203.374-.434.534-.671h2.795a1 1 0 0 0 1-1v-7h-2.5a1.5 1.5 0 0 1-1.5-1.5v-2.5h-3a1 1 0 0 0-1 1v3.092a1.483 1.483 0 0 0-.983 1.177l-.01.004A.053.053 0 0 1 3 7.276V3a2 2 0 0 1 2-2h3.586a1.5 1.5 0 0 1 1.061.439ZM9 4.499a.5.5 0 0 0 .5.5h2.293L9 2.206v2.293Zm-4.5 8a1 1 0 1 0 .002-2.001a1 1 0 0 0-.002 2.001Zm4-1.5h-.551A3.486 3.486 0 0 0 5 8.05v-.551a.5.5 0 1 0-1 0v.551a3.487 3.487 0 0 0-2.949 2.949H.5a.5.5 0 1 0 0 1h.551A3.487 3.487 0 0 0 4 14.948v.551a.5.5 0 1 0 1 0v-.551a3.487 3.487 0 0 0 2.949-2.949H8.5a.5.5 0 1 0 0-1Zm-2.232 2.268a2.501 2.501 0 0 1-4.078-2.724a2.501 2.501 0 1 1 4.078 2.724Z"
      />
    </svg>
  );
}
export default DocumentTarget;
