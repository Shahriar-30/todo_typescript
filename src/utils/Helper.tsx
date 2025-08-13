import type { DataObj, localDbProps } from "./Interface";

export const localDB = (props: localDbProps): DataObj[] | void => {
  const gettingLocal = localStorage.getItem("todo");
  const localValue: DataObj[] = gettingLocal ? JSON.parse(gettingLocal) : [];
  if (props.localSet && props.data) {
    localValue.push(props.data);
    localStorage.setItem("todo", JSON.stringify(localValue));
  } else {
    return localValue;
  }
};

