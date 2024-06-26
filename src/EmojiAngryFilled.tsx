import type { SVGProps } from "react";

export function EmojiAngryFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0Zm6.5-1.5a.5.5 0 0 0 .26-.929l-2.503-1.5a.5.5 0 0 0-.514.858l1.217.73A1 1 0 1 0 8.5 8.5Zm5 0a1 1 0 0 0-.459-.841l1.216-.73a.5.5 0 0 0-.514-.858l-2.499 1.5a.5.5 0 0 0 .256.929a1 1 0 1 0 2 0Zm.062 4.89c.34-.308.067-.716.055-.73a2.877 2.877 0 0 0-.222-.225a4.064 4.064 0 0 0-.673-.49c-.6-.354-1.498-.695-2.72-.695c-1.222 0-2.121.34-2.722.694c-.3.176-.522.353-.674.49a2.878 2.878 0 0 0-.223.225c-.183.219-.178.545.054.73a.5.5 0 0 0 .7-.073l.003-.003a1.92 1.92 0 0 1 .138-.138a3.09 3.09 0 0 1 .508-.369c.463-.272 1.19-.556 2.216-.556c1.026 0 1.752.284 2.213.556c.233.137.4.272.507.369a1.942 1.942 0 0 1 .137.137l.003.003c.173.213.497.26.7.075Z"
      />
    </svg>
  );
}
export default EmojiAngryFilled;
