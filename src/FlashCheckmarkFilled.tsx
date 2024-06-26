import type { SVGProps } from "react";

export function FlashCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.211 2c-.474 0-.891.314-1.021.77l-2.25 7.874a1.062 1.062 0 0 0 1.021 1.354H6.23l-1.17 4.68c-.264 1.055 1.04 1.777 1.795.995l2.22-2.267a5.5 5.5 0 0 1 6.22-6.35l.237-.24l.003-.005c.641-.667.18-1.811-.766-1.811h-2.564l1.261-3.594l.003-.008A1.062 1.062 0 0 0 12.46 2H7.211ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default FlashCheckmarkFilled;
