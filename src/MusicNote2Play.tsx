import type { SVGProps } from "react";

export function MusicNote2Play(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.702 2.226A1 1 0 0 1 16 3.18v6.027a5.479 5.479 0 0 0-1-.184V6.18L8 8.368V15.5a2.5 2.5 0 1 1-1-2V5.368a1 1 0 0 1 .702-.955l7-2.187ZM8 7.32l7-2.187V3.18L8 5.368V7.32ZM5.5 14a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm13.5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.265-.436l-2.994-1.65a.5.5 0 0 0-.741.438v3.3a.5.5 0 0 0 .741.438l2.994-1.65a.5.5 0 0 0 0-.876Z"
      />
    </svg>
  );
}
export default MusicNote2Play;
