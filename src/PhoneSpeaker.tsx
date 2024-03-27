import type { SVGProps } from "react";

export function PhoneSpeaker(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 14a.5.5 0 0 0 0 1h1v-.5c0-.175.03-.344.085-.5H8Zm-2 3h3.085a1.5 1.5 0 0 0 1.4 1H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7.086a1.5 1.5 0 0 0-1 0V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm7.691-4.962A.5.5 0 0 1 14 12.5v6a.5.5 0 0 1-.854.354L11.293 17H10.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.793l1.853-1.854a.5.5 0 0 1 .545-.108Zm3.959.162c.121.162.285.453.443.875c.255.68.407 1.489.407 2.425c0 .936-.152 1.745-.407 2.426c-.158.421-.322.712-.443.874a.5.5 0 0 1-.848-.523l.116-.182a3.47 3.47 0 0 0 .239-.52c.213-.57.343-1.261.343-2.075c0-.814-.13-1.505-.343-2.074a3.476 3.476 0 0 0-.239-.52l-.068-.106a.5.5 0 0 1 .8-.6Zm-1.426 1.767a5.509 5.509 0 0 0-.277-.69a.5.5 0 1 0-.894.447c.052.105.137.303.223.56c.14.421.224.84.224 1.216c0 .377-.084.795-.224 1.217a5.45 5.45 0 0 1-.147.39l-.076.17a.5.5 0 1 0 .894.447c.073-.145.175-.385.277-.69c.172-.516.276-1.035.276-1.534c0-.498-.104-1.018-.276-1.533Z"
      />
    </svg>
  );
}
export default PhoneSpeaker;
