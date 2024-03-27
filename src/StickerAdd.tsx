import type { SVGProps } from "react";

export function StickerAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6a5.465 5.465 0 0 0-1-.393V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.207c.099.349.23.683.393 1H6a3 3 0 0 1-3-3V6Zm4.974 6.553c.303.151.72.307 1.25.389a5.474 5.474 0 0 0-.194.982a5.22 5.22 0 0 1-1.503-.477a4.194 4.194 0 0 1-.64-.39a2.93 2.93 0 0 1-.217-.181l-.015-.014l-.005-.005l-.002-.002l-.002-.001a.5.5 0 0 1 .705-.71l.003.002l.022.02c.022.02.06.051.111.09c.104.078.266.187.487.297ZM7.5 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm6-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm5.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default StickerAdd;
