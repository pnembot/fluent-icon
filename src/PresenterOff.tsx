import type { SVGProps } from "react";

export function PresenterOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 8.5c0-.232.052-.45.146-.647l-5-5a.5.5 0 1 1 .708-.707l15 15a.5.5 0 0 1-.708.708l-3.706-3.706l-.287.276a.5.5 0 0 0-.153.36V16.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 7 16.5v-1.716a.5.5 0 0 0-.153-.36L3.144 10.86A.5.5 0 0 1 3.49 10h5.802l-1-1H7v-.5Zm3.293 2.5H4.73l2.81 2.703A1.5 1.5 0 0 1 8 14.784V16.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1.716a1.5 1.5 0 0 1 .46-1.08l.273-.264l-2.44-2.44ZM12 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-1 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-.879 4H11.5a.5.5 0 0 1 .5.5V9h1v-.5A1.5 1.5 0 0 0 11.5 7H9.121l1 1Zm4.76 4.76l-.707-.707L15.27 11h-2.15l-1-1h4.388a.5.5 0 0 1 .347.86l-1.974 1.9Z"
      />
    </svg>
  );
}
export default PresenterOff;
