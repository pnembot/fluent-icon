import type { SVGProps } from "react";

export function ImmersiveReaderFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 4.75v5.45a1.501 1.501 0 0 0-1.5 0V4.75a.25.25 0 0 0-.25-.25H12c-.69 0-1.25.56-1.25 1.25V12h-.25c-.522 0-.981.267-1.25.67V5.75c0-.69-.56-1.25-1.25-1.25H3.75a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25H8c.409 0 .772-.196 1-.5v.5c0 .425.176.808.46 1.08c-.423.267-.924.42-1.46.42H3.75A1.75 1.75 0 0 1 2 15.25V4.75C2 3.784 2.784 3 3.75 3H8c.788 0 1.499.331 2 .863A2.742 2.742 0 0 1 12 3h4.25c.966 0 1.75.784 1.75 1.75Zm.133 6.45c.121.162.285.453.443.874c.255.68.407 1.49.407 2.426c0 .936-.152 1.745-.407 2.425c-.158.422-.322.713-.443.875a.5.5 0 0 1-.848-.523l.116-.182c.066-.112.15-.286.239-.52c.213-.57.343-1.261.343-2.075c0-.814-.13-1.505-.343-2.075a3.488 3.488 0 0 0-.239-.52l-.068-.105a.5.5 0 1 1 .8-.6Zm-4.442-.162A.5.5 0 0 1 14 11.5v6a.5.5 0 0 1-.854.354L11.293 16H10.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.793l1.853-1.854a.5.5 0 0 1 .545-.108Zm3.016 1.929a5.519 5.519 0 0 0-.277-.69a.5.5 0 0 0-.894.447c.052.105.137.303.223.56c.14.421.224.84.224 1.216s-.084.795-.224 1.217a5.499 5.499 0 0 1-.147.39l-.076.17a.5.5 0 0 0 .894.447c.073-.145.175-.385.277-.69c.172-.516.276-1.035.276-1.534c0-.499-.104-1.018-.276-1.533Z"
      />
    </svg>
  );
}
export default ImmersiveReaderFilled;
