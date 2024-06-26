import type { SVGProps } from "react";

export function EmojiSadFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0Zm5.5-.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm6-1a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm.062 4.89c.376-.35.067-.716.055-.73a2.907 2.907 0 0 0-.222-.225a4.065 4.065 0 0 0-.673-.49c-.6-.354-1.498-.695-2.72-.695c-1.222 0-2.121.34-2.722.694c-.3.175-.522.353-.674.49a2.912 2.912 0 0 0-.223.225l-.014.018l-.005.006l-.002.002l-.001.001l.389.314l-.39-.313a.5.5 0 0 0 .777.629l.003-.003a1.92 1.92 0 0 1 .138-.137c.107-.098.275-.233.508-.37c.463-.272 1.19-.556 2.216-.556c1.026 0 1.752.284 2.213.556c.233.137.4.272.507.369a1.91 1.91 0 0 1 .137.137l.003.003a.5.5 0 0 0 .7.075Z"
      />
    </svg>
  );
}
export default EmojiSadFilled;
