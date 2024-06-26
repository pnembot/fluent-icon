import type { SVGProps } from "react";

export function ImageArrowCounterclockwise(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 10a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-2-5h-.005A.5.5 0 0 1 3 4.372V3a.5.5 0 0 1 1 0v.195a2.75 2.75 0 1 1-.55 4.139a.5.5 0 0 1 .745-.667A1.75 1.75 0 1 0 4.597 4H5a.5.5 0 0 1 0 1H3.5ZM3 10.4c.317.162.651.294 1 .393V14c0 .373.102.722.28 1.02l4.669-4.588a1.5 1.5 0 0 1 2.102 0l4.67 4.588A1.99 1.99 0 0 0 16 14V6a2 2 0 0 0-2-2h-3.207a5.466 5.466 0 0 0-.393-1H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3.6Zm11-2.9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0Zm-8.012 8.226A1.99 1.99 0 0 0 6 16h8c.37 0 .715-.1 1.012-.274l-4.662-4.58a.5.5 0 0 0-.7 0l-4.662 4.58Z"
      />
    </svg>
  );
}
export default ImageArrowCounterclockwise;
