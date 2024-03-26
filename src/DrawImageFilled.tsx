import React, { SVGProps } from "react";

export function DrawImageFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 3a3 3 0 0 0-3 3v9.076a.51.51 0 0 0 .868.363l1.342-1.325l3.738-3.68a1.5 1.5 0 0 1 2.104 0l1.742 1.715l2.308-2.308A2.86 2.86 0 0 1 17 9.003V6a3 3 0 0 0-3-3H6Zm8 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm-2.727 7.17l1.813-1.814l-1.735-1.709a.5.5 0 0 0-.702 0l-4.224 4.159c-.22.236-.008.587.296.478l.327-.117c.705-.253 1.764-.55 2.747-.154c.286.115.512.28.684.472c.154-.495.426-.947.794-1.315Zm.707.707l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.221.305c-1.122.328-2.795.222-3.314-.183c-.449-.35-.467-.887-.316-1.244c.034-.08-.026-.183-.111-.17c-.495.07-.9.25-1.3.427c-.584.26-1.156.513-1.976.411c-.711-.088-1.107-.459-1.325-.825c-.122-.204.147-.392.36-.286c.368.184.829.335 1.216.25c.251-.056.577-.193.943-.347c.885-.373 2.003-.843 2.863-.497c.636.256.583.981.404 1.33c-.035.066-.008.16.065.177a4.6 4.6 0 0 0 1.112.088a.917.917 0 0 1 .023-.14l.375-1.498a2.18 2.18 0 0 1 .578-1.02Z"
      />
    </svg>
  );
}
export default DrawImageFilled;
