import type { SVGProps } from "react";

export function VaultFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Zm8.854.646a.5.5 0 0 0-.708 0l-.63.63A1.99 1.99 0 0 0 12 8c-.37 0-.718.101-1.016.277l-.63-.63a.5.5 0 0 0-.708.707l.63.63A1.991 1.991 0 0 0 10 10c0 .37.101.718.277 1.016l-.63.63a.5.5 0 0 0 .707.708l.63-.63a2 2 0 0 0 2.032-.001l.63.63a.5.5 0 0 0 .708-.707l-.63-.63a2 2 0 0 0-.001-2.032l.63-.63a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default VaultFilled;
