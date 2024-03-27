import type { SVGProps } from "react";

export function PaintBrushArrowUp(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 4v3.5a.5.5 0 0 1-.5.5H7a1 1 0 0 0-1 1v1h8V9a1 1 0 0 0-1-1h-1.5a.5.5 0 0 1-.5-.5V4a1 1 0 1 0-2 0Zm6 5v1.47a.566.566 0 0 1 0 .06v1.555a1.506 1.506 0 0 0-1 0V11H6v.5A13.565 13.565 0 0 1 4.811 17h1.373l.017-.038c.091-.197.213-.47.334-.773c.121-.303.24-.63.327-.936c.09-.313.137-.573.137-.753a.5.5 0 0 1 1 0c0 .32-.078.685-.175 1.028c-.1.35-.232.711-.36 1.033c-.063.156-.125.304-.184.439h1.237a9.16 9.16 0 0 0 .182-.416c.168-.412.297-.83.297-1.084a.5.5 0 0 1 1 0c0 .471-.205 1.053-.37 1.46L9.61 17H13v1H4a.5.5 0 0 1-.43-.756l.003-.004l.01-.017l.042-.076a7.56 7.56 0 0 0 .16-.311A12.566 12.566 0 0 0 5 11.5V9a2 2 0 0 1 2-2h1V4a2 2 0 0 1 4 0v3h1a2 2 0 0 1 2 2Zm0 5.707V18.5a.5.5 0 0 1-1 0v-3.793l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L15 14.707Z"
      />
    </svg>
  );
}
export default PaintBrushArrowUp;
