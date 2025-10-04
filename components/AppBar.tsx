"use client";

import { ContactUsButton } from "./ContactUsButton";

export const AppBar = function () {
  return (
    <div className="flex p-4 border-b">
      <div className="flex-1 flex items-center">Pledge Enterprise</div>
      <ContactUsButton />
    </div>
  );
};
