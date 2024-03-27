import type { SVGProps } from "react";

export function DocumentPageBottomLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m7.247 14.498l.22-1.5h1.239l-.22 1.5h-1.24ZM14.5 18a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 2h-9A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h9Zm-4.572-6.444l-.065.442h.637a.5.5 0 0 1 0 1h-.784l-.22 1.5H10a.5.5 0 0 1 0 1h-.65l-.157 1.074a.5.5 0 0 1-.99-.145l.137-.93H7.1l-.157 1.075a.5.5 0 0 1-.99-.145l.137-.93H5.5a.5.5 0 0 1 0-1h.736l.22-1.5H6a.5.5 0 0 1 0-1h.602l.086-.586a.5.5 0 0 1 .99.145l-.065.442h1.24l.085-.587a.5.5 0 0 1 .99.145Z"
      />
    </svg>
  );
}
export default DocumentPageBottomLeftFilled;
