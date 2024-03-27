import type { SVGProps } from "react";

export function BookToolbox(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 3v-.5A1.5 1.5 0 0 1 13.5 1h2A1.5 1.5 0 0 1 17 2.5V3h.5A1.5 1.5 0 0 1 19 4.5V6h-2v-.5a.5.5 0 0 0-1 0V6h-3v-.5a.5.5 0 0 0-1 0V6h-2V4.5A1.5 1.5 0 0 1 11.5 3h.5Zm3.5-1h-2a.5.5 0 0 0-.5.5V3h3v-.5a.5.5 0 0 0-.5-.5ZM17 7h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 10 8.5V7h2v.5a.5.5 0 0 0 1 0V7h3v.5a.5.5 0 0 0 1 0V7ZM6 2h5.05a2.867 2.867 0 0 0-.008.042A2.5 2.5 0 0 0 9.5 3H6a1 1 0 0 0-1 1v11.001h10.004V11h1v4.501a.5.5 0 0 1-.5.5H5A1 1 0 0 0 6 17h9.504a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}
export default BookToolbox;
