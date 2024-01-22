"use client";

import { invoke } from "$store/runtime.ts";

export default function TriggerEvent() {
  return (
    <button
      onClick={async () => {
        await invoke["linx-impulse"].actions.analytics.sendEvent({
          event: "view",
          params: {
            page: "cart",
            id: "1234",
            items: [{
              pid: "5678",
              quantity: 1,
              price: 10,
            }],
            source: "desktop",
          },
        });
      }}
    >
      TriggerEvent
    </button>
  );
}
