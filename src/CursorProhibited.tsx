import type { SVGProps } from "react";

export function CursorProhibited(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 5.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.485 3.485 0 0 1 11 5.5ZM14.5 9c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 14.5 9Zm2.506 3.122l-1.479-1.218c.4-.075.784-.194 1.148-.35l.967.796c.724.596.302 1.772-.636 1.772h-5.592a1.5 1.5 0 0 0-1.134.518l-3.524 4.073c-.606.7-1.756.271-1.756-.655V3.06a1 1 0 0 1 1.636-.772l2.487 2.048C9.043 4.71 9 5.1 9 5.5v.03L6 3.06v13.998l3.524-4.072a2.5 2.5 0 0 1 1.89-.864h5.592Z"
      />
    </svg>
  );
}
export default CursorProhibited;
