import type { SVGProps } from "react";

export function SlideRecord(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM5 10a.5.5 0 0 1 .5-.5h6.706a5.51 5.51 0 0 0-1.48 1H5.5A.5.5 0 0 1 5 10Zm4.6 2H5.5a.5.5 0 0 0 0 1h3.707c.099-.349.23-.683.393-1Zm-.578 3H4.5A1.5 1.5 0 0 1 3 13.5v-7A1.5 1.5 0 0 1 4.5 5h11A1.5 1.5 0 0 1 17 6.5v3.1c.358.183.693.404 1 .657V6.5A2.5 2.5 0 0 0 15.5 4h-11A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h4.707a5.48 5.48 0 0 1-.185-1Zm5.478 3a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7Zm0 1a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z"
      />
    </svg>
  );
}
export default SlideRecord;
