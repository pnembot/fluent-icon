import type { SVGProps } from "react";

export function FaxFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 4.5A1.5 1.5 0 0 1 6.5 3h7A1.5 1.5 0 0 1 15 4.5V7h-1V4.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V8h5.5a2.49 2.49 0 0 0-.5 1.5v6c0 .563.186 1.082.5 1.5h-7A1.5 1.5 0 0 1 3 15.5V10a2 2 0 0 1 2-2V4.5Zm1.25 6.125a.625.625 0 1 0-1.25 0a.625.625 0 0 0 1.25 0Zm0 2.25a.625.625 0 1 0-1.25 0a.625.625 0 0 0 1.25 0Zm1.625-.5a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25Zm.625-1.75a.625.625 0 1 0-1.25 0a.625.625 0 0 0 1.25 0ZM13.5 8A1.5 1.5 0 0 0 12 9.5v6a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 15.5 8h-2Z"
      />
    </svg>
  );
}
export default FaxFilled;
