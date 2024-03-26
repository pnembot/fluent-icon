import React, { SVGProps } from "react";

export function DrawImage(props: SVGProps<SVGSVGElement>) {
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
        d="M14 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.003c-.341.016-.68.092-1 .229V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8.826a.2.2 0 0 0 .34.142l.807-.796l-.002-.003l1.048-1.03l.206-.202l2.55-2.505a1.5 1.5 0 0 1 2.102 0l1.745 1.714l-.707.708l-1.739-1.709a.5.5 0 0 0-.7 0l-2.756 2.707l-1.851 1.828c-.758.748-2.043.21-2.043-.854V6Zm.4 11.035c.369.184.83.335 1.217.25c.251-.056.577-.193.943-.347c.885-.373 2.003-.843 2.862-.497c.637.256.584.981.405 1.33c-.035.066-.008.16.065.177a4.6 4.6 0 0 0 1.112.088a.917.917 0 0 1 .023-.14l.375-1.498a2.18 2.18 0 0 1 .578-1.02l4.83-4.83a1.87 1.87 0 1 1 2.644 2.645l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.222.305c-1.121.328-2.794.222-3.313-.183c-.449-.35-.467-.887-.316-1.244c.034-.08-.026-.183-.111-.17c-.495.07-.9.25-1.3.427c-.585.26-1.156.513-1.976.411c-.711-.088-1.107-.459-1.325-.825c-.122-.204.147-.392.36-.286Z"
      />
    </svg>
  );
}
export default DrawImage;