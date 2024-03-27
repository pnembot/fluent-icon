import type { SVGProps } from "react";

export function WindowInprivateAccountFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5V6H3.003v1H15a3.5 3.5 0 0 0-2.45 6c-.816 0-1.461.412-1.864.864A2.678 2.678 0 0 0 10 15.62v.32c0 .372.056.726.16 1.06H5.5A2.5 2.5 0 0 1 3 14.5v-9ZM15 13a2.5 2.5 0 1 1 2-4h-2v1h2.45a2.512 2.512 0 0 1 0 1H15v1h2c-.456.607-1.182 1-2 1Zm-2.45 1c-.465 0-.855.235-1.116.529c-.26.291-.434.686-.434 1.091v.32c0 1.634 1.633 3.06 4 3.06c1.24 0 2.28-.392 2.988-1H15v-1h3.761a2.48 2.48 0 0 0 .238-1H15v-1h3.867a1.779 1.779 0 0 0-.3-.471c-.262-.294-.652-.529-1.117-.529h-4.9Z"
      />
    </svg>
  );
}
export default WindowInprivateAccountFilled;
