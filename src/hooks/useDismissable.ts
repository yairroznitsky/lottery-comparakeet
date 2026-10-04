import { useEffect, type RefObject } from "react";

interface UseDismissableOptions {
  open: boolean;
  onDismiss: () => void;
  containerRef: RefObject<HTMLElement | null>;
  /** Also dismiss when focus moves outside the container (desktop dropdown blur). */
  dismissOnFocusOutside?: boolean;
}

export function useDismissable({
  open,
  onDismiss,
  containerRef,
  dismissOnFocusOutside = false,
}: UseDismissableOptions) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onDismiss();
      }
    };

    const onPointerUp = (event: MouseEvent | TouchEvent) => {
      const root = containerRef.current;
      if (!root) {
        return;
      }
      const target = event.target as Node | null;
      if (target && !root.contains(target)) {
        onDismiss();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mouseup", onPointerUp);
    document.addEventListener("touchend", onPointerUp);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mouseup", onPointerUp);
      document.removeEventListener("touchend", onPointerUp);
    };
  }, [open, onDismiss, containerRef]);

  useEffect(() => {
    if (!open || !dismissOnFocusOutside) {
      return;
    }

    const onFocusIn = (event: FocusEvent) => {
      const root = containerRef.current;
      if (!root) {
        return;
      }
      const target = event.target as Node | null;
      if (target && !root.contains(target)) {
        onDismiss();
      }
    };

    document.addEventListener("focusin", onFocusIn);
    return () => document.removeEventListener("focusin", onFocusIn);
  }, [open, dismissOnFocusOutside, onDismiss, containerRef]);
}
