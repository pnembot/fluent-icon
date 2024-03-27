import type { SVGProps } from "react";

export function InprivateAccountFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a4 4 0 1 0 3.123 6.5H10v-1h3.71c.127-.315.215-.65.26-1H10v-1h3.97a3.973 3.973 0 0 0-.26-1H10v-1h3.123A3.993 3.993 0 0 0 10 2Zm-4.991 9A2.001 2.001 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18c1.694 0 3.282-.322 4.52-1H10v-1h5.836c.283-.3.522-.636.708-1.005H10v-1h6.896A4.69 4.69 0 0 0 17 13v-.005h-7v-1h6.73A2 2 0 0 0 15 11H5.009Z"
      />
    </svg>
  );
}
export default InprivateAccountFilled;
