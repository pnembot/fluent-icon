import React, { SVGProps } from "react";

export function ArrowSyncOff(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.414 3.635a.5.5 0 0 0 0-.707L9.293.807a.5.5 0 0 0-.707.707l.997.997a7.48 7.48 0 0 0-3.72 1.23l.724.724a6.49 6.49 0 0 1 3.48-.966c.024 0 .05-.001.073-.004L8.586 5.049a.5.5 0 0 0 .707.707l2.121-2.121Zm-7.06 1.426a7.5 7.5 0 0 0 1.154 10.945a.5.5 0 0 0 .6-.8A6.5 6.5 0 0 1 5.063 5.77l9.165 9.165A6.479 6.479 0 0 1 9.934 16.5a.502.502 0 0 0-.074.004l1.554-1.554a.5.5 0 1 0-.707-.707l-2.121 2.121a.5.5 0 0 0 0 .707l2.121 2.121a.5.5 0 0 0 .707-.707l-.997-.997a7.471 7.471 0 0 0 4.521-1.843l2.208 2.209a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 1 0-.708.708L4.355 5.06Zm10.95-.365a7.503 7.503 0 0 1 .954 9.44l-.724-.724a6.503 6.503 0 0 0-1.641-8.62a.5.5 0 1 1 .6-.8c.282.212.553.447.81.704Z"
      />
    </svg>
  );
}
export default ArrowSyncOff;
