import type { SVGProps } from "react";

export function DocumentPageBottomCenter(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m8.072 15.444l.065-.442H7.5a.5.5 0 1 1 0-1h.784l.22-1.5H8a.5.5 0 1 1 0-1h.65l.157-1.074a.5.5 0 0 1 .99.144l-.137.93h1.24l.157-1.074a.5.5 0 0 1 .99.144l-.136.93h.589a.5.5 0 0 1 0 1h-.736l-.22 1.5H12a.5.5 0 0 1 0 1h-.602l-.086.587a.5.5 0 1 1-.99-.145l.065-.442h-1.24l-.085.587a.5.5 0 1 1-.99-.145Zm2.681-2.942H9.514l-.22 1.5h1.24l.22-1.5ZM6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6Zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
}
export default DocumentPageBottomCenter;
