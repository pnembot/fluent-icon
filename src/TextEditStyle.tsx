import type { SVGProps } from "react";

export function TextEditStyle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.087 6.703a2.263 2.263 0 0 1 3.07-.126l.13.12l.126.137a2.277 2.277 0 0 1 0 2.951l-.12.13l-6.876 6.903a1.5 1.5 0 0 1-.547.35l-.157.048l-3.086.76a.5.5 0 0 1-.618-.526l.015-.084l.792-3.07a1.5 1.5 0 0 1 .283-.566l.106-.119l6.882-6.908Zm2.494.702a1.263 1.263 0 0 0-1.683-.088l-.102.092l-6.882 6.908a.499.499 0 0 0-.1.145l-.03.083l-.583 2.26l2.273-.56a.502.502 0 0 0 .113-.043l.052-.031l.07-.058l6.875-6.903a1.277 1.277 0 0 0-.003-1.805ZM6.424 2.23l.042.084l2.982 7.63l-.772.774l-.672-1.719H4.007l-1.04 2.68a.5.5 0 0 1-.561.31l-.087-.025a.5.5 0 0 1-.31-.56l.025-.087l3.5-9.002a.5.5 0 0 1 .89-.085Zm-.423 1.64L4.396 7.998h3.218L6.001 3.871Z"
      />
    </svg>
  );
}
export default TextEditStyle;
