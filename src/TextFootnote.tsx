import React, { SVGProps } from "react";

export function TextFootnote(props: SVGProps<SVGSVGElement>) {
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
        d="M18 3.5a.5.5 0 0 0-1 0c0 .467-.103.839-.3 1.167c-.2.334-.516.65-.985.977a.5.5 0 1 0 .57.821c.265-.184.505-.377.715-.584V9.5a.5.5 0 0 0 1 0v-6Zm-7.507 11.542c.15 0 .274-.05.371-.146a.503.503 0 0 0 .146-.372v-.663h.024c.211.373.493.663.846.87c.357.207.763.31 1.217.31c.812 0 1.463-.296 1.954-.888c.49-.596.736-1.391.736-2.385c0-.99-.245-1.783-.736-2.38c-.491-.596-1.136-.894-1.935-.894a2.35 2.35 0 0 0-1.2.31a2.23 2.23 0 0 0-.833.858h-.024V6.608a.564.564 0 0 0-.152-.408a.49.49 0 0 0-.378-.158a.51.51 0 0 0-.383.158a.578.578 0 0 0-.146.408v7.916c0 .155.045.28.134.378c.09.093.209.14.359.14Zm3.724-1.558c-.325.418-.767.627-1.327.627c-.54 0-.981-.215-1.326-.645c-.34-.43-.511-.996-.511-1.698c0-.698.17-1.262.51-1.692c.346-.434.788-.651 1.327-.651c.56 0 1.002.21 1.327.633c.325.422.487.992.487 1.71c0 .722-.162 1.294-.487 1.716ZM2.159 14.865c.11.09.247.135.412.135c.27 0 .457-.14.558-.422l.806-2.19h3.623l.813 2.19c.101.281.287.422.558.422c.165 0 .3-.045.406-.135a.44.44 0 0 0 .165-.348a.899.899 0 0 0-.07-.306L6.48 6.526C6.344 6.176 6.105 6 5.763 6c-.364 0-.614.177-.749.532L2.07 14.211a.899.899 0 0 0-.07.306c0 .138.053.255.159.348Zm5.076-3.414h-2.97l1.466-4.025h.038l1.466 4.025Z"
      />
    </svg>
  );
}
export default TextFootnote;