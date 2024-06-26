import type { SVGProps } from "react";

export function PanelLeftTextDismiss(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.59 6.992A.5.5 0 0 0 6.5 6h-2l-.09.008A.5.5 0 0 0 4.5 7h2l.09-.008Zm0 3A.5.5 0 0 0 6.5 9h-2l-.09.008A.5.5 0 0 0 4.5 10h2l.09-.008ZM7 12.5a.5.5 0 0 1-.41.492L6.5 13h-2a.5.5 0 0 1-.09-.992L4.5 12h2a.5.5 0 0 1 .5.5ZM5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.207a5.48 5.48 0 0 1-.185-1H9V4h6a2 2 0 0 1 2 2v3.6c.358.183.693.404 1 .657V6a3 3 0 0 0-3-3H5Zm0 1h3v11H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm14 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-3.793 0l1.147-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5Z"
      />
    </svg>
  );
}
export default PanelLeftTextDismiss;
