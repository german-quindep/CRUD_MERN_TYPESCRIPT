import { Toast } from "primereact";
import { useRef } from "react";

interface ErrorsServer {
  errors: any;
}

export const ToastErrors = ({ errors }: ErrorsServer) => {
  const toast = useRef<Toast>(null);
  if (typeof errors === "string" || errors instanceof String) {
    toast.current?.show({
      severity: "error",
      summary: "Error ",
      detail: errors,
      life: 3000,
    });
    return <Toast ref={toast} />;
  } else {
    errors.map((res: any) =>
      toast.current?.show([
        {
          severity: "error",
          summary: "Error Message",
          detail: res.msg,
          life: 3000,
        },
      ])
    );
    return <Toast ref={toast} />;
  }
};
