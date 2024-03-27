import type { SVGProps } from "react";

export function TextAlignDistributedVertical(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.854 4.854a.5.5 0 0 1-.708 0L16 3.707V17.5a.5.5 0 1 1-1 0V3.707l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708Zm-15 10.293a.5.5 0 1 0-.708.707l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 1 0-.708-.707L5 16.293V2.5a.5.5 0 0 0-1 0v13.793l-1.146-1.146ZM10 18a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5Z"
      />
    </svg>
  );
}
export default TextAlignDistributedVertical;
