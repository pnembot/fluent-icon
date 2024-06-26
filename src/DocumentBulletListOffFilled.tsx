import type { SVGProps } from "react";

export function DocumentBulletListOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4.707L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-1.159-1.16A1.5 1.5 0 0 1 14.5 18h-9A1.5 1.5 0 0 1 4 16.5V4.707ZM13.293 14H8.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .468-.325L13.293 14Zm-1-1l-1-1H8.5a.5.5 0 0 0 0 1h3.793Zm-2-2l-1-1H8.5a.5.5 0 0 0 0 1h1.793Zm3.207 0h-.379L16 13.879V8h-4.5A1.5 1.5 0 0 1 10 6.5V2H5.5c-.383 0-.733.144-.998.38l7.62 7.62H13.5a.5.5 0 0 1 0 1ZM6 10.5a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0Zm0 2a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0Zm0 2a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0Zm5-8V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default DocumentBulletListOffFilled;
