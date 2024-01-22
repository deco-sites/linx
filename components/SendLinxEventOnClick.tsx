import { useEffect } from "preact/hooks";
import { Source } from "apps/linx-impulse/utils/types/linx.ts";
import { invoke } from "../runtime.ts";
import { InteractionType } from "apps/linx-impulse/utils/types/search.ts";

interface Props {
  componentId: string;
  source: Source;
  trackingId: string;
  interactionType?: InteractionType;
}

export default function SendLinxEventOnClick(
  { componentId, ...params }: Props,
) {
  useEffect(() => {
    const component = document.getElementById(componentId);
    if (!component) return;
    component.addEventListener("click", async () => {
      await invoke["linx-impulse"].actions.analytics.sendEvent({
        event: "click",
        params,
      });
    });
  }, []);

  return <></>;
}
