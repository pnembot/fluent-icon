import type { SVGProps } from "react";

export function Wand(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.5 2a.5.5 0 0 1 .5.5V3h.5a.5.5 0 0 1 0 1H17v.5a.5.5 0 0 1-1 0V4h-.5a.5.5 0 1 1 0-1h.5v-.5a.5.5 0 0 1 .5-.5Zm-10 4a.5.5 0 0 0 0-1H6v-.5a.5.5 0 0 0-1 0V5h-.5a.5.5 0 0 0 0 1H5v.5a.5.5 0 0 0 1 0V6h.5Zm9 9a.5.5 0 0 0 0-1H15v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 1 0 0 1h.5v.5a.5.5 0 1 0 1 0V15h.5Zm-2.066-8.434a1.914 1.914 0 0 0-2.707 0l-8.166 8.166a1.914 1.914 0 1 0 2.707 2.707l8.166-8.166a1.914 1.914 0 0 0 0-2.707Zm-2 .707a.914.914 0 0 1 1.293 1.293l-.477.477l-1.293-1.293l.477-.477ZM10.25 8.457l1.293 1.293l-6.982 6.982a.914.914 0 0 1-1.293-1.292l6.982-6.983Z"
      />
    </svg>
  );
}
export default Wand;
