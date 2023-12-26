"use client";

import { ReactNode } from "react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function StoreProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
