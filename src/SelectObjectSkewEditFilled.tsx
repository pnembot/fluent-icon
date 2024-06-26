import type { SVGProps } from "react";

export function SelectObjectSkewEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15 4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Zm-13 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Zm4-11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Zm3.886.75h4.229a2.498 2.498 0 0 1 0-1.5h-4.23a2.499 2.499 0 0 1 0 1.5ZM3.61 13.002l2.37-6.517c.394.302.88.49 1.41.513l-2.37 6.517a2.488 2.488 0 0 0-1.41-.513Zm2.276 3.248h3.522l.024-.095c.117-.467.337-.901.644-1.27c.012-.046.025-.09.039-.135h-4.23a2.5 2.5 0 0 1 0 1.5ZM16.39 6.998l-.92 2.532a2.888 2.888 0 0 0-.368.31l-2.109 2.11l1.987-5.465c.394.302.88.49 1.41.513Zm-5.41 8.38l4.83-4.83a1.87 1.87 0 1 1 2.644 2.645l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.18 2.18 0 0 1 .578-1.02Z"
      />
    </svg>
  );
}
export default SelectObjectSkewEditFilled;
