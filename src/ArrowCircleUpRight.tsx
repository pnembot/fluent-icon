import type { SVGProps } from "react";

export function ArrowCircleUpRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.851 7.144A.498.498 0 0 0 12.5 7h-5a.5.5 0 0 0 0 1h3.793l-4.147 4.146a.5.5 0 0 0 .708.708L12 8.707V12.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.144-.351l-.005-.005ZM10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16Zm7 8a7 7 0 1 0-14 0a7 7 0 0 0 14 0Z"
      />
    </svg>
  );
}
export default ArrowCircleUpRight;
