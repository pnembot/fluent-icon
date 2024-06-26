import type { SVGProps } from "react";

export function SyncOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.938 9h-5.632l.675-2.363a.5.5 0 0 0-.962-.274l-2 7a.5.5 0 0 0 .962.274L12.02 10H18a8 8 0 0 1-16 0h5.98l-.96 3.363a.5.5 0 0 0 .96.274l2-7a.5.5 0 0 0-.96-.274L8.265 9H2.062a8.001 8.001 0 0 1 15.876 0Z"
      />
    </svg>
  );
}
export default SyncOffFilled;
