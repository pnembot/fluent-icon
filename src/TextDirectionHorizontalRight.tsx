import type { SVGProps } from "react";

export function TextDirectionHorizontalRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 3a.5.5 0 0 1 .468.324l3 8a.5.5 0 0 1-.936.352L8.029 9H4.972l-1.004 2.676a.5.5 0 0 1-.936-.352l3-8A.5.5 0 0 1 6.5 3Zm0 1.924L5.347 8h2.307L6.5 4.924Zm8.354-.778a.5.5 0 1 0-.707.708L15.293 6H10.5a.5.5 0 0 0 0 1h4.793l-1.146 1.146a.5.5 0 1 0 .707.708l2-2a.5.5 0 0 0 0-.708l-2-2Zm0 8a.5.5 0 0 0-.707.708L15.293 14H3.5a.5.5 0 0 0 0 1h11.793l-1.146 1.146a.5.5 0 0 0 .707.708l2-2a.5.5 0 0 0 0-.708l-2-2Z"
      />
    </svg>
  );
}
export default TextDirectionHorizontalRight;
