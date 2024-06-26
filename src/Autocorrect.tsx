import type { SVGProps } from "react";

export function Autocorrect(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.144 5.484a1 1 0 0 1 1.712 0l2.127 3.517H12.5a.506.506 0 0 0-.067.004a3.75 3.75 0 1 0 2.366.996H17.5a.5.5 0 0 0 0-1h-3.348l-2.44-4.034c-.779-1.287-2.645-1.287-3.423 0L2.072 15.242a.5.5 0 0 0 .856.518L9.144 5.484Zm3.106 4.517a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 0 1 0-5.5Z"
      />
    </svg>
  );
}
export default Autocorrect;
