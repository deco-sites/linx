"use client";

import { useUser } from "apps/vtex/hooks/useUser.ts";
import Icon from "../../ui/Icon.tsx";

export default function Login() {
  const { user } = useUser();
  const isLoggedIn = !!user.value?.email;

  return (
    <a
      class={"btn btn-sm btn-ghost flex-nowrap" + (
        isLoggedIn ? " btn-block max-w-[128px]" : " btn-circle"
      )}
      href={isLoggedIn ? "/account" : "/login"}
      aria-label={isLoggedIn ? "Ver conta" : "Entrar na conta"}
    >
      <Icon id="User" size={24} strokeWidth={0.4} class="shrink-0" />
      <span class="line-clamp-1">{isLoggedIn && user.value?.email}</span>
    </a>
  );
}
