import type { SVGProps } from "react";

export function PanelRightCursor(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h5.001v-1H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6.5v5a1.5 1.5 0 0 1 1 .379V4H15a2 2 0 0 1 2 2v7c0 .249-.046.487-.129.707l.754.747c.239-.43.375-.927.375-1.454V6Zm-6.144 4.146a.5.5 0 0 0-.852.354l-.004 8a.5.5 0 0 0 .9.301l1.994-2.647l3.497.776a.5.5 0 0 0 .46-.843l-5.995-5.94Z"
      />
    </svg>
  );
}
export default PanelRightCursor;
