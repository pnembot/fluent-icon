import type { SVGProps } from "react";

export function FlashAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.213 2c-.474 0-.891.314-1.021.77l-2.25 7.874a1.062 1.062 0 0 0 1.021 1.354h1.268l-1.17 4.68c-.264 1.055 1.04 1.777 1.795.995l2.219-2.265a5.5 5.5 0 0 1 6.221-6.35l.237-.243l.003-.004c.641-.667.18-1.811-.766-1.811h-2.564l1.261-3.594l.003-.008A1.062 1.062 0 0 0 12.462 2H7.213ZM17 18.242a4.5 4.5 0 1 1-5-7.484a4.5 4.5 0 0 1 5 7.484Zm-2.146-6.096A.5.5 0 0 0 14 12.5V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.146-.354Z"
      />
    </svg>
  );
}
export default FlashAddFilled;
