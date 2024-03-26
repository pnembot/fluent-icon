import React, { SVGProps } from "react";

export function Whiteboard(props: SVGProps<SVGSVGElement>) {
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
        d="m17.331 3.461l.11.102l.102.11a1.928 1.928 0 0 1-.103 2.606l-3.603 3.617a1.892 1.892 0 0 1-.794.477l-1.96.591a.841.841 0 0 1-1.047-.567a.851.851 0 0 1 .005-.503l.621-1.942c.093-.289.252-.55.465-.765l3.612-3.625a1.904 1.904 0 0 1 2.592-.1Zm-1.884.806l-3.611 3.626a.906.906 0 0 0-.221.363l-.533 1.664l1.672-.505c.14-.042.27-.12.374-.224l3.603-3.617a.929.929 0 0 0 .06-1.24l-.06-.065l-.064-.06a.904.904 0 0 0-1.22.058ZM12.891 4H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7.134l-1 1.004V13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.23c.573-.486 1.34-1.11 2.074-1.535c.41-.237.772-.39 1.062-.439c.281-.048.423.01.51.098a.327.327 0 0 1 .106.185a.59.59 0 0 1-.04.276c-.093.276-.31.602-.602 1.01l-.094.132c-.252.35-.538.747-.736 1.144c-.225.447-.392.995-.204 1.557c.17.508.498.845.926 1.011c.402.156.844.144 1.236.073c.785-.14 1.584-.552 2.02-.813a.5.5 0 0 0-.515-.858c-.399.24-1.075.578-1.681.687c-.303.054-.537.042-.698-.021c-.136-.053-.26-.153-.34-.395c-.062-.188-.03-.435.15-.793c.16-.32.396-.649.656-1.01l.093-.131c.276-.386.587-.832.737-1.273c.077-.229.122-.486.08-.753a1.323 1.323 0 0 0-.386-.736c-.397-.396-.914-.456-1.386-.376c-.462.079-.945.3-1.394.559c-.546.315-1.096.722-1.574 1.104V7a2 2 0 0 1 2-2h6.895l.996-1Z"
      />
    </svg>
  );
}
export default Whiteboard;
