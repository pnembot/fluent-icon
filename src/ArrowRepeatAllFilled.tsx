import type { SVGProps } from "react";

export function ArrowRepeatAllFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.75 6.01c.18 0 .344.063.473.168a5 5 0 0 1-3.004 8.818l-.216.004H8.56l1.22 1.22a.75.75 0 0 1 .072.976l-.072.084a.75.75 0 0 1-.977.073l-.084-.073l-2.5-2.5a.75.75 0 0 1-.072-.976l.072-.084l2.5-2.5a.75.75 0 0 1 1.133.976l-.072.084l-1.22 1.22h4.442a3.5 3.5 0 0 0 3.495-3.308l.005-.192c0-1.081-.49-2.048-1.26-2.69a.75.75 0 0 1 .508-1.3Zm-5.53-3.29a.75.75 0 0 1 .977-.073l.084.073l2.5 2.5l.072.084a.75.75 0 0 1 .008.882l-.08.094l-2.5 2.5l-.084.073a.75.75 0 0 1-.883.007l-.094-.08l-.072-.084a.75.75 0 0 1-.008-.882l.08-.094l1.22-1.22H7a3.5 3.5 0 0 0-3.496 3.308L3.498 10c0 1.083.492 2.051 1.265 2.693a.75.75 0 0 1-1.01 1.107a5 5 0 0 1 3.029-8.796L6.997 5h4.441L10.22 3.78l-.072-.084a.75.75 0 0 1 .072-.976Z"
      />
    </svg>
  );
}
export default ArrowRepeatAllFilled;
