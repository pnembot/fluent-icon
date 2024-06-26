import type { SVGProps } from "react";

export function ThumbLikeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.483 1.704c-.799-.837-2.092-.387-2.431.59c-.28.806-.644 1.772-.998 2.483c-1.06 2.126-1.678 3.335-3.384 4.849a2.84 2.84 0 0 1-.841.49c-1.13.446-2.19 1.616-1.913 3.005l.353 1.765a2.5 2.5 0 0 0 1.794 1.922l5.6 1.527a4.5 4.5 0 0 0 5.61-3.537l.685-3.761A3 3 0 0 0 14.006 7.5h-.883l.01-.052c.08-.409.176-.97.24-1.583c.065-.61.1-1.285.049-1.913c-.05-.616-.184-1.249-.504-1.73a4.158 4.158 0 0 0-.435-.518Z"
      />
    </svg>
  );
}
export default ThumbLikeFilled;
