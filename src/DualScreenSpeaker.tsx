import React, { SVGProps } from "react";

export function DualScreenSpeaker(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.65 2.2c.121.162.285.453.443.874c.255.68.407 1.49.407 2.426c0 .936-.152 1.745-.407 2.426c-.158.421-.322.712-.443.874a.5.5 0 0 1-.848-.523l.116-.182c.066-.112.15-.286.239-.52c.213-.57.343-1.261.343-2.075c0-.814-.13-1.505-.343-2.074a3.475 3.475 0 0 0-.239-.52L16.85 2.8a.5.5 0 1 1 .8-.6Zm-3.959-.162A.5.5 0 0 1 14 2.5v6a.5.5 0 0 1-.854.354L11.293 7H10.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.793l1.853-1.854a.5.5 0 0 1 .545-.108Zm2.533 1.929a5.509 5.509 0 0 0-.277-.69a.5.5 0 1 0-.894.447c.052.105.137.303.223.56c.14.421.224.84.224 1.216s-.084.795-.224 1.217a5.456 5.456 0 0 1-.147.39l-.076.17a.5.5 0 1 0 .894.447a5.51 5.51 0 0 0 .277-.69c.172-.516.276-1.035.276-1.534c0-.499-.104-1.018-.276-1.533ZM17 14V9.98a1.51 1.51 0 0 0 1-.18V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.085A1.498 1.498 0 0 0 9 4.5V5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V7.618c.265.238.616.382 1 .382v7H16a1 1 0 0 0 1-1Zm-11-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"
      />
    </svg>
  );
}
export default DualScreenSpeaker;
