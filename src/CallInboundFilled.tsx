import type { SVGProps } from "react";

export function CallInboundFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.535 2.116c-1.04-.264-2.13-.152-2.984.326c-.87.486-1.48 1.348-1.51 2.501c-.046 1.802.371 4.22 2.027 7.058c1.635 2.803 3.44 4.483 4.938 5.481c.946.631 1.991.648 2.884.237c.88-.405 1.594-1.214 1.965-2.217a1.838 1.838 0 0 0-.12-1.536l-.804-1.435a2.5 2.5 0 0 0-3.441-.938l-.437.255c-.349.203-.704.154-.898-.049c-.652-.681-1.245-1.678-1.513-2.576c-.075-.251.045-.568.372-.775l.79-.502a2.5 2.5 0 0 0 .829-3.354l-.898-1.566a1.929 1.929 0 0 0-1.2-.91Zm11.319.03a.5.5 0 0 1 0 .707l-5.147 5.146H16.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 1 1 1 0v3.793l5.146-5.146a.5.5 0 0 1 .707 0Z"
      />
    </svg>
  );
}
export default CallInboundFilled;
