import type { SVGProps } from "react";

export function TextUnderlineDoubleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.965 2.977c.523.258.917.738 1.178 1.468a.75.75 0 1 1-1.411.506c-.168-.468-.345-.587-.43-.628c-.124-.062-.272-.073-.583-.073c-.244 0-.389.075-.494.17c-.12.107-.226.275-.307.494a2.812 2.812 0 0 0-.166.83a2.492 2.492 0 0 0-.002.052v.01c0 .406.008.89.164 1.289c.072.186.168.326.29.427c.116.097.297.19.598.223c.092.01.29.01.483-.062a.801.801 0 0 0 .469-.454a.75.75 0 0 1 1.367.616c-.636 1.411-2.034 1.441-2.485 1.391c-.559-.062-1.023-.256-1.389-.559a2.51 2.51 0 0 1-.73-1.037c-.267-.683-.267-1.425-.267-1.807v-.074l.005-.094a4.47 4.47 0 0 1 .257-1.275c.133-.357.35-.765.714-1.09a2.19 2.19 0 0 1 1.493-.55h.035c.273 0 .748-.001 1.211.227ZM5.393 3.25a.75.75 0 0 0-1.407-.02l-1.935 5a.75.75 0 1 0 1.399.542l.104-.271h2.11l.09.25a.75.75 0 0 0 1.413-.5l-1.774-5ZM5.132 7h-.997l.52-1.343L5.132 7ZM8 3.5v5c0 .414.336.75.75.75h1.75c.238 0 .733-.037 1.195-.305c.52-.303.923-.86.923-1.704c0-.42-.092-.794-.283-1.107a1.692 1.692 0 0 0-.283-.35c.152-.279.242-.62.242-1.025c0-.409-.081-.772-.25-1.08a1.69 1.69 0 0 0-.66-.669c-.463-.26-.958-.26-1.126-.26H8.75A.75.75 0 0 0 8 3.5Zm2.5 4.25h-1v-1h.936c.191 0 .38.01.517.077c.052.026.08.053.101.087c.022.035.064.127.064.327a.576.576 0 0 1-.06.297a.304.304 0 0 1-.117.11a.958.958 0 0 1-.44.102Zm-.878-2.5H9.5v-1h.75c.157 0 .301.013.398.068a.191.191 0 0 1 .08.08c.024.044.066.149.066.36a.63.63 0 0 1-.06.31a.253.253 0 0 1-.095.096a.762.762 0 0 1-.357.086h-.66Zm-8.122 7a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1-.75-.75Zm.75 3.25a.75.75 0 0 0 0 1.5h15.5a.75.75 0 0 0 0-1.5H2.25Z"
      />
    </svg>
  );
}
export default TextUnderlineDoubleFilled;
