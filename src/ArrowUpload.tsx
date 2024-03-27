import type { SVGProps } from "react";

export function ArrowUpload(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15 3.002a.5.5 0 0 0 .09-.992L15 2.002H4a.5.5 0 0 0-.09.992l.09.008h11ZM9.5 18a.5.5 0 0 0 .492-.41L10 17.5L9.996 5.706l3.645 3.648a.5.5 0 0 0 .638.059l.07-.058a.5.5 0 0 0 .058-.638l-.058-.07l-4.492-4.5a.498.498 0 0 0-.255-.136L9.496 4a.499.499 0 0 0-.395.194L4.644 8.647a.5.5 0 0 0 .637.765l.07-.057l3.645-3.641L9 17.5a.5.5 0 0 0 .5.5Z"
      />
    </svg>
  );
}
export default ArrowUpload;
